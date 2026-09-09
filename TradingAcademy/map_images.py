import re

with open('d:/test/Forexnew/assets/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def print_mapping(section):
    idx = content.find(section + ':')
    if idx == -1: return
    
    next_keys = ['courses:', 'blogs:', 'mentors:', 'testimonials:']
    end_idx = len(content)
    for k in next_keys:
        i = content.find(k, idx + len(section) + 2)
        if i != -1 and i < end_idx:
            end_idx = i
            
    section_text = content[idx:end_idx]
    
    items = section_text.split('{')
    for item in items:
        title_m = re.search(r'(?:title|name):\s*\'([^\']+)\'', item)
        img_m = re.search(r'(?:thumbImage|image|thumb|avatar)\s*:\s*\'([^\']+)\'', item)
        if title_m and img_m:
            print(f"{title_m.group(1)} -> {img_m.group(1).split('?')[0]}")

print('--- COURSES ---')
print_mapping('courses')
print('--- BLOGS ---')
print_mapping('blogs')
