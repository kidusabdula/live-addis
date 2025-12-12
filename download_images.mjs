import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import crypto from "crypto";

const INPUT_FILE = "public/live-addis-facebook-scrap.json";
const OUTPUT_DIR = "./public/images/posts";
const OUTPUT_JSON = "src/data/clean_data.json";

// Ensure directories exist
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });

function downloadImage(url) {
  return new Promise((resolve) => {
    try {
      const filename =
        crypto.createHash("md5").update(url).digest("hex") + ".jpg";
      const filepath = path.join(OUTPUT_DIR, filename);

      // If file already exists, skip
      if (fs.existsSync(filepath)) {
        resolve(`/images/posts/${filename}`);
        return;
      }

      const protocol = url.startsWith("https") ? https : http;

      protocol
        .get(url, { timeout: 30000 }, (response) => {
          if (response.statusCode === 200) {
            const file = fs.createWriteStream(filepath);
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              console.log(`✅ Downloaded: ${filename}`);
              resolve(`/images/posts/${filename}`);
            });
          } else {
            resolve(null);
          }
        })
        .on("error", () => {
          resolve(null);
        });
    } catch {
      resolve(null);
    }
  });
}

function extractBestUrl(mediaItem) {
  if (mediaItem.thumbnail) return mediaItem.thumbnail;
  if (mediaItem.image?.uri) return mediaItem.image.uri;
  if (mediaItem.photo_image?.uri) return mediaItem.photo_image.uri;
  if (mediaItem.fallback_image?.uri) return mediaItem.fallback_image.uri;
  return null;
}

async function processData() {
  const rawData = fs.readFileSync(INPUT_FILE, "utf-8");
  const data = JSON.parse(rawData);

  const processedPosts = [];
  let postId = 0;

  for (const post of data) {
    postId++;

    const processedPost = {
      id: postId,
      text: post.text || "",
      url: post.url || "",
      likes: post.likes || 0,
      comments: post.comments || 0,
      shares: post.shares || 0,
      media: [],
    };

    // Skip posts without meaningful content
    if (!processedPost.text && !post.media) continue;

    // Skip unavailable content
    if (post.media?.[0]?.title_with_entities) continue;

    // Process media
    if (post.media?.length) {
      for (const mediaItem of post.media) {
        const targetUrl = extractBestUrl(mediaItem);

        if (targetUrl?.includes("fbcdn")) {
          const localPath = await downloadImage(targetUrl);
          if (localPath) {
            processedPost.media.push({
              local_path: localPath,
              ocr_text: mediaItem.ocrText || "",
              type: mediaItem.__typename || "Photo",
              original_id: mediaItem.id || "",
            });
          }
        }
      }
    }

    // Only include posts with content
    if (processedPost.text || processedPost.media.length) {
      processedPosts.push(processedPost);
    }
  }

  // Save processed data
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(processedPosts, null, 2));

  console.log(`\n✅ Processed ${processedPosts.length} posts`);
  console.log(`📁 Images saved to: ${OUTPUT_DIR}`);
  console.log(`📄 Clean data saved to: ${OUTPUT_JSON}`);
}

console.log("🚀 Starting LIVE-ADDIS Image Download Script...");
console.log("-".repeat(50));
processData();
