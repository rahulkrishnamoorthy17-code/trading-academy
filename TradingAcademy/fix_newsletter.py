import os
import glob

html_files = glob.glob('d:/test/Forexnew/*.html')

old_form = """<form id="newsletterForm" class="d-flex" style="max-width:280px;">
              <input type="email" class="form-control form-control-sm" placeholder="Your email address" required style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-right:none;color:#fff;border-radius:4px 0 0 4px;font-size:0.8rem;padding:0.35rem 0.6rem;box-shadow:none;"/>
              <button type="submit" class="btn btn-primary btn-sm" style="border-radius:0 4px 4px 0;padding:0.35rem 0.8rem;">
                <i class="bi bi-send"></i>
              </button>
            </form>"""

new_form = """<form id="newsletterForm" class="d-flex w-100" style="max-width:320px;">
              <div class="input-group" style="border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.15); background:rgba(255,255,255,0.05); align-items:stretch; height:44px;">
                <span class="input-group-text border-0" style="background:transparent; color:rgba(255,255,255,0.6); padding:0 0.75rem 0 1rem; display:flex; align-items:center;">
                  <i class="bi bi-envelope"></i>
                </span>
                <input type="email" class="form-control border-0 shadow-none" placeholder="Your email address" required style="background:transparent; color:#fff; font-size:0.9rem; padding:0 0.5rem 0 0; display:flex; align-items:center;">
                <button type="submit" class="btn btn-primary border-0 m-0" style="border-radius:0; padding:0 1.25rem; display:flex; align-items:center; justify-content:center;">
                  <i class="bi bi-send"></i>
                </button>
              </div>
            </form>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_form in content:
        new_content = content.replace(old_form, new_form)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {file}')
    else:
        # try without exact whitespace
        import re
        old_pattern = re.compile(r'<form id="newsletterForm" class="d-flex" style="max-width:280px;">\s*<input type="email" class="form-control form-control-sm" placeholder="Your email address" required style="background:rgba\(255,255,255,0\.05\);border:1px solid rgba\(255,255,255,0\.1\);border-right:none;color:#fff;border-radius:4px 0 0 4px;font-size:0\.8rem;padding:0\.35rem 0\.6rem;box-shadow:none;\"/>\s*<button type="submit" class="btn btn-primary btn-sm" style="border-radius:0 4px 4px 0;padding:0\.35rem 0\.8rem;">\s*<i class="bi bi-send"></i>\s*</button>\s*</form>', re.DOTALL)
        
        new_content = old_pattern.sub(new_form, content)
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'Regex Updated {file}')
