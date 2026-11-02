# Demo Hotel — Restaurant Website Demo

A responsive, multi-page restaurant website concept created by StarnyX Technologies. This is a **restaurant website only** (not a lodge/hotel accommodation website).

## Pages
- `index.html` — Home / hero / featured dishes
- `menu.html` — Menu with category filters and WhatsApp dish enquiries
- `about.html` — Restaurant story and values
- `gallery.html` — Food and ambience gallery with lightbox
- `contact.html` — WhatsApp enquiry form and Google Maps embed
- `404.html` — Custom not-found page

## Features
- Animated illustrated Indian thali SVG loading screen (`assets/images/thali-loader.svg`)
- Responsive navigation and mobile menu
- Sample menu data with category filters
- WhatsApp enquiry links routed to **+91 73855 85398**
- Contact form builds a pre-filled WhatsApp message; it does not store form submissions
- Google Maps embed for **Rashin, Maharashtra 414403**
- Footer credit links to https://starnyxtechnologies.in
- Locally stored optimized WebP food and restaurant images
- Custom favicon SVG
- No backend, login, payment gateway, email form or accommodation/room booking

## Important demo notes
This is a portfolio/demo website. The restaurant name, menu, dish descriptions, sample prices, phone number and map location are placeholders for demonstration. Replace them with the real restaurant's approved details before using it as a live business website. The provided WhatsApp number currently routes to the demo owner's number, not a verified Demo Hotel business line. The map points to the general Rashin area, not a verified restaurant street address.

## Publish on GitHub + Vercel
1. Extract the ZIP.
2. Upload the contents of this folder to the root of a GitHub repository.
3. Import the repository into Vercel.
4. Framework preset: **Other**.
5. Build command: leave blank.
6. Output directory: `.` (project root).
7. Deploy. No environment variables are required for the static website.

You can also preview locally by opening `index.html`, or run a static server such as `python -m http.server 8000` from this folder.

## Customising WhatsApp number
Change `WHATSAPP_NUMBER` near the top of `script.js`, and update `wa.me/917385585398` links in the HTML pages. Use country code without `+` or spaces.

## Credits
Website concept and implementation: **StarnyX Technologies** — https://starnyxtechnologies.in
