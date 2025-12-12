import json
import os
import requests
import hashlib
from pathlib import Path

# Configuration
INPUT_FILE = 'public/live-addis-facebook-scrap.json'
OUTPUT_DIR = './public/images/posts'
OUTPUT_JSON = 'src/data/clean_data.json'

# Ensure output directories exist
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)

def download_image(url):
    """Download image from URL and return local path"""
    try:
        # Create a unique filename based on the URL hash
        filename = hashlib.md5(url.encode('utf-8')).hexdigest() + ".jpg"
        filepath = os.path.join(OUTPUT_DIR, filename)
        
        # If file exists, skip download
        if os.path.exists(filepath):
            return f"/images/posts/{filename}"
            
        response = requests.get(url, timeout=30)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded: {filename}")
            return f"/images/posts/{filename}"
    except Exception as e:
        print(f"Error downloading {url[:50]}...: {e}")
    return None

def extract_best_url(media_item):
    """Extract the best available image URL from a media item"""
    # Priority order for URLs
    if 'thumbnail' in media_item and media_item['thumbnail']:
        return media_item['thumbnail']
    if 'image' in media_item and media_item['image'] and 'uri' in media_item['image']:
        return media_item['image']['uri']
    if 'photo_image' in media_item and media_item['photo_image'] and 'uri' in media_item['photo_image']:
        return media_item['photo_image']['uri']
    if 'fallback_image' in media_item and media_item['fallback_image'] and 'uri' in media_item['fallback_image']:
        return media_item['fallback_image']['uri']
    return None

def process_data():
    """Process the Facebook scrape data"""
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    processed_posts = []
    post_id = 0
    
    for post in data:
        post_id += 1
        processed_post = {
            'id': post_id,
            'text': post.get('text', ''),
            'url': post.get('url', ''),
            'likes': post.get('likes', 0),
            'comments': post.get('comments', 0),
            'shares': post.get('shares', 0),
            'media': []
        }
        
        # Skip posts without meaningful content
        if not processed_post['text'] and 'media' not in post:
            continue
        
        # Skip unavailable content
        if 'media' in post:
            # Check if it's an unavailable content marker
            first_media = post['media'][0] if post['media'] else {}
            if 'title_with_entities' in first_media:
                continue
        
        # Process media
        if 'media' in post and post['media']:
            for media_item in post['media']:
                # Skip non-image types
                if media_item.get('__typename') not in ['Photo', 'Video', None]:
                    if 'thumbnail' not in media_item and 'image' not in media_item:
                        continue
                
                target_url = extract_best_url(media_item)
                
                if target_url and "fbcdn" in target_url:
                    local_path = download_image(target_url)
                    if local_path:
                        processed_post['media'].append({
                            'local_path': local_path,
                            'ocr_text': media_item.get('ocrText', ''),
                            'type': media_item.get('__typename', 'Photo'),
                            'original_id': media_item.get('id', '')
                        })
        
        # Only include posts that have either text or media
        if processed_post['text'] or processed_post['media']:
            processed_posts.append(processed_post)
    
    # Save processed data
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(processed_posts, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Processed {len(processed_posts)} posts")
    print(f"📁 Images saved to: {OUTPUT_DIR}")
    print(f"📄 Clean data saved to: {OUTPUT_JSON}")

if __name__ == "__main__":
    print("🚀 Starting LIVE-ADDIS Image Download Script...")
    print("-" * 50)
    process_data()
