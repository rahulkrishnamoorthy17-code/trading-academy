import re

# Update home-2.html HTML structure
with open('d:/test/Forexnew/home-2.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_col = """      <div class="col-lg-6">
        <div class="tm-hero-badge mb-3" style="background:rgba(16,185,129,.12);border-color:rgba(16,185,129,.25);color:#10b981;display:inline-block;padding:0.4rem 1rem;border-radius:50px;font-weight:600;font-size:0.85rem;">
          <i class="bi bi-graph-up-arrow me-2"></i>Professional Trading Academy
        </div>
        <h1 style="color:var(--text);font-size:clamp(2.5rem,5vw,3.5rem);font-weight:800;line-height:1.2;margin-bottom:1.5rem;font-family:'Outfit',sans-serif;">
          Learn Trading.<br><span style="color:var(--primary);">Manage Risk.</span><br>Build Confidence.
        </h1>
        <p style="color:var(--text-muted);font-size:1.1rem;margin-bottom:2.5rem;max-width:550px;">
          Stop relying on tips. Master technical analysis, options strategies, and institutional risk management with our interactive curriculum.
        </p>
        <div class="d-flex flex-wrap gap-3">
          <a href="courses.html" class="btn btn-primary btn-lg px-4"><i class="bi bi-bar-chart-fill me-2"></i>Explore Courses</a>
          <a href="free-resources.html" class="btn btn-outline-secondary btn-lg px-4"><i class="bi bi-file-earmark-arrow-down me-2"></i>Free Resources</a>
        </div>
      </div>"""

new_col = """      <div class="col-lg-6 text-center">
        <div class="tm-hero-badge mx-auto mb-3" style="background:rgba(16,185,129,.2);border-color:rgba(16,185,129,.4);color:#34d399;display:inline-block;padding:0.4rem 1rem;border-radius:50px;font-weight:600;font-size:0.85rem;">
          <i class="bi bi-graph-up-arrow me-2"></i>Professional Trading Academy
        </div>
        <h1 class="mx-auto text-white" style="font-size:clamp(2.5rem,5vw,3.5rem);font-weight:800;line-height:1.2;margin-bottom:1.5rem;font-family:'Outfit',sans-serif;">
          Learn Trading.<br><span style="color:#3b82f6;">Manage Risk.</span><br>Build Confidence.
        </h1>
        <p class="mx-auto" style="color:#cbd5e1;font-size:1.1rem;margin-bottom:2.5rem;max-width:550px;">
          Stop relying on tips. Master technical analysis, options strategies, and institutional risk management with our interactive curriculum.
        </p>
        <div class="d-flex flex-wrap gap-3 justify-content-center">
          <a href="courses.html" class="btn btn-primary btn-lg px-4"><i class="bi bi-bar-chart-fill me-2"></i>Explore Courses</a>
          <a href="free-resources.html" class="btn btn-outline-light btn-lg px-4"><i class="bi bi-file-earmark-arrow-down me-2"></i>Free Resources</a>
        </div>
        <div class="d-flex gap-4 mt-4 justify-content-center" style="flex-wrap:wrap;">
          <div style="font-size:.85rem;color:#94a3b8;"><span style="font-weight:700;color:#3b82f6;font-size:1.1rem;">10K+</span> Students</div>
          <div style="font-size:.85rem;color:#94a3b8;"><span style="font-weight:700;color:#3b82f6;font-size:1.1rem;">25+</span> Courses</div>
          <div style="font-size:.85rem;color:#94a3b8;"><span style="font-weight:700;color:#3b82f6;font-size:1.1rem;">95%</span> Success Rate</div>
        </div>
      </div>"""

if old_col in html:
    html = html.replace(old_col, new_col)
    with open('d:/test/Forexnew/home-2.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("home-2.html hero text updated!")
else:
    print("Could not find exact text block in home-2.html to replace.")

# Update style.css
with open('d:/test/Forexnew/assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_css = """.home2-hero {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, var(--bg) 0%, var(--bg-alt) 100%);
  position: relative;
  overflow: hidden;
}"""

new_css = """.home2-hero {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.95) 100%), url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1600&h=900&fit=crop') center/cover no-repeat;
  position: relative;
  overflow: hidden;
}"""

if old_css in css:
    css = css.replace(old_css, new_css)
    with open('d:/test/Forexnew/assets/css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("style.css hero background updated!")
else:
    print("Could not find exact CSS block in style.css to replace.")
