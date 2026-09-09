import os
import glob
import re
from collections import defaultdict

html_files = glob.glob('d:/test/Forexnew/*.html')
img_map = defaultdict(list)
all_imgs = []

img_regex = re.compile(r'<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>')

for file in html_files:
    filename = os.path.basename(file)
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = img_regex.findall(content)
    for src in matches:
        img_map[src].append(filename)
        all_imgs.append((filename, src))

with open('d:/test/Forexnew/image_audit.md', 'w', encoding='utf-8') as f:
    f.write('# Image Audit Report\n\n')
    for src, locations in img_map.items():
        if len(locations) > 1:
            f.write(f'### DUP: {src} ({len(locations)} uses)\n')
        else:
            f.write(f'### {src} (1 use)\n')
        for loc in locations:
            f.write(f'- {loc}\n')
            
print(f'Found {len(all_imgs)} total img tags. Unique sources: {len(img_map)}. Audit saved to d:/test/Forexnew/image_audit.md')
