import re

with open('d:/test/Forexnew/home-2.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    # Why Learn With Us
    r'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f\?w=800&h=500&fit=crop': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    
    # Market Analysis
    r'https://images.unsplash.com/photo-1551288049-bebda4e38f71\?w=800&h=600&fit=crop': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    
    # Resources 1
    r'https://images.unsplash.com/photo-1460925895917-afdab827c52f\?w=400&h=400&fit=crop': 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&h=400&fit=crop',
    
    # Resources 2
    r'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e\?w=400&h=400&fit=crop': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    
    # Mentors 1
    r'https://images.unsplash.com/photo-1560250097-0b93528c311a\?w=200&h=200&fit=crop': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    
    # Mentors 2
    r'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e\?w=200&h=200&fit=crop': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop'
}

new_content = content
for pattern, replacement in replacements.items():
    new_content = re.sub(pattern, replacement, new_content)

with open('d:/test/Forexnew/home-2.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated home-2.html images to avoid duplication.')
