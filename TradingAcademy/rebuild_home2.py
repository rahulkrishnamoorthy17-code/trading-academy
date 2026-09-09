import re

with open('d:/test/Forexnew/home-2.html', 'r', encoding='utf-8') as f:
    html = f.read()

# The navbar ends at </nav>
# The footer begins at <!-- ====""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
#      FOOTER
# """"""""""""""""""""""""""""""""""""""""""""""""""""""""""==== -->

nav_end = html.find('</nav>') + 6
footer_start = html.find('<!-- ====""""""""""""""""""""""""""""""""""""""""""""""""""""""""""')

# Define the new content
new_content = """

<!-- 1. HERO SECTION -->
<section class="home2-hero">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
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
      </div>
      <div class="col-lg-6">
        <div class="home2-hero-img-wrap">
          <!-- Placeholder until quota resets -->
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop" class="img-fluid w-100" alt="Advanced trading dashboard">
          
          <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(to top, rgba(15,23,42,0.9), transparent);">
             <div class="d-flex justify-content-between text-white" style="font-family:'Inter',monospace;font-size:0.85rem;">
                <span>NIFTY <span class="text-success"><i class="bi bi-caret-up-fill"></i> 112.45</span></span>
                <span>BANKNIFTY <span class="text-success"><i class="bi bi-caret-up-fill"></i> 340.10</span></span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 2. MARKET / TRADING STATISTICS -->
<section class="home2-stats-bar">
  <div class="container">
    <div class="row g-4">
      <div class="col-6 col-md-3 home2-stat-item">
        <div class="home2-stat-num">15K+</div>
        <div class="home2-stat-label">Active Traders</div>
      </div>
      <div class="col-6 col-md-3 home2-stat-item">
        <div class="home2-stat-num">25+</div>
        <div class="home2-stat-label">Expert Courses</div>
      </div>
      <div class="col-6 col-md-3 home2-stat-item">
        <div class="home2-stat-num">98%</div>
        <div class="home2-stat-label">Success Rate</div>
      </div>
      <div class="col-6 col-md-3 home2-stat-item">
        <div class="home2-stat-num">24/7</div>
        <div class="home2-stat-label">Market Support</div>
      </div>
    </div>
  </div>
</section>

<!-- 3. WHY LEARN WITH US -->
<section class="home2-section home2-bg-alt">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-5">
        <h2 class="mb-4">Why Choose Our Trading Academy?</h2>
        <p class="text-muted mb-4">We bridge the gap between theoretical knowledge and real-world market execution. Learn the exact frameworks used by institutional traders.</p>
        
        <div class="d-flex align-items-start mb-4">
          <div class="home2-icon-box home2-icon-primary me-3 flex-shrink-0"><i class="bi bi-shield-check"></i></div>
          <div>
            <h5>Risk-First Approach</h5>
            <p class="text-muted small mb-0">We prioritize capital preservation before profit generation. Learn precise stop-loss and sizing rules.</p>
          </div>
        </div>
        
        <div class="d-flex align-items-start mb-4">
          <div class="home2-icon-box home2-icon-secondary me-3 flex-shrink-0"><i class="bi bi-graph-up"></i></div>
          <div>
            <h5>Live Market Examples</h5>
            <p class="text-muted small mb-0">Theory is useless without execution. Every concept is taught using real, recent NSE/BSE charts.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop" class="img-fluid rounded-4 shadow-lg border border-secondary border-opacity-10" alt="Professional trader analyzing multiple screens">
      </div>
    </div>
  </div>
</section>

<!-- 4. FEATURED TRADING COURSES -->
<section class="home2-section">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Featured Trading Courses</h2>
      <p class="text-muted">Master the markets with our structured curriculum.</p>
    </div>
    
    <!-- We will use the JS injection for real data, but with a specific layout -->
    <div class="row g-4" id="allCoursesGrid2">
        <!-- JS will populate this -->
    </div>
    
    <div class="text-center mt-5">
      <a href="courses.html" class="btn btn-outline-primary btn-lg">View Entire Curriculum</a>
    </div>
  </div>
</section>

<!-- 5. TRADING SKILLS YOU WILL LEARN -->
<section class="home2-section home2-bg-alt">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Trading Skills You Will Master</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="home2-card text-center">
          <div class="home2-icon-box home2-icon-primary mx-auto"><i class="bi bi-bar-chart-steps"></i></div>
          <h4 class="mb-3">Price Action</h4>
          <p class="text-muted small">Read raw candlestick data without lagging indicators. Identify institutional supply and demand zones.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="home2-card text-center">
          <div class="home2-icon-box home2-icon-secondary mx-auto"><i class="bi bi-braces-asterisk"></i></div>
          <h4 class="mb-3">Options Greeks</h4>
          <p class="text-muted small">Understand Delta, Theta, Vega, and Gamma. Build non-directional income strategies.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="home2-card text-center">
          <div class="home2-icon-box home2-icon-warning mx-auto"><i class="bi bi-pie-chart"></i></div>
          <h4 class="mb-3">Position Sizing</h4>
          <p class="text-muted small">Calculate exact quantities to trade based on portfolio risk tolerance and volatility.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 6. MARKET ANALYSIS / LEARNING PROCESS -->
<section class="home2-section">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6 order-lg-2">
        <h2>The Learning Process</h2>
        <p class="text-muted mb-5">How we take you from a complete beginner to an independent, confident trader.</p>
        
        <div class="home2-timeline">
          <div class="home2-timeline-item">
            <h5>1. Core Concepts</h5>
            <p class="text-muted small mb-0">Learn market structure, charting platforms, and foundational trading terminology.</p>
          </div>
          <div class="home2-timeline-item">
            <h5>2. Strategy Development</h5>
            <p class="text-muted small mb-0">Master 3 highly specific trading setups with clear entry, target, and stop-loss rules.</p>
          </div>
          <div class="home2-timeline-item">
            <h5>3. Backtesting</h5>
            <p class="text-muted small mb-0">Prove your strategy works historically before risking real capital.</p>
          </div>
          <div class="home2-timeline-item" style="padding-bottom:0;">
            <h5>4. Live Execution</h5>
            <p class="text-muted small mb-0">Trade live with our mentors. Focus on psychology and execution discipline.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 order-lg-1">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" class="img-fluid rounded-4 shadow" alt="Learning process on trading charts">
      </div>
    </div>
  </div>
</section>

<!-- 7. RISK MANAGEMENT -->
<section class="home2-section" style="background:var(--primary); color:#fff;">
  <div class="container text-center">
    <i class="bi bi-shield-lock-fill" style="font-size:3rem; color:rgba(255,255,255,0.8); margin-bottom:1rem; display:block;"></i>
    <h2 class="text-white mb-4">Protect Your Capital First</h2>
    <p class="lead mb-5 mx-auto" style="max-width:700px; color:rgba(255,255,255,0.9);">
      Amateurs focus on how much they can make. Professionals focus on how much they can lose. 
      Our entire curriculum is built on a foundation of strict risk management.
    </p>
    <a href="courses.html?category=Risk" class="btn btn-light btn-lg px-5 fw-bold" style="color:var(--primary);">Learn Risk Management</a>
  </div>
</section>

<!-- 8. TESTIMONIALS -->
<section class="home2-section home2-bg-alt">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Student Success Stories</h2>
      <p class="text-muted">Hear from traders who transformed their performance.</p>
    </div>
    <div class="row g-4" id="testimonialsGrid2">
      <!-- JS Injected -->
    </div>
  </div>
</section>

<!-- 9. FREE LEARNING RESOURCES -->
<section class="home2-section">
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-lg-6">
        <h2>Start Learning For Free</h2>
        <p class="text-muted mb-4">Not ready for a full course? Download our free trading cheat sheets, indicators, and starter guides to begin your journey.</p>
        <ul class="list-unstyled mb-4">
          <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i>Candlestick Pattern Cheat Sheet</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i>Position Sizing Calculator (Excel)</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i>Options Pricing Guide</li>
        </ul>
        <a href="free-resources.html" class="btn btn-outline-primary">Browse All Resources</a>
      </div>
      <div class="col-lg-6">
        <div class="row g-3">
          <div class="col-6">
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop" class="img-fluid rounded-3" alt="Free resource 1">
          </div>
          <div class="col-6 mt-4">
             <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=400&fit=crop" class="img-fluid rounded-3" alt="Free resource 2">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 10. MENTORS -->
<section class="home2-section home2-bg-alt">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Learn From Expert Traders</h2>
      <p class="text-muted">SEBI registered advisors and full-time market professionals.</p>
    </div>
    <!-- Simple static layout for mentors on Home 2 to distinguish from other pages -->
    <div class="row g-4 justify-content-center">
       <div class="col-md-6 col-lg-3">
          <div class="home2-card text-center text-decoration-none">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" class="rounded-circle mb-3 border border-3 border-primary" style="width:120px;height:120px;" alt="Rajesh Kumar">
             <h5>Rajesh Kumar</h5>
             <p class="text-muted small">Equity & Futures</p>
          </div>
       </div>
       <div class="col-md-6 col-lg-3">
          <div class="home2-card text-center">
             <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop" class="rounded-circle mb-3 border border-3 border-primary" style="width:120px;height:120px;" alt="Ananya Patel">
             <h5>Ananya Patel</h5>
             <p class="text-muted small">Options Flow Analyst</p>
          </div>
       </div>
    </div>
    <div class="text-center mt-4">
       <a href="mentors.html" class="btn btn-outline-secondary">View All Mentors</a>
    </div>
  </div>
</section>

<!-- 11. FINAL CTA -->
<section class="home2-section text-center" style="background:linear-gradient(135deg, var(--bg-alt) 0%, var(--bg) 100%);">
  <div class="container">
    <h2 class="mb-3">Ready to Trade Professionally?</h2>
    <p class="text-muted mb-4 mx-auto" style="max-width:600px;">Stop guessing and start analyzing. Join the academy today and get instant access to all premium courses and live sessions.</p>
    <a href="register.html" class="btn btn-primary btn-lg px-5 shadow-lg">Start Learning Now</a>
  </div>
</section>

"""

# Combine parts
final_html = html[:nav_end] + new_content + html[footer_start:]

with open('d:/test/Forexnew/home-2.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("home-2.html completely rewritten!")
