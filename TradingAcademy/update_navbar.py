import glob
import os
import re

html_files = glob.glob('d:/test/Forexnew/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content

    # Remove Free Resources nav link
    content = re.sub(r'\s*<li class=\"nav-item\"><a class=\"nav-link\" href=\"free-resources\.html\">Free Resources</a></li>', '', content)
    
    # Remove Mentors nav link
    content = re.sub(r'\s*<li class=\"nav-item\"><a class=\"nav-link\" href=\"mentors\.html\">Mentors</a></li>', '', content)
    
    if file.endswith('home-2.html'):
        # Change home-2.html navbar to match home 1
        content = content.replace('<nav class="navbar navbar-expand-lg tm-navbar" id="mainNavbar" style="position:sticky;top:0;">', '<nav class="navbar navbar-expand-lg tm-navbar fixed-top" id="mainNavbar">')

    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {os.path.basename(file)}')
