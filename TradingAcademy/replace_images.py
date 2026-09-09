import re

with open('d:/test/Forexnew/assets/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    r'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3\?[^\']+': 'assets/img/course_fundamentals.jpg',
    r'https://images.unsplash.com/photo-1611095973763-414019e72400\?[^\']+': 'assets/img/course_technical_analysis.jpg',
    r'https://images.unsplash.com/photo-1551288049-bebda4e38f71\?[^\']+': 'assets/img/course_options.jpg',
    r'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f\?[^\']+': 'assets/img/course_futures.jpg',
    r'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d\?[^\']+': 'assets/img/course_risk_management.jpg',
    r'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e\?[^\']+': 'assets/img/course_swing_trading.jpg',
    r'https://images.unsplash.com/photo-1535320903710-d993d3d77d29\?[^\']+': 'assets/img/course_intraday.jpg',
    r'https://images.unsplash.com/photo-1460925895917-afdab827c52f\?[^\']+': 'assets/img/course_mutual_funds.jpg',
    r'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e\?[^\']+': 'assets/img/course_forex.jpg',
    
    r'https://images.unsplash.com/photo-1640161704729-cbe966a08476\?[^\']+': 'assets/img/blog_nifty_bank.jpg',
    r'https://images.unsplash.com/photo-1635070041078-e363dbe005cb\?[^\']+': 'assets/img/blog_rsi_divergence.jpg',
    r'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74\?[^\']+': 'assets/img/blog_options_chain.jpg',
    r'assets/img/forex_risk_management.jpg': 'assets/img/blog_forex_risk.jpg'
}

new_content = content
for pattern, replacement in replacements.items():
    new_content = re.sub(pattern, replacement, new_content)

with open('d:/test/Forexnew/assets/js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated data.js with new image paths.')
