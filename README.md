# RealDeal - Scam Detection Chrome Extension for Meesho

## Overview
**RealDeal** is a scam detection and price analysis Chrome extension specifically designed for the **Meesho** platform. It helps users make safer online shopping decisions by verifying seller credibility, analyzing review genuineness, and tracking price history for select products.

---

## Key Features
### ✅ Price History Tracking
- Scrapes price data for **specific Meesho product pages only**.
- Currently supported for:
  - [Apple iPhone 16 128GB Black](https://www.meesho.com/apple-iphone-16-128gb-black/p/7cx6ax?srsltid=AfmBOopnpI8cFo7YjEnlZ7T-Et4XRP8p24P9a97il25mrK9eOAUGA7GN)
  - [CMF Buds 42dB Active Cancellation](https://www.meesho.com/cmf-buds-42-db-active-cancellation-ultra-bass-technology-355-hrs-playtime-bluetooth-gaming-orange-true-wireless/p/91z06j)
- Displays lowest, highest, and average prices using **Highcharts.js**.

---

### ✅ Seller Reputation Engine
- Extracts seller information from Meesho product pages.
- Verifies sellers using web-based cross-checking.
- Displays a **"Verified" Badge** for trusted sellers.

---

### ✅ Review Genuineness Check
- Analyzes review patterns to detect suspicious reviews.
- Flags repetitive content and bulk reviews.

---

### ✅ Final Recommendation System
- Combines price, seller trust, review authenticity, and return/refund policy into a single score.
- Displays a visual recommendation bar with:
  - **Skip | Wait | Okay | Yes**

---

## Important Notes
- 🔍 **Currently works only for Meesho platform.**
- 🛒 **Price History tracking is limited to the following product URLs:**
  - Apple iPhone 16: [View Product](https://www.meesho.com/apple-iphone-16-128gb-black/p/7cx6ax?srsltid=AfmBOopnpI8cFo7YjEnlZ7T-Et4XRP8p24P9a97il25mrK9eOAUGA7GN)
  - CMF Buds: [View Product](https://www.meesho.com/cmf-buds-42-db-active-cancellation-ultra-bass-technology-355-hrs-playtime-bluetooth-gaming-orange-true-wireless/p/91z06j)

---

## Technologies Used
- JavaScript
- Web Scraping (via content scripts)
- Highcharts.js (for price graphs)

---

## Future Scope
- Extend support to more Meesho products.
- Add compatibility for other e-commerce platforms.
- Improve fake review detection using advanced techniques.

---

## Disclaimer
This extension is a **prototype** and currently designed for **academic and demonstration purposes only.** It works for specific Meesho product links and may not function properly on other pages or platforms.
