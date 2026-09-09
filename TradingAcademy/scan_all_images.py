import os
import glob
import re
from collections import defaultdict

files = glob.glob('d:/test/Forexnew/*.html') + glob.glob('d:/test/Forexnew/assets/js/*.js')
img_map = defaultdict(list)
all_imgs = []

img_regex_html = re.compile(r'<img[^>]+src=[\'\"]([^\'\"]+)[\'\"][^>]*>')
img_regex_js = re.compile(r'(?:thumbImage|image|thumb|avatar)[\'\"]?\s*:\s*[\'\"]([^\'\"]+)[\'\"]')

for file in files:
    filename = os.path.basename(file)
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if filename.endswith('.html'):
        matches = img_regex_html.findall(content)
    else:
        matches = img_regex_js.findall(content)
        
    for src in matches:
        if 'logo.svg' in src or src.startswith('${'):
            continue # ignore logo and dynamic templates in HTML
            
        # extract base image without query params
        base_src = src.split('?')[0]
        
        img_map[base_src].append((filename, src))
        all_imgs.append((filename, base_src))

with open('d:/test/Forexnew/image_audit.md', 'w', encoding='utf-8') as f:
    f.write('# Image Audit Report\n\n')
    for base_src, locations in img_map.items():
        if len(locations) > 1:
            f.write(f'### DUP: {base_src} ({len(locations)} uses)\n')
        else:
            f.write(f'### {base_src} (1 use)\n')
        for loc in locations:
            f.write(f'- {loc[0]} : {loc[1]}\n')
            
print(f'Found {len(all_imgs)} image references. Unique base sources: {len(img_map)}.')
