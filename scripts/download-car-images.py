#!/usr/bin/env python3
"""
Downloads and crops car press images for the venue-upgrade article.
Receives JSON array of {name, url, credit} objects on stdin.
Outputs: /data/research-hub/public/cars/[slug].jpg
"""
import json
import sys
import urllib.request
import os
from PIL import Image
from io import BytesIO

SLUG_MAP = {
    "Kia Seltos 2026": "kia-seltos-2026",
    "Hyundai Creta": "hyundai-creta",
    "Maruti Suzuki XL6": "maruti-xl6",
    "Kia Carens": "kia-carens",
    "Mahindra XUV700": "mahindra-xuv700",
    "Toyota Innova Hycross": "toyota-innova-hycross",
    "Tata Sierra": "tata-sierra",
    "Tata Harrier": "tata-harrier-ice",
    "Tata Harrier EV": "tata-harrier-ev",
    "Renault Duster": "renault-duster",
}

OUTPUT_DIR = "/data/research-hub/public/cars"
TARGET_SIZE = 600  # 600x600 square crop

def download_image(url):
    headers = {'User-Agent': 'Mozilla/5.0 (compatible; research-bot/1.0)'}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return Image.open(BytesIO(resp.read())).convert('RGB')

def crop_square_center(img):
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    cropped = img.crop((left, top, left + min_dim, top + min_dim))
    return cropped.resize((TARGET_SIZE, TARGET_SIZE), Image.LANCZOS)

def save_car_image(name, url, credit):
    slug = SLUG_MAP.get(name)
    if not slug:
        print(f"SKIP: no slug for '{name}'")
        return
    out_path = f"{OUTPUT_DIR}/{slug}.jpg"
    if os.path.exists(out_path):
        print(f"EXISTS: {out_path} — skipping")
        return
    try:
        print(f"DOWNLOADING: {name} from {url}")
        img = download_image(url)
        img = crop_square_center(img)
        img.save(out_path, 'JPEG', quality=88)
        print(f"SAVED: {out_path} ({img.size})")
    except Exception as e:
        print(f"ERROR [{name}]: {e}")

if __name__ == "__main__":
    data = json.load(sys.stdin)
    print(f"Received {len(data)} car entries")
    for entry in data:
        save_car_image(entry['name'], entry['url'], entry.get('credit', ''))
    print("Done")
