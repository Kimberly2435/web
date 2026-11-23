<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
  <title>TikTok Pro · Get Rewarded 💕</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: linear-gradient(160deg, #ffeef5 0%, #fde2ed 40%, #f3e8ff 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 16px;
      font-family: 'Poppins', -apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* floating hearts background */
    .hearts {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    }

    .hearts span {
      position: absolute;
      font-size: 1.2rem;
      opacity: 0.35;
      animation: floatUp 9s linear infinite;
    }

    .hearts span:nth-child(1) { left: 8%;  animation-delay: 0s;   font-size: 1.4rem; }
    .hearts span:nth-child(2) { left: 22%; animation-delay: 2.5s; font-size: 1rem;   }
    .hearts span:nth-child(3) { left: 40%; animation-delay: 5s;   font-size: 1.6rem; }
    .hearts span:nth-child(4) { left: 60%; animation-delay: 1.5s; font-size: 1.1rem; }
    .hearts span:nth-child(5) { left: 78%; animation-delay: 4s;   font-size: 1.3rem; }
    .hearts span:nth-child(6) { left: 90%; animation-delay: 6.5s; font-size: 0.9rem; }

    @keyframes floatUp {
      0%   { transform: translateY(105vh) rotate(0deg);   opacity: 0; }
      10%  { opacity: 0.4; }
      90%  { opacity: 0.4; }
      100% { transform: translateY(-10vh) rotate(25deg);  opacity: 0; }
    }

    .card {
      max-width: 380px;
      width: 100%;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(14px);
      border-radius: 36px;
      padding: 32px 22px 26px;
      box-shadow: 0 8px 32px rgba(255, 105, 150, 0.15), 0 2px 8px rgba(255, 105, 150, 0.08);
      border: 1.5px solid #ffe1ec;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    /* chat bubble from "me" */
    .chat-bubble {
      background: #fff0f5;
      border: 1.5px solid #ffd0e0;
      border-radius: 24px 24px 24px 6px;
      padding: 16px 18px;
      margin: 0 auto 18px;
      max-width: 92%;
      text-align: left;
      position: relative;
      box-shadow: 0 4px 14px rgba(255, 105, 150, 0.1);
    }

    .chat-bubble::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: -8px;
      width: 18px;
      height: 18px;
      background: #fff0f5;
      border-left: 1.5px solid #ffd0e0;
      border-bottom: 1.5px solid #ffd0e0;
      border-radius: 0 0 0 16px;
      transform: skewX(15deg);
    }

    .bubble-name {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.7rem;
      font-weight: 700;
      color: #e0456e;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .bubble-name .dot {
      width: 7px;
      height: 7px;
      background: #4cd964;
      border-radius: 50%;
      box-shadow: 0 0 0 2px #d4f7dc;
    }

    .bubble-text {
      font-size: 0.95rem;
      line-height: 1.55;
      color: #4a2e3a;
      font-weight: 500;
    }

    .bubble-text strong {
      color: #e0456e;
      font-weight: 700;
    }

    .bubble-text em {
      font-style: normal;
      background: linear-gradient(135deg, #ff5c8a, #ff9ec2);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-weight: 700;
    }

    .bubble-heart {
      margin-top: 8px;
      font-size: 1.1rem;
      letter-spacing: 2px;
    }

    /* pointing arrow / cute */
    .pointer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 4px 0 2px;
    }

    .pointer-text {
      font-size: 0.78rem;
      font-weight: 700;
      color: #ff5c8a;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 2px;
      animation: wiggle 1.8s ease-in-out infinite;
    }

    .pointer-emoji {
      font-size: 1.8rem;
      line-height: 1;
      animation: bounceDown 1.6s ease-in-out infinite;
      display: block;
    }

    @keyframes wiggle {
      0%, 100% { transform: rotate(-2deg); }
      50%      { transform: rotate(2deg); }
    }

    @keyframes bounceDown {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(7px); }
    }

    /* TIKTOK PRO BUTTON — cute, glossy, pressable */
    .pro-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 11px;
      background: linear-gradient(135deg, #ffffff 0%, #fff8fb 100%);
      border: 2px solid #ffc2d6;
      border-radius: 60px;
      padding: 13px 30px 13px 22px;
      margin: 6px auto 10px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.18s ease;
      -webkit-tap-highlight-color: transparent;
      box-shadow: 0 5px 0 #ffd6e5, 0 12px 26px rgba(255, 92, 138, 0.22);
      position: relative;
      z-index: 2;
      animation: glowPulse 2.4s ease-in-out infinite;
    }

    .pro-button:active {
      transform: translateY(4px);
      box-shadow: 0 1px 0 #ffd6e5, 0 6px 16px rgba(255, 92, 138, 0.25);
      border-color: #ff9ec2;
    }

    @keyframes glowPulse {
      0%, 100% { box-shadow: 0 5px 0 #ffd6e5, 0 12px 26px rgba(255, 92, 138, 0.22); }
      50%      { box-shadow: 0 5px 0 #ffd6e5, 0 14px 34px rgba(255, 92, 138, 0.4); }
    }

    .pro-icon {
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff0f5;
      border-radius: 14px;
      padding: 5px;
      box-shadow: inset 0 1px 3px rgba(255, 92, 138, 0.1);
    }

    .pro-icon svg {
      width: 26px;
      height: 26px;
      display: block;
    }

    .pro-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 1.2;
    }

    .pro-text .title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #3d2230;
      letter-spacing: -0.2px;
    }

    .pro-text .title span {
      background: linear-gradient(135deg, #ff5c8a, #ff9ec2);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .pro-text .tagline {
      font-size: 0.6rem;
      font-weight: 700;
      color: #c98aa8;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* convincing cute stats */
    .stats {
      display: flex;
      justify-content: center;
      gap: 26px;
      margin: 18px 0 14px;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
    }

    .stat b {
      font-size: 1.05rem;
      font-weight: 800;
      color: #3d2230;
      letter-spacing: -0.2px;
    }

    .stat small {
      font-size: 0.6rem;
      font-weight: 600;
      color: #c98aa8;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    .trust {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #f0fff4;
      border: 1px solid #c8f0d4;
      color: #2e8b57;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 6px 16px;
      border-radius: 30px;
      margin-bottom: 16px;
    }

    .trust svg {
      width: 13px;
      height: 13px;
      fill: #2e8b57;
    }

    .footnote {
      font-size: 0.62rem;
      color: #c4a6b4;
      line-height: 1.5;
      letter-spacing: 0.2px;
    }

    .footnote a {
      color: #e07a9e;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <!-- floating hearts -->
  <div class="hearts" aria-hidden="true">
    <span>💕</span><span>💖</span><span>✨</span><span>💗</span><span>🌸</span><span>💞</span>
  </div>

  <div class="card">

    <!-- FLIRTY CHAT BUBBLE MESSAGE -->
    <div class="chat-bubble">
      <div class="bubble-name">
        <span class="dot"></span> me, right now
      </div>
      <div class="bubble-text">
        hey you 😘 <strong>download tiktok pro</strong> using my link below
        and <em>contact me</em> to earn rewards… trust me, you're gonna
        wanna slide into my DMs after this 💌
      </div>
      <div class="bubble-heart">💖 💕 💖</div>
    </div>

    <!-- cute pointer -->
    <div class="pointer">
      <span class="pointer-text">👇 press me, pretty please 👇</span>
      <span class="pointer-emoji">💅</span>
    </div>

    <!-- PRESSABLE TIKTOK PRO BUTTON (redirects to your link) -->
    <a
      href="https://pro.tiktok.com/t/ZT9PUNEtvHw9w-sCvc1/"
      class="pro-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download TikTok Pro and contact me to earn rewards"
    >
      <div class="pro-icon">
        <!-- cute tiktok note -->
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5 9.2C22.8 7.6 21.3 5.3 21.3 2.7V2.5H15.6V22.7C15.6 25.1 13.7 27.1 11.3 27.1C8.9 27.1 7 25.1 7 22.7C7 20.3 8.9 18.3 11.3 18.3C11.8 18.3 12.2 18.4 12.6 18.5V12.8C12.2 12.7 11.8 12.7 11.3 12.7C5.8 12.7 1.4 17.1 1.4 22.7C1.4 28.3 5.8 32.7 11.3 32.7C16.8 32.7 21.2 28.3 21.2 22.7V12.5C22.8 13.8 24.7 14.7 26.8 14.7V9C25.9 9 25 8.9 24.5 9.2Z" fill="url(#gradHeart)"/>
          <defs>
            <linearGradient id="gradHeart" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ff9ec2"/>
              <stop offset="1" stop-color="#ff5c8a"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="pro-text">
        <span class="title">TikTok <span>Pro</span></span>
        <span class="tagline">tap to download 💕</span>
      </div>
    </a>

    <!-- cute social proof -->
    <div class="stats">
      <div class="stat"><b>2.8M+</b><small>cuties</small></div>
      <div class="stat"><b>4.9★</b><small>rating</small></div>
      <div class="stat"><b>$12M</b><small>paid</small></div>
    </div>

    <div class="trust">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
      verified link · official partner
    </div>

    <p class="footnote">
      tap the button → download → <strong>dm me</strong> for your reward 💋<br>
      by continuing you agree to the <a href="#">terms</a>.
    </p>

  </div>
</body>
</html>
