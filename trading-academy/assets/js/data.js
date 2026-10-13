/**
 * data.js - Centralized Data Store
 * Trading Academy | All application data lives here.
 * Cards and detail pages read from the SAME source  no mismatch.
 * 
 * Includes: courses, blogs, mentors, liveClasses, recordedLessons,
 *           assignments, portfolio, pricing, resources, students, testimonials
 */

const ACADEMY = {

  //  COURSES 
  courses: [
    {
      id: 1,
      title: 'Stock Market Fundamentals for Beginners',
      shortDesc: 'Build a solid foundation in equity markets, understand how stock exchanges work, and learn to read financial statements.',
      longDesc: 'This course is the perfect starting point for anyone new to the stock market. You will learn everything from how the BSE and NSE function, to reading annual reports and understanding key financial ratios. By the end, you will have the vocabulary and confidence to start analysing companies and making informed investment decisions.',
      category: 'Equity',
      level: 'Beginner',
      duration: '24 hrs',
      lessons: 48,
      price: 4999,
      originalPrice: 9999,
      rating: 4.8,
      reviews: 1240,
      students: 3200,
      instructor: 'Rajesh Kumar',
      instructorId: 1,
      instructorBio: 'SEBI Registered Investment Advisor (INA000012345) with 15+ years in equity markets. Former analyst at HDFC Securities.',
      language: 'Hindi & English',
      featured: true,
      thumbImage: 'assets/img/course_fundamentals.jpg',
      image: 'assets/img/course_fundamentals.jpg',
      whatYouLearn: [
        'How BSE & NSE stock exchanges work',
        'Read and interpret financial statements',
        'Understand market indices (NIFTY, SENSEX)',
        'Key valuation ratios: P/E, P/B, ROE, ROCE',
        'Difference between trading and investing',
        'How to open a demat and trading account',
        'Basics of IPOs and how to apply',
        'Understanding corporate actions'
      ],
      curriculum: [
        { section: 'Module 1: Introduction to Stock Markets', lessons: ['What is the Stock Market?', 'BSE vs NSE', 'SEBI and market regulation', 'Types of financial instruments'] },
        { section: 'Module 2: How Companies Are Valued', lessons: ['Reading a balance sheet', 'P&L statement basics', 'Cash flow analysis', 'Key financial ratios'] },
        { section: 'Module 3: Investing Basics', lessons: ['Growth vs Value investing', 'Understanding dividends', 'Sector analysis', 'Building your first watchlist'] },
        { section: 'Module 4: Practical Steps', lessons: ['Opening a demat account', 'Placing your first order', 'Understanding brokerage charges', 'Tax implications for investors'] }
      ],
      requirements: ['No prior knowledge required', 'Basic smartphone/computer skills', 'Interest in financial markets']
    },
    {
      id: 2,
      title: 'Technical Analysis Masterclass',
      shortDesc: 'Master chart reading, candlestick patterns, support/resistance, and technical indicators used by professional traders.',
      longDesc: 'Technical analysis is the language of the market. In this masterclass, you will learn to read price action, identify high-probability trade setups, use moving averages, RSI, MACD, and Bollinger Bands, and apply them to real NSE charts. This course bridges theory and practice with live chart examples on every concept.',
      category: 'Technical Analysis',
      level: 'Intermediate',
      duration: '36 hrs',
      lessons: 72,
      price: 7999,
      originalPrice: 14999,
      rating: 4.9,
      reviews: 980,
      students: 2800,
      instructor: 'Vikram Singh',
      instructorId: 2,
      instructorBio: 'Certified Financial Technician (CFTe) with 12+ years experience. Full-time technical analyst specialising in swing and positional trading.',
      language: 'English',
      featured: true,
      thumbImage: 'assets/img/course_technical_analysis.jpg',
      image: 'assets/img/course_technical_analysis.jpg',
      whatYouLearn: [
        'Read Japanese candlestick charts',
        'Identify 20+ candlestick patterns',
        'Draw support and resistance levels',
        'Use trend lines and channels',
        'Master RSI, MACD, Stochastics',
        'Volume analysis and OBV',
        'Chart patterns: Head & Shoulders, Triangles',
        'Create your own trading system'
      ],
      curriculum: [
        { section: 'Module 1: Candlestick Foundations', lessons: ['Anatomy of a candlestick', 'Bullish reversal patterns', 'Bearish reversal patterns', 'Continuation patterns'] },
        { section: 'Module 2: Support & Resistance', lessons: ['Identifying key levels', 'Role reversal concept', 'Breakout trading', 'Fibonacci retracements'] },
        { section: 'Module 3: Technical Indicators', lessons: ['Simple vs Exponential MA', 'RSI - Relative Strength Index', 'MACD crossover strategy', 'Bollinger Band squeeze'] },
        { section: 'Module 4: Building Your System', lessons: ['Entry and exit rules', 'Position sizing basics', 'Backtesting your strategy', 'Live trade review'] }
      ],
      requirements: ['Basic understanding of stock markets', 'Access to any charting platform (TradingView free)', 'Completion of Fundamentals course recommended']
    },
    {
      id: 3,
      title: 'Options Trading: Strategies & Greeks',
      shortDesc: 'Decode options pricing, the Greeks (Delta, Theta, Vega, Gamma), and learn income-generating and hedging strategies for Indian markets.',
      longDesc: 'Options are the most versatile yet misunderstood financial instruments in India. This advanced course demystifies options pricing, teaches you to use the Greeks for risk management, and builds a toolkit of proven strategies - from covered calls for income to protective puts for hedging. Includes NIFTY and BANKNIFTY specific strategies.',
      category: 'Derivatives',
      level: 'Advanced',
      duration: '40 hrs',
      lessons: 80,
      price: 11999,
      originalPrice: 19999,
      rating: 4.9,
      reviews: 650,
      students: 1500,
      instructor: 'Ananya Patel',
      instructorId: 3,
      instructorBio: 'Full-time derivatives trader with 10+ years experience. Price action and options flow specialist. NISM Series VIII certified.',
      language: 'English',
      featured: true,
      thumbImage: 'assets/img/course_options.jpg',
      image: 'assets/img/course_options.jpg',
      whatYouLearn: [
        'Call and Put options - what they really mean',
        'Options pricing with Black-Scholes model',
        'Delta, Theta, Vega, Gamma - all 4 Greeks explained',
        'Covered Call and Cash-Secured Put strategies',
        'Iron Condor, Bull Spread, Bear Spread',
        'NIFTY weekly options strategies',
        'Using Options Chain for directional bias',
        'Hedging your equity portfolio with options'
      ],
      curriculum: [
        { section: 'Module 1: Options Fundamentals', lessons: ['What is an option contract?', 'Calls vs Puts - with examples', 'ITM, ATM, OTM explained', 'Options expiry and settlement'] },
        { section: 'Module 2: Options Pricing', lessons: ['Intrinsic value vs Time value', 'Implied Volatility basics', 'Black-Scholes model overview', 'Reading the Options Chain'] },
        { section: 'Module 3: The Greeks', lessons: ['Delta - directional risk', 'Theta - time decay as income', 'Vega - volatility exposure', 'Gamma - rate of change of Delta'] },
        { section: 'Module 4: Strategies', lessons: ['Covered Call for income', 'Bull Call Spread', 'Iron Condor for range-bound markets', 'Protective Put as insurance'] }
      ],
      requirements: ['Solid understanding of stock markets and trading', 'Completion of Technical Analysis course strongly recommended', 'Approved F&O trading account', 'Minimum 6 months of trading experience']
    },
    {
      id: 4,
      title: 'Futures Trading & Margin Management',
      shortDesc: 'Understand futures contracts, margin calculations, roll-over strategies, and how to trade NIFTY, BANKNIFTY, and commodity futures.',
      longDesc: 'Futures are a powerful leveraged instrument used by professional traders and hedgers alike. This course covers everything from the mechanics of a futures contract to advanced strategies like calendar spreads, arbitrage, and portfolio hedging. Heavy focus on real NIFTY and BANKNIFTY examples.',
      category: 'Derivatives',
      level: 'Advanced',
      duration: '32 hrs',
      lessons: 64,
      price: 9999,
      originalPrice: 17999,
      rating: 4.7,
      reviews: 420,
      students: 980,
      instructor: 'Rajesh Kumar',
      instructorId: 1,
      instructorBio: 'SEBI Registered Investment Advisor with 15+ years in equity and F&O markets.',
      language: 'Hindi & English',
      featured: false,
      thumbImage: 'assets/img/course_futures.jpg',
      image: 'assets/img/course_futures.jpg',
      whatYouLearn: [
        'How futures contracts work',
        'SPAN and Exposure margin calculation',
        'Mark-to-Market (MTM) settlement',
        'Rollover strategies near expiry',
        'Index futures vs Stock futures',
        'Calendar spreads for low-risk returns',
        'Commodity futures: Gold, Silver, Crude Oil',
        'Hedging equity portfolio with index futures'
      ],
      curriculum: [
        { section: 'Module 1: Futures Basics', lessons: ['Futures vs Forward contracts', 'Lot size and contract value', 'Futures pricing and basis', 'Physical vs cash settlement'] },
        { section: 'Module 2: Margin System', lessons: ['SPAN margin explained', 'MTM profit and loss', 'Margin calls and management', 'Using bracket and cover orders'] },
        { section: 'Module 3: Trading Strategies', lessons: ['Trending with index futures', 'Mean reversion approach', 'Calendar spread mechanics', 'Arbitrage opportunities'] },
        { section: 'Module 4: Risk & Hedging', lessons: ['Portfolio beta calculation', 'Index futures as hedge', 'Stop-loss placement in futures', 'Real trade walkthroughs'] }
      ],
      requirements: ['Understanding of stock markets and basic trading', 'F&O segment activated in trading account', 'Minimum Rs. 2 lakhs capital recommended for practice']
    },
    {
      id: 5,
      title: 'Risk Management & Trading Psychology',
      shortDesc: 'The most overlooked but critical skills: position sizing, risk-reward ratios, and the psychology behind consistent, profitable trading.',
      longDesc: 'Most traders lose money not because they lack knowledge, but because they lack discipline and proper risk management. This course is built around the psychological realities of trading - fear, greed, revenge trading, and over-trading - and gives you a concrete framework for position sizing, risk-per-trade rules, and journal-based improvement.',
      category: 'Risk Management',
      level: 'Intermediate',
      duration: '20 hrs',
      lessons: 40,
      price: 5999,
      originalPrice: 10999,
      rating: 4.8,
      reviews: 710,
      students: 2100,
      instructor: 'Suresh Nair',
      instructorId: 4,
      instructorBio: 'CFA Charterholder and former hedge fund analyst with 18+ years in risk management. SEBI Registered Research Analyst.',
      language: 'English',
      featured: false,
      thumbImage: 'assets/img/course_risk_management.jpg',
      image: 'assets/img/course_risk_management.jpg',
      whatYouLearn: [
        'The 1% and 2% risk-per-trade rules',
        'Position sizing using the Kelly Criterion',
        'Risk-reward ratio and why 1:2 matters',
        'Drawdown management and recovery math',
        'Common trading biases: FOMO, loss aversion',
        'Building a daily trading journal',
        'Post-trade review process',
        'Creating a personal trading plan'
      ],
      curriculum: [
        { section: 'Module 1: Risk Framework', lessons: ['Why most traders fail', 'Risk per trade calculator', 'Portfolio-level risk management', 'Correlation and diversification'] },
        { section: 'Module 2: Position Sizing', lessons: ['Fixed-ratio vs fixed-fractional', 'Kelly Criterion for traders', 'Scaling in and scaling out', 'Pyramiding strategy'] },
        { section: 'Module 3: Trading Psychology', lessons: ['Cognitive biases in trading', 'Fear and greed - breaking the cycle', 'The revenge trading trap', 'Mindfulness for traders'] },
        { section: 'Module 4: Building Consistency', lessons: ['Your trading plan template', 'Daily journaling framework', 'Monthly performance review', 'Process vs outcome thinking'] }
      ],
      requirements: ['Basic trading experience (at least 3 months)', 'Willingness to introspect on your own trading behaviour']
    },
    {
      id: 6,
      title: 'Swing Trading: Stocks & Index Setups',
      shortDesc: 'Learn to identify and trade multi-day swing setups in Indian equities and indices using price action and technical analysis.',
      longDesc: 'Swing trading is ideal for those who cannot monitor markets tick-by-tick. This course teaches you to identify high-probability multi-day setups, manage overnight risk, and build a repeatable swing trading process using end-of-day analysis. Includes a live stock scanner workflow used by the mentor every evening.',
      category: 'Swing Trading',
      level: 'Intermediate',
      duration: '28 hrs',
      lessons: 56,
      price: 6999,
      originalPrice: 12999,
      rating: 4.7,
      reviews: 540,
      students: 1750,
      instructor: 'Vikram Singh',
      instructorId: 2,
      instructorBio: 'Certified Financial Technician (CFTe) with 12+ years experience. Full-time technical analyst.',
      language: 'English',
      featured: false,
      thumbImage: 'assets/img/course_swing_trading.jpg',
      image: 'assets/img/course_swing_trading.jpg',
      whatYouLearn: [
        'Identifying swing highs and swing lows',
        'Trend-following setups with moving averages',
        'Breakout and breakdown trading',
        'Gap-up and gap-down trading strategies',
        'Overnight risk management',
        'Building your own stock scanner',
        'Sector rotation for swing opportunities',
        'Weekend analysis workflow'
      ],
      curriculum: [
        { section: 'Module 1: Swing Trading Fundamentals', lessons: ['What is swing trading?', 'Timeframe selection', 'Market structure basics', 'Top-down analysis approach'] },
        { section: 'Module 2: Setup Identification', lessons: ['Breakout with high volume', 'Pullback to moving average', 'Inside bar setup', 'Flag and pennant patterns'] },
        { section: 'Module 3: Entry & Exit Rules', lessons: ['Entry trigger candle setup', 'Stop loss placement', 'Target calculation methods', 'Trailing stop strategy'] },
        { section: 'Module 4: Workflow', lessons: ['EOD scanning process', 'Watchlist management', 'Trade documentation', 'Monthly P&L review'] }
      ],
      requirements: ['Completed Technical Analysis course or equivalent knowledge', 'Access to TradingView or Chartink', 'Basic Excel skills for trade journaling']
    },
    {
      id: 7,
      title: 'Intraday Trading Strategies',
      shortDesc: 'Master opening range breakouts, momentum strategies, and VWAP-based intraday setups for consistent day trading in Indian markets.',
      longDesc: 'Day trading demands speed, discipline, and proven strategies. This course teaches you the most reliable intraday setups used by professional traders in Indian markets - from the Opening Range Breakout (ORB) to VWAP rejection trades and momentum continuation setups. Includes live screen recordings of real trading sessions.',
      category: 'Day Trading',
      level: 'Advanced',
      duration: '30 hrs',
      lessons: 60,
      price: 8999,
      originalPrice: 15999,
      rating: 4.6,
      reviews: 380,
      students: 1200,
      instructor: 'Ananya Patel',
      instructorId: 3,
      instructorBio: 'Full-time derivatives and intraday trader with 10+ years experience.',
      language: 'English',
      featured: false,
      thumbImage: 'assets/img/course_intraday.jpg',
      image: 'assets/img/course_intraday.jpg',
      whatYouLearn: [
        'Opening Range Breakout (ORB) setup',
        'VWAP - calculation and trading applications',
        'Level 2 / Market Depth analysis',
        'News-based momentum trading',
        'HOD/LOD breakout strategies',
        'Time-based exits for intraday',
        'Live P&L management during market hours',
        'Risk management for intraday traders'
      ],
      curriculum: [
        { section: 'Module 1: Intraday Framework', lessons: ['Day trading vs other styles', 'Choosing the right stocks for intraday', 'Pre-market analysis routine', 'Setting daily profit/loss limits'] },
        { section: 'Module 2: Core Strategies', lessons: ['Opening Range Breakout (ORB)', 'VWAP rejection trade', 'Gap-and-go momentum', 'HOD/LOD breakout'] },
        { section: 'Module 3: Trade Execution', lessons: ['Order types for intraday', 'Bracket and cover orders', 'Slippage management', 'Scaling into winners'] },
        { section: 'Module 4: Live Sessions', lessons: ['Live trade screen recording 1', 'Live trade screen recording 2', 'Post-session analysis review', 'Monthly stat tracking'] }
      ],
      requirements: ['Solid technical analysis foundation', 'High-speed internet connection essential', 'Minimum Rs. 50,000 capital recommended for practice', 'Completed Technical Analysis Masterclass']
    },
    {
      id: 8,
      title: 'Mutual Funds & Long-Term Wealth Building',
      shortDesc: 'Learn SIP investing, selecting the right mutual funds, portfolio allocation, and how to build long-term wealth systematically.',
      longDesc: "Not everyone wants to trade - some want to steadily build wealth. This course covers everything a retail investor needs to know about mutual fund investing in India: equity funds, debt funds, hybrid funds, SIP vs lump-sum, expense ratios, and how to review and rebalance your portfolio annually. Perfect complement to any trading course.",
      category: 'Investing',
      level: 'Beginner',
      duration: '16 hrs',
      lessons: 32,
      price: 3499,
      originalPrice: 6999,
      rating: 4.8,
      reviews: 890,
      students: 2900,
      instructor: 'Priya Sharma',
      instructorId: 5,
      instructorBio: 'SEBI Registered Investment Advisor specialising in retail investor education and behavioural finance. 10+ years experience.',
      language: 'Hindi & English',
      featured: false,
      thumbImage: 'assets/img/course_mutual_funds.jpg',
      image: 'assets/img/course_mutual_funds.jpg',
      whatYouLearn: [
        'Types of mutual funds: Equity, Debt, Hybrid',
        'How to evaluate a mutual fund (Alpha, Beta, Sharpe)',
        'SIP calculator and power of compounding',
        'ELSS for tax saving under Section 80C',
        'Direct vs Regular plans - why it matters',
        'Asset allocation by age and risk profile',
        'Annual portfolio review and rebalancing',
        'Using MFCentral and CAMS for portfolio tracking'
      ],
      curriculum: [
        { section: 'Module 1: Mutual Fund Basics', lessons: ['What is a mutual fund?', 'How NAV works', 'Types of funds and their risk levels', 'SEBI categorisation of funds'] },
        { section: 'Module 2: Selecting Funds', lessons: ['Evaluating fund performance', 'Understanding TER (Total Expense Ratio)', 'Direct vs Regular plans', 'Shortlisting using Morningstar and Value Research'] },
        { section: 'Module 3: SIP Investing', lessons: ['SIP mechanics and timing', 'Rupee-cost averaging', 'Step-up SIP strategy', 'SIP during market crashes'] },
        { section: 'Module 4: Portfolio Management', lessons: ['Goal-based asset allocation', 'Annual review process', 'Rebalancing strategies', 'Tax implications of mutual fund investments'] }
      ],
      requirements: ['No prior investment experience needed', 'Basic smartphone skills (for checking fund apps)', 'Intention to start a disciplined SIP']
    },
    {
      id: 9,
      title: 'Forex Trading Masterclass',
      shortDesc: 'Learn how to trade the global currency markets with proven strategies, risk management, and technical analysis.',
      longDesc: 'The Forex market is the largest and most liquid financial market in the world. This comprehensive masterclass covers currency pairs, leverage, margin, pips, and advanced technical strategies specific to Forex trading. You will learn how to read macroeconomic indicators and central bank policies to anticipate major market moves.',
      category: 'Forex',
      level: 'Intermediate',
      duration: '30 hrs',
      lessons: 55,
      price: 5999,
      originalPrice: 11999,
      rating: 4.7,
      reviews: 650,
      students: 1800,
      instructor: 'Arjun Mehta',
      instructorId: 3,
      instructorBio: 'Professional Forex trader with 8 years of experience trading major currency pairs and commodities.',
      language: 'English',
      featured: true,
      thumbImage: 'assets/img/course_forex.jpg',
      image: 'assets/img/course_forex.jpg',
      whatYouLearn: [
        'Understand major, minor, and exotic currency pairs',
        'Calculate pips, lots, margin, and leverage',
        'Master MT4 and MT5 trading platforms',
        'Apply technical analysis to Forex charts',
        'Trade the news (NFP, Interest Rate decisions)',
        'Develop a robust risk management plan'
      ],
      curriculum: [
        { section: 'Module 1: Forex Basics', lessons: ['What is Forex?', 'Currency Pairs', 'Pips and Lots', 'Margin and Leverage'] },
        { section: 'Module 2: Technical Analysis in Forex', lessons: ['Support and Resistance', 'Trendlines', 'Moving Averages', 'Fibonacci Retracements'] },
        { section: 'Module 3: Fundamental Analysis', lessons: ['Economic Calendar', 'Central Banks', 'Inflation Data', 'Trading NFP'] },
        { section: 'Module 4: Risk Management', lessons: ['Position Sizing', 'Stop Loss Placement', 'Risk-to-Reward Ratio', 'Trading Psychology'] }
      ],
      requirements: ['Basic understanding of financial markets', 'A demo trading account', 'Commitment to practice']
    }
  ],

  //  BLOGS 
  blogs: [
    {
      id: 1,
      title: 'Understanding NIFTY Bank: Why It Moves More Than NIFTY 50',
      category: 'Market Analysis',
      author: 'Vikram Singh',
      authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&q=80',
      date: '28 Aug 2024',
      readTime: '8 min read',
      excerpt: 'BANKNIFTY is known for its high volatility and large intraday swings. But why does it move so much more than NIFTY 50? Understanding its composition and sensitivity to RBI policy is key.',
      thumbImage: 'assets/img/blog_nifty_bank.jpg',
      image: 'assets/img/blog_nifty_bank.jpg',
      tags: ['BANKNIFTY', 'NIFTY', 'Index', 'Derivatives'],
      content: `<h2>What is NIFTY Bank?</h2>
<p>NIFTY Bank, commonly known as BANKNIFTY, is a sectoral index comprising 12 of the most liquid and large-cap banking stocks listed on NSE. Unlike NIFTY 50 which represents 50 companies across 13 sectors, BANKNIFTY is concentrated in a single sector - banking.</p>
<h2>Why is BANKNIFTY More Volatile?</h2>
<p>Three key factors drive BANKNIFTY's higher volatility compared to NIFTY 50:</p>
<ul>
  <li><strong>Sector concentration:</strong> All 12 stocks are banks. Any news impacting the banking sector - NPA announcements, RBI policy, credit growth data - moves all 12 stocks simultaneously.</li>
  <li><strong>Higher leverage sensitivity:</strong> Banks are leveraged businesses by nature. A 1% change in NIM (Net Interest Margin) can significantly impact profitability.</li>
  <li><strong>RBI Policy sensitivity:</strong> Every RBI monetary policy announcement directly impacts banks through repo rate changes, which affect their lending and deposit rates.</li>
</ul>
<h2>Composition (as of 2024)</h2>
<p>HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra Bank, IndusInd Bank, and Bandhan Bank are among the key constituents. HDFC Bank and ICICI Bank together often account for over 45% of the index weight.</p>
<blockquote>Trading BANKNIFTY without understanding the banking sector is like driving at night without headlights. The knowledge of what moves the sector is your headlight.</blockquote>
<h2>Trading Implications</h2>
<p>For options traders, BANKNIFTY's higher volatility means higher premiums, which creates both opportunity and risk. Weekly options expiries (every Thursday) make BANKNIFTY options one of the most actively traded instruments in the world by volume.</p>
<h2>Key Takeaway</h2>
<p>Before trading BANKNIFTY options, always check the RBI calendar, major bank results dates, and credit growth data releases. These are your fundamental catalysts.</p>`
    },
    {
      id: 2,
      title: 'RSI Divergence: The Hidden Signal Most Traders Miss',
      category: 'Technical Analysis',
      author: 'Vikram Singh',
      authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&q=80',
      date: '20 Aug 2024',
      readTime: '10 min read',
      excerpt: 'Regular RSI overbought/oversold signals are well-known. But RSI divergence - when price and RSI move in opposite directions - is a far more powerful and less crowded signal.',
      thumbImage: 'assets/img/blog_rsi_divergence.jpg',
      image: 'assets/img/blog_rsi_divergence.jpg',
      tags: ['RSI', 'Technical Analysis', 'Indicators', 'Trading'],
      content: `<h2>What is RSI Divergence?</h2>
<p>RSI divergence occurs when the price of a stock or index is making new highs (or new lows), but the RSI indicator is NOT confirming those new highs (or lows). This disconnect is a warning sign that the current trend is losing momentum.</p>
<h2>Two Types of Divergence</h2>
<p><strong>Bearish Regular Divergence:</strong> Price makes a higher high, but RSI makes a lower high. This suggests the uptrend is weakening and a reversal may be near.</p>
<p><strong>Bullish Regular Divergence:</strong> Price makes a lower low, but RSI makes a higher low. This suggests the downtrend is losing steam and buyers are starting to step in.</p>
<blockquote>Divergence doesn't tell you WHEN the reversal will happen - it tells you the odds of the current trend continuing are diminishing. Always wait for a price confirmation before entering.</blockquote>
<h2>How to Trade RSI Divergence</h2>
<ul>
  <li>Identify the divergence on a higher timeframe (daily or 4-hour chart) first</li>
  <li>Wait for a price confirmation candle (bearish engulfing for bearish divergence, bullish pin bar for bullish divergence)</li>
  <li>Place your stop loss beyond the most recent swing high/low</li>
  <li>Target the nearest significant support/resistance level</li>
</ul>
<h2>Common Mistakes</h2>
<p>The biggest mistake traders make is entering immediately upon spotting divergence. Remember: divergence can persist for many candles before the reversal materialises. Always wait for price to confirm the signal.</p>`
    },
    {
      id: 3,
      title: 'How to Use Options Chain Data for Directional Bias',
      category: 'Options Trading',
      author: 'Ananya Patel',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
      date: '14 Aug 2024',
      readTime: '12 min read',
      excerpt: 'The NSE Options Chain is a goldmine of information about market sentiment. Learn to read Put-Call Ratio (PCR), Max Pain theory, and Open Interest concentration to determine where the market is likely to move.',
      thumbImage: 'assets/img/blog_options_chain.jpg',
      image: 'assets/img/blog_options_chain.jpg',
      tags: ['Options', 'PCR', 'Open Interest', 'NIFTY'],
      content: `<h2>What is the Options Chain?</h2>
<p>The NSE Options Chain is a matrix that shows all available Call and Put options for a given underlying (like NIFTY or BANKNIFTY) across all strike prices and expiry dates. It includes data on Open Interest (OI), Change in OI, Volume, and IV (Implied Volatility).</p>
<h2>Put-Call Ratio (PCR)</h2>
<p>PCR = Total Put OI / Total Call OI. A PCR above 1.0 indicates more put buying (bearish hedging), while a PCR below 0.7 indicates more call buying (bullish positioning). Extreme PCR levels (above 1.5 or below 0.5) often signal contrarian reversals.</p>
<h2>Max Pain Theory</h2>
<p>Max Pain is the strike price at which the maximum number of options expire worthless - causing the maximum financial loss to option buyers and maximum profit to option sellers. As expiry approaches, there's a theory that the underlying price tends to gravitate toward the Max Pain strike.</p>
<blockquote>Max Pain is not a trading signal by itself - it's a context tool. Use it to understand where heavy hedging is concentrated, not as a standalone entry trigger.</blockquote>
<h2>Practical Use</h2>
<p>Before taking any NIFTY options trade, check: (1) Where is the highest OI buildup on calls - this is resistance; (2) Where is the highest OI buildup on puts - this is support; (3) What is today's PCR; (4) Where is Max Pain for this week's expiry.</p>`
    },
    {
      id: 4,
      title: 'Risk Management in Forex: How to Protect Your Capital',
      category: 'Risk Management',
      author: 'Suresh Nair',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&q=80',
      date: '7 Aug 2024',
      readTime: '7 min read',
      excerpt: 'If there is one rule that separates professionals from amateurs in trading, it is the 2% risk rule. Here is exactly how to implement it and why it prevents the one outcome that ends trading careers.',
      thumbImage: 'assets/img/blog_forex_risk.jpg',
      image: 'assets/img/blog_forex_risk.jpg',
      tags: ['Risk Management', 'Position Sizing', 'Trading Rules'],
      content: `<h2>What is the 2% Rule?</h2>
<p>The 2% rule states that you should never risk more than 2% of your total trading capital on any single trade. If you have Rs. 5 lakhs in your trading account, your maximum risk per trade is Rs. 10,000.</p>
<h2>How to Calculate Position Size</h2>
<p>Position Size = (Account Risk  Trade Risk) where Trade Risk = Entry Price  Stop Loss Price (per share/unit).</p>
<p>Example: Account = Rs. 5,00,000 | Risk = 2% = Rs. 10,000 | Stop Loss = Rs. 20 per share below entry  Max Qty = Rs. 10,000  Rs. 20 = 500 shares.</p>
<blockquote>The 2% rule is not about being conservative. It is about staying in the game long enough to let your edge play out over hundreds of trades.</blockquote>
<h2>Why This Rule Prevents Ruin</h2>
<p>With a 2% rule, you would need to lose 50 consecutive trades to lose your entire capital - an almost statistically impossible event if you have a genuine edge. Without position sizing, a 5-trade losing streak at 20% risk per trade wipes you out completely.</p>
<h2>Implementation Steps</h2>
<ul>
  <li>Calculate your 2% risk amount before every trade</li>
  <li>Determine your stop loss level based on technical analysis</li>
  <li>Calculate maximum position size using the formula above</li>
  <li>Never move your stop loss further away to avoid being stopped out</li>
</ul>`
    },
    {
      id: 5,
      title: 'Evaluating Mutual Funds: 5 Metrics That Actually Matter',
      category: 'Investing',
      author: 'Priya Sharma',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
      date: '1 Aug 2024',
      readTime: '9 min read',
      excerpt: 'Past returns are the metric everyone looks at and the least useful one. Here are the 5 metrics that professional fund analysts use to evaluate mutual funds - and how you can use them too.',
      thumbImage: 'https://images.unsplash.com/photo-1579532536935-619928decd08?w=450&h=280&fit=crop&q=80',
      image: 'https://images.unsplash.com/photo-1579532536935-619928decd08?w=900&h=500&fit=crop&q=80',
      tags: ['Mutual Funds', 'SIP', 'Investing', 'Portfolio'],
      content: `<h2>1. Sharpe Ratio</h2>
<p>The Sharpe Ratio measures risk-adjusted return. A Sharpe Ratio above 1.0 is good; above 1.5 is excellent. It tells you how much return the fund generates per unit of risk taken. Always compare Sharpe Ratios within the same fund category.</p>
<h2>2. Alpha</h2>
<p>Alpha measures how much a fund outperforms its benchmark index. A positive alpha of 2 means the fund delivered 2% more return than its benchmark. This is the truest measure of a fund manager's skill.</p>
<h2>3. Standard Deviation</h2>
<p>Standard deviation measures volatility. A fund with high returns but very high standard deviation may not be suitable for conservative investors. Compare this with the category average.</p>
<blockquote>Chasing last year's top performer is the most common and costly mistake retail investors make. High past returns often mean high current valuations and lower future potential.</blockquote>
<h2>4. Total Expense Ratio (TER)</h2>
<p>TER is the annual fee charged by the fund house. For active equity funds, look for TER below 1.5%. For index funds, look for TER below 0.25%. Even a 0.5% difference in TER compounds significantly over 20 years.</p>
<h2>5. Portfolio Turnover Ratio</h2>
<p>A high turnover ratio means the fund manager frequently buys and sells stocks. This incurs higher transaction costs (borne by the fund) and may signal a lack of conviction in the portfolio.</p>`
    },
    {
      id: 6,
      title: 'Stop Loss Placement: Art vs Science',
      category: 'Technical Analysis',
      author: 'Vikram Singh',
      authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&q=80',
      date: '25 Jul 2024',
      readTime: '11 min read',
      excerpt: 'Where exactly do you put your stop loss? Most traders use arbitrary round numbers. Professional traders use market structure. Here is the science and art of stop loss placement.',
      thumbImage: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=450&h=280&fit=crop&q=80',
      image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=900&h=500&fit=crop&q=80',
      tags: ['Stop Loss', 'Technical Analysis', 'Risk Management', 'Price Action'],
      content: `<h2>The Problem with Arbitrary Stop Losses</h2>
<p>Most new traders place stop losses at arbitrary levels: "I'll put it Rs. 50 below my entry" or "I'll use a 3% stop." These approaches ignore market structure entirely and result in unnecessarily frequent stop-outs.</p>
<h2>Structure-Based Stop Loss Placement</h2>
<p>Professional traders place stops beyond a level of market structure that, if breached, invalidates the trade thesis:</p>
<ul>
  <li><strong>For long trades:</strong> Just below the most recent swing low or below a key support level</li>
  <li><strong>For short trades:</strong> Just above the most recent swing high or above a key resistance level</li>
  <li><strong>For breakout trades:</strong> Below the breakout candle's low (for long breakouts)</li>
</ul>
<blockquote>Your stop loss should be placed where the market is telling you - if we go here, your trade idea was wrong. Not where you can afford to lose.</blockquote>
<h2>ATR-Based Stop Loss</h2>
<p>The Average True Range (ATR) gives you a volatility-adjusted stop distance. A common approach: Stop Loss = Entry  (1.5  ATR). This adapts to current market volatility automatically.</p>
<h2>The Stop-Loss Placement Process</h2>
<ol>
  <li>Identify your trade setup and entry</li>
  <li>Find the nearest significant swing low (for longs) or swing high (for shorts)</li>
  <li>Place stop 1-2 ATR beyond that level for a buffer</li>
  <li>Calculate position size based on this stop distance and your 2% risk rule</li>
  <li>If position size is too small to be meaningful, skip the trade</li>
</ol>`
    }
  ],

  //  MENTORS 
  mentors: [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Senior Market Strategist',
      qualification: 'SEBI Reg. Investment Advisor | MBA Finance | NISM Certified',
      experience: '15 yrs',
      students: 3500,
      courses: 3,
      rating: 4.9,
      bio: 'Former senior analyst at HDFC Securities with 15+ years of experience in Indian equity and F&O markets. Rajesh specialises in fundamental analysis and long-term portfolio construction.',
      specializations: ['Equity Investing', 'F&O Strategies', 'Fundamental Analysis', 'Portfolio Management'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80',
      social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', youtube: 'https://youtube.com' }
    },
    {
      id: 2,
      name: 'Vikram Singh',
      title: 'Chief Technical Analyst',
      qualification: 'CFTe | NISM Series VIII | B.Tech + MBA',
      experience: '12 yrs',
      students: 2800,
      courses: 2,
      rating: 4.9,
      bio: 'Certified Financial Technician with 12 years of experience. Vikram has developed proprietary technical analysis frameworks and has trained over 2,800 students in chart reading and swing trading.',
      specializations: ['Technical Analysis', 'Swing Trading', 'Price Action', 'Chart Patterns'],
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&q=80',
      social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', youtube: 'https://youtube.com' }
    },
    {
      id: 3,
      name: 'Ananya Patel',
      title: 'Derivatives & Options Specialist',
      qualification: 'SEBI Reg. Research Analyst | NISM Series VIII | CFA Level II',
      experience: '10 yrs',
      students: 1800,
      courses: 2,
      rating: 4.8,
      bio: 'Full-time derivatives trader and educator. Ananya has a deep specialisation in options strategies and is known for making complex options concepts accessible through clear, practical explanations.',
      specializations: ['Options Trading', 'Derivatives', 'Intraday Trading', 'Options Greeks'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', youtube: 'https://youtube.com' }
    },
    {
      id: 4,
      name: 'Suresh Nair',
      title: 'Risk Management Expert',
      qualification: 'CFA Charterholder | FRM | SEBI Reg. Research Analyst',
      experience: '18 yrs',
      students: 2100,
      courses: 1,
      rating: 4.8,
      bio: 'Former hedge fund analyst with 18 years of institutional risk management experience. Suresh brings the discipline and rigour of institutional trading to retail traders through practical risk management education.',
      specializations: ['Risk Management', 'Trading Psychology', 'Portfolio Risk', 'Quantitative Analysis'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
      social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', youtube: 'https://youtube.com' }
    }
  ],

  //  TESTIMONIALS 
  testimonials: [
    { id:1, name:'Arjun Mehta', role:'IT Professional, Pune', rating:5, text:'The Technical Analysis Masterclass completely changed how I look at charts. I went from random entries to high-probability setups within 8 weeks. The live examples on NIFTY and BANKNIFTY were invaluable.', image:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80' },
    { id:2, name:'Neha Gupta', role:'MBA Student, Delhi', rating:5, text:'I was completely new to stock markets and started with the Fundamentals course. The way Rajesh sir explains everything - from financial statements to IPOs - makes complex topics seem simple. Highly recommend!', image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80' },
    { id:3, name:'Ravi Shankar', role:'Business Owner, Chennai', rating:5, text:'The Options course by Ananya ma\'am is extraordinary. The way she explains the Greeks and weaves in real BANKNIFTY option chain analysis made it click for me after years of confusion. Worth every rupee.', image:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80' },
    { id:4, name:'Kavitha Nair', role:'Doctor, Kochi', rating:5, text:'As a doctor with very limited time, the recorded lessons are a lifesaver. I can learn at 11 PM after my shift. The Risk Management course by Suresh sir has genuinely protected my portfolio from big losses.', image:'assets/img/student-kavitha-nair.jpg' },
    { id:5, name:'Suresh Iyer', role:'CA, Bangalore', rating:5, text:'The Mutual Funds course by Priya ma\'am is the most practical investing resource I have found. The module on Direct vs Regular plans alone saved me enough in fees to justify the entire course cost many times over.', image:'assets/img/student-suresh-iyer.jpg' },
    { id:6, name:'Divya Krishnan', role:'Software Engineer, Hyderabad', rating:4, text:'Swing Trading course gave me exactly what I needed - a repeatable process that fits around my 9-to-5 job. The EOD scanning workflow that Vikram sir shares is something I use every evening now.', image:'assets/img/student-divya-krishnan.jpg' }
  ],

  //  LIVE CLASSES 
  liveClasses: [
    { id:1, title:'Weekly Market Outlook - NIFTY & BANKNIFTY', instructor:'Vikram Singh', date:'2024-09-10', time:'7:00 PM', platform:'Zoom', link:'https://zoom.us', status:'Upcoming' },
    { id:2, title:'Live Options Trade Walkthrough', instructor:'Ananya Patel', date:'2024-09-12', time:'6:30 PM', platform:'Google Meet', link:'https://meet.google.com', status:'Upcoming' },
    { id:3, title:'Fundamental Analysis: Reading Q2 Results', instructor:'Rajesh Kumar', date:'2024-09-14', time:'8:00 AM', platform:'Zoom', link:'https://zoom.us', status:'Upcoming' },
    { id:4, title:'Risk Management Workshop', instructor:'Suresh Nair', date:'2024-09-07', time:'10:00 AM', platform:'YouTube Live', link:'https://youtube.com', status:'Completed' },
    { id:5, title:'SIP Strategy Masterclass', instructor:'Priya Sharma', date:'2024-09-05', time:'6:00 PM', platform:'Zoom', link:'https://zoom.us', status:'Completed' },
    { id:6, title:'Swing Trading Setup Review', instructor:'Vikram Singh', date:'2024-09-17', time:'7:30 PM', platform:'Zoom', link:'https://zoom.us', status:'Upcoming' }
  ],

  //  RECORDED LESSONS 
  recordedLessons: [
    { id:1, title:'Introduction to Candlestick Patterns', course:'Technical Analysis Masterclass', duration:'45 min', thumb:'assets/img/course_technical_analysis.jpg' },
    { id:2, title:'Understanding RSI and MACD', course:'Technical Analysis Masterclass', duration:'52 min', thumb:'assets/img/blog_rsi_divergence.jpg' },
    { id:3, title:'How to Read an Options Chain', course:'Options Trading', duration:'38 min', thumb:'assets/img/course_options.jpg' },
    { id:4, title:'The 2% Risk Rule in Practice', course:'Risk Management', duration:'29 min', thumb:'assets/img/course_risk_management.jpg' },
    { id:5, title:'Opening Range Breakout Setup', course:'Intraday Trading', duration:'41 min', thumb:'assets/img/course_intraday.jpg' },
    { id:6, title:'Understanding P/E and P/B Ratios', course:'Stock Market Fundamentals', duration:'35 min', thumb:'assets/img/course_fundamentals.jpg' },
    { id:7, title:'Evaluating Mutual Funds with Sharpe Ratio', course:'Mutual Funds & Investing', duration:'33 min', thumb:'assets/img/course_mutual_funds.jpg' },
    { id:8, title:'Swing Trading EOD Workflow', course:'Swing Trading', duration:'48 min', thumb:'assets/img/course_swing_trading.jpg' }
  ],

  //  ASSIGNMENTS 
  assignments: [
    { id:1, courseId:2, title:'Identify 5 Candlestick Patterns on NIFTY', description:'Using TradingView, identify and screenshot 5 different candlestick patterns on the NIFTY daily chart from the past 30 days.', dueDate:'2024-09-20', status:'Pending', grade:null },
    { id:2, courseId:2, title:'Chart Analysis Report: Support & Resistance', description:'Pick any Nifty 50 stock and create a detailed support and resistance analysis with annotated chart.', dueDate:'2024-09-27', status:'Submitted', grade:null },
    { id:3, courseId:3, title:'Options Strategy Backtesting Report', description:'Backtest an Iron Condor strategy on NIFTY weekly options for the past 8 expiries. Document your results.', dueDate:'2024-09-15', status:'Graded', grade:'A (87/100)' },
    { id:4, courseId:5, title:'Trading Journal - 2 Weeks', description:'Maintain a detailed trading journal for 2 weeks including entry/exit reasons, emotional state, and P&L. Submit the completed template.', dueDate:'2024-09-30', status:'Pending', grade:null },
    { id:5, courseId:1, title:'Company Financial Statement Analysis', description:'Choose any NSE-listed company and write a 2-page analysis of its financials using the ratios taught in Module 2.', dueDate:'2024-09-18', status:'Submitted', grade:null },
    { id:6, courseId:8, title:'Mutual Fund Portfolio Construction', description:'Construct a model 3-fund portfolio for a 30-year old investor with moderate risk profile. Justify your fund selection.', dueDate:'2024-09-22', status:'Graded', grade:'A+ (94/100)' }
  ],

  //  MOCK PORTFOLIO 
  portfolio: [
    { symbol:'RELIANCE', name:'Reliance Industries', exchange:'NSE', qty:10, avgPrice:2750, cmp:2890.50 },
    { symbol:'TCS',      name:'Tata Consultancy Services', exchange:'NSE', qty:5, avgPrice:3950, cmp:4125 },
    { symbol:'HDFCBANK', name:'HDFC Bank', exchange:'NSE', qty:20, avgPrice:1600, cmp:1548.75 },
    { symbol:'INFY',     name:'Infosys', exchange:'NSE', qty:15, avgPrice:1680, cmp:1725.30 },
    { symbol:'TATAMOTORS',name:'Tata Motors', exchange:'NSE', qty:25, avgPrice:880, cmp:923.40 },
    { symbol:'NIFTY50',  name:'NIFTY 50 Index ETF', exchange:'NSE', qty:50, avgPrice:215, cmp:224.85 }
  ],

  //  PRICING 
  pricing: [
    {
      id: 1, name: 'Free', tagline: 'Get started with no commitment',
      priceMonthly: 0, priceAnnual: 0, featured: false, badge: null,
      features: [
        { text:'1 Free Introductory Course', included:true },
        { text:'Free Resource Downloads', included:true },
        { text:'Blog & Article Access', included:true },
        { text:'Community Forum Access', included:true },
        { text:'Live Weekly Classes', included:false },
        { text:'Full Course Library (8 courses)', included:false },
        { text:'Mock Portfolio Practice', included:false },
        { text:'Course Certificates', included:false },
        { text:'1:1 Mentor Sessions', included:false }
      ]
    },
    {
      id: 2, name: 'Starter', tagline: 'For the serious beginner',
      priceMonthly: 999, priceAnnual: 8399, featured: false, badge: null,
      features: [
        { text:'Access to 3 Beginner Courses', included:true },
        { text:'Free Resource Downloads', included:true },
        { text:'Live Weekly Classes', included:true },
        { text:'Student Dashboard', included:true },
        { text:'Assignment Submission', included:true },
        { text:'Full Course Library (8 courses)', included:false },
        { text:'Mock Portfolio Practice', included:false },
        { text:'Course Certificates', included:false },
        { text:'1:1 Mentor Sessions', included:false }
      ]
    },
    {
      id: 3, name: 'Pro', tagline: 'Most popular - best value',
      priceMonthly: 1999, priceAnnual: 16799, featured: true, badge: 'Most Popular',
      features: [
        { text:'All 8 Courses', included:true },
        { text:'Live + Recorded Classes', included:true },
        { text:'Mock Portfolio Practice', included:true },
        { text:'Assignments & Quizzes', included:true },
        { text:'Course Certificates', included:true },
        { text:'Priority Email Support', included:true },
        { text:'Download Resources', included:true },
        { text:'1:1 Mentor Sessions', included:false },
        { text:'Exclusive Webinars', included:false }
      ]
    },
    {
      id: 4, name: 'Elite', tagline: 'For the serious professional',
      priceMonthly: 3999, priceAnnual: 33599, featured: false, badge: 'Best Results',
      features: [
        { text:'Everything in Pro', included:true },
        { text:'2 Monthly 1:1 Mentor Sessions', included:true },
        { text:'Exclusive Trading Webinars', included:true },
        { text:'Priority WhatsApp Support', included:true },
        { text:'Early Access to New Courses', included:true },
        { text:'Trading Plan Review by Mentor', included:true },
        { text:'Portfolio Review Session', included:true },
        { text:'Lifetime Certificate Archive', included:true },
        { text:'Community Moderator Access', included:true }
      ]
    }
  ],

  //  FREE RESOURCES 
  resources: [
    { id:1, title:'Technical Analysis Cheatsheet', description:'All major candlestick patterns, chart patterns, and indicator signals in a single printable PDF.', type:'PDF', size:'2.4 MB', downloads:8420 },
    { id:2, title:'Risk Management Calculator (Excel)', description:'Input your account size, entry price, and stop loss to automatically calculate position size and risk per trade.', type:'Excel', size:'180 KB', downloads:6230 },
    { id:3, title:'Stock Market Glossary - 200 Terms', description:'Comprehensive A-Z glossary of stock market terms with simple explanations. Perfect for beginners.', type:'PDF', size:'1.8 MB', downloads:5910 },
    { id:4, title:'Candlestick Pattern Quick Reference', description:'Pocket-sized reference card of the 30 most important candlestick patterns with bullish/bearish signals.', type:'PDF', size:'890 KB', downloads:7120 },
    { id:5, title:'Free Introduction to Technical Analysis', description:'1-hour free video lesson covering the basics of chart reading, trends, and key indicators.', type:'Video', size:null, downloads:12400 },
    { id:6, title:'SIP vs Lump Sum Calculator (Excel)', description:'Interactive calculator comparing SIP returns vs lump sum investment over different time horizons.', type:'Excel', size:'220 KB', downloads:4890 },
    { id:7, title:'Options Strategy Payoff Diagrams', description:'Visual payoff diagrams for 12 common options strategies including Bull Spread, Iron Condor, and Covered Call.', type:'PDF', size:'3.1 MB', downloads:3760 },
    { id:8, title:'Futures & Options Margin Calculator (Excel)', description:'Calculate SPAN and Exposure margin for NIFTY and BANKNIFTY futures positions.', type:'Excel', size:'315 KB', downloads:2980 },
    { id:9, title:'How to Read an Options Chain - Free Class', description:'45-minute free session explaining PCR, Max Pain, and OI analysis for NIFTY options.', type:'Video', size:null, downloads:9850 },
    { id:10,'title':'Trading Journal Template (Excel)', description:'Pre-formatted Excel template for tracking all your trades with entry/exit analysis, R:R, and P&L.', type:'Excel', size:'285 KB', downloads:11200 }
  ],

  //  STUDENTS (Admin) 
  students: [
    { id:'S001', name:'Aarav Sharma',    email:'aarav@email.com',    city:'Mumbai',    status:'Active',    enrollDate:'2024-01-15', courses:3 },
    { id:'S002', name:'Priya Nair',      email:'priya@email.com',    city:'Kochi',     status:'Active',    enrollDate:'2024-02-10', courses:2 },
    { id:'S003', name:'Rohit Verma',     email:'rohit@email.com',    city:'Delhi',     status:'Active',    enrollDate:'2024-03-05', courses:1 },
    { id:'S004', name:'Kavya Reddy',     email:'kavya@email.com',    city:'Hyderabad', status:'Inactive',  enrollDate:'2024-01-28', courses:4 },
    { id:'S005', name:'Suresh Iyer',     email:'suresh@email.com',   city:'Bangalore', status:'Active',    enrollDate:'2024-04-12', courses:2 },
    { id:'S006', name:'Anita Patel',     email:'anita@email.com',    city:'Ahmedabad', status:'Active',    enrollDate:'2024-03-20', courses:3 },
    { id:'S007', name:'Vikrant Singh',   email:'vikrant@email.com',  city:'Pune',      status:'Active',    enrollDate:'2024-05-08', courses:2 },
    { id:'S008', name:'Deepika Mehta',   email:'deepika@email.com',  city:'Jaipur',    status:'Suspended', enrollDate:'2024-02-18', courses:1 },
    { id:'S009', name:'Mohan Krishnan',  email:'mohan@email.com',    city:'Chennai',   status:'Active',    enrollDate:'2024-06-01', courses:3 },
    { id:'S010', name:'Sita Rao',        email:'sita@email.com',     city:'Visakhapatnam', status:'Active', enrollDate:'2024-05-25', courses:1 },
    { id:'S011', name:'Rahul Agarwal',   email:'rahul@email.com',    city:'Lucknow',   status:'Active',    enrollDate:'2024-06-15', courses:2 },
    { id:'S012', name:'Meera Joshi',     email:'meera@email.com',    city:'Nagpur',    status:'Inactive',  enrollDate:'2024-04-30', courses:2 },
    { id:'S013', name:'Arun Kumar',      email:'arun@email.com',     city:'Bhopal',    status:'Active',    enrollDate:'2024-07-01', courses:1 },
    { id:'S014', name:'Divya Bhatt',     email:'divya@email.com',    city:'Indore',    status:'Active',    enrollDate:'2024-07-12', courses:2 },
    { id:'S015', name:'Kiran Mishra',    email:'kiran@email.com',    city:'Patna',     status:'Active',    enrollDate:'2024-08-01', courses:1 }
  ]
};
