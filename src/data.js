const asset = (f) => `/assets/${f}`;
export const OLD_SITE = 'https://www.silvertreebakery.co.uk';
export const GIFT_CARD = 'https://squareup.com/gift/QXX4QRQXCTKXZ/order';
export const PHONE = '0121 748 6455';
export const EMAIL = 'info@silvertreebakery.co.uk';

/* ---------- navigation ---------- */
export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/locations', label: 'Locations', children: [
    { to: '/locations/water-orton-lane', label: 'Water Orton Lane' },
    { to: '/locations/gracechurch', label: 'Gracechurch' },
    { to: '/locations/thorpe-estate', label: 'Thorpe Estate' },
  ] },
  { to: '/menu', label: 'Menu' },
  { to: '/events', label: 'Events' },
  { to: '/arbour-club', label: 'Arbour Club' },
  { to: '/wholesale-enquiries', label: 'Wholesale' },
  { to: '/careers', label: 'Careers' },
];

export const FOOTER_LINKS = [
  { to: '/locations', label: 'Locations' },
  { to: '/menu', label: 'Menu' },
  { to: '/events', label: 'Events' },
  { to: '/arbour-club', label: 'Arbour Club' },
  { to: '/careers', label: 'Careers' },
  { to: '/wholesale-enquiries', label: 'Wholesale' },
  { to: '/community-requests', label: 'Community requests' },
  { href: GIFT_CARD, label: 'Gift card' },
];

/* ---------- home ---------- */
export const HERO_SLIDES = [
  { src: asset('img9700-web.jpg'), pos: '50% 38%' },
  { src: asset('img9708-web.jpg'), pos: '50% 52%' },
  { src: asset('img9707-web.jpg'), pos: '50% 55%' },
  { src: asset('arbour-5.jpg'), pos: '50% 50%' },
];

export const MARQUEE = ['Sourdough', 'Almond Croissant', 'Cruffin', 'Cinnamon Bun', 'Lemon Meringue', 'Focaccia', 'Cookie Dough', 'Maple & Pecan Danish'];

export const STATS = [
  { end: 4.7, dec: 1, label: 'Google rating' },
  { end: 728, label: 'Happy reviews' },
  { end: 3, label: 'Bakeries & growing' },
  { end: 2020, nocomma: true, label: 'Where it began' },
];

/* ---------- locations (copy from the old /s/stories pages) ---------- */
export const LOCATIONS = [
  {
    slug: 'water-orton-lane',
    tag: 'The original',
    name: 'Water Orton Lane',
    img: asset('img9700-web.jpg'),
    alt: 'The timber A-frame at Silver Tree Bakery with festoon lights',
    sub: 'Where it all began — the home of Silver Tree and the heart of our baking.',
    heading: 'Our Original Bakery',
    story: [
      'Water Orton Lane is where Silver Tree first started — built on a commitment to quality, consistency, and doing things properly.',
      'From early mornings to daily production, this site remains at the centre of everything we do. It’s where our processes are developed, our standards are set and our baking happens every day.',
      'While our spaces have grown, this is where the foundations of Silver Tree are rooted.',
    ],
    points: ['Freshly baked bread, pastries & specials', 'Seasonally decorated', 'The working heart of our bakery operations', 'A simple, authentic bakery experience', 'Outdoor seating only'],
    address: ['Minworth, Water Orton Ln,', 'Sutton Coldfield B76 9BG'],
    map: 'https://www.google.com/maps/search/?api=1&query=Silver+Tree+Bakery+Water+Orton+Lane+B76+9BG',
    hours: null,
    hoursNote: 'Listed on Google as closing at 2:30 pm. Hours vary by day and season — please check Google or call before you travel.',
    gallery: [asset('img9700-web.jpg'), asset('img9696-web.jpg'), asset('menu-toasties.jpg')],
    extra: null,
  },
  {
    slug: 'gracechurch',
    tag: 'High street',
    name: 'Gracechurch',
    img: asset('img9707-web.jpg'),
    alt: 'Indoor seating with marble tables and olive banquettes at Gracechurch',
    sub: 'Our high street location — bringing Silver Tree into a vibrant, everyday setting with indoor seating for the first time.',
    heading: 'A New Step for Silver Tree',
    story: [
      'Located within Gracechurch Shopping Centre, this site marked an important step for us — our first high street location and the first time we introduced indoor seating.',
      'Designed to feel both welcoming and elevated. It brings together everything we’re known for — artisan baking, quality coffee, and considered interiors — in a space built for everyday visits.',
      'Whether you’re grabbing your morning coffee, meeting friends, or staying a little longer, Gracechurch is made to fit seamlessly into your routine.',
    ],
    points: ['Freshly baked bread, pastries, and seasonal specials', 'High quality coffee and drinks', 'Comfortable indoor seating', 'Outdoor dog friendly seating', 'Wheelchair accessible', 'A relaxed, design led environment', 'A central, easy-to-visit location'],
    address: ['Unit 194, The Gracechurch Centre,', 'Sutton Coldfield B72 1PA'],
    map: 'https://www.google.com/maps/search/?api=1&query=Silver+Tree+Bakery+Gracechurch+Sutton+Coldfield+B72+1PA',
    hours: [['Monday', '09:00 – 17:30']],
    hoursNote: 'Monday hours shown from the old website. Other days vary — please check Google or call before you travel.',
    gallery: [asset('img9707-web.jpg'), asset('arbour-6.jpg'), asset('event-afterhours.jpg')],
    extra: { title: 'The Arbour Club, upstairs', text: 'Coworking, meeting rooms and event space above the bakery.', to: '/arbour-club', cta: 'Explore the Arbour Club' },
  },
  {
    slug: 'thorpe-estate',
    tag: 'Countryside barn',
    name: 'Thorpe Estate',
    img: asset('img9708-web.jpg'),
    alt: 'The restored barn at Thorpe Estate with exposed brick and beams',
    sub: 'A countryside bakery experience, set within a beautifully restored barn.',
    heading: 'A New Chapter for Silver Tree',
    story: [
      'Set within the grounds of Thorpe Estate, this location brings Silver Tree into a slower, more considered setting.',
      'A restored barn with exposed beams, polished concrete floors, and a focus on atmosphere designed to feel as good as it looks.',
      'Whether you’re stopping by for a coffee and pastries or visiting as part of a stay at Constantine House, Thorpe is built to be experienced.',
    ],
    points: ['Freshly baked bread, pastries, and seasonal specials', 'High-quality coffee and drinks', 'A calm, design-led environment', 'Indoor and outdoor seating', 'Dogs welcome at our outdoor seating', 'Wheelchair accessible', 'A destination worth travelling for'],
    address: ['Thorpe Estate,', 'Tamworth B79 0LH'],
    map: 'https://www.google.com/maps/search/?api=1&query=Thorpe+Estate+Tamworth+B79+0LH',
    hours: [['Monday – Saturday', '08:30 – 14:30'], ['Sunday', '09:00 – 14:00']],
    hoursNote: null,
    gallery: [asset('img9708-web.jpg'), asset('event-wreath.jpg'), asset('arbour-1.jpg')],
    extra: { title: 'Staying at Constantine House', text: 'We can provide breakfast and catering for guests staying at Constantine House and across Thorpe Estate. From relaxed morning pastries to full group breakfasts, everything can be delivered directly to you.', href: `mailto:${EMAIL}?subject=Thorpe%20catering%20enquiry`, cta: 'Enquire about catering' },
  },
];

/* ---------- menu ---------- */
export const MENU = [
  {
    title: 'Breakfast Muffins',
    img: asset('arbour-1.jpg'),
    items: [['Sausage & Bacon Muffin', 'Our morning classic, freshly made.'], ['Grilled Sausage in a Bun', 'Simple, hot and satisfying.'], ['Breakfast Muffins', 'Made to order — speak to the team about butter-free requests.']],
  },
  {
    title: 'Toasties & Cold Sandwiches',
    img: asset('menu-toasties.jpg'),
    items: [['Ham & Cheese Toastie', 'Toasted until golden.'], ['Caramelised Onion Toastie', 'Sweet onion and melted cheese.'], ['Croque Monsieur', 'The French café favourite.'], ['Cheese & Onion', 'A bakery staple.']],
  },
  {
    title: 'Viennoiserie & Pastry',
    img: asset('arbour-memberships.jpg'),
    items: [['Almond Croissant', 'Flaky, buttery and generously filled.'], ['Cruffin', 'Croissant meets muffin.'], ['Maple & Pecan Danish', 'Laminated pastry, maple glaze.'], ['Cinnamon Bun & Cinnamon Roll', 'One of our most popular bakes.'], ['Marmite, Cheese & Caramelised Onion Swirl', 'A savoury, sticky favourite.'], ['Trdelník', 'Chimney cake, sugar-coated.']],
  },
  {
    title: 'Bread & Sweet Treats',
    img: asset('img9696-web.jpg'),
    items: [['Sourdough Bread', 'Slow-fermented, baked daily.'], ['Focaccia', 'Olive-oil rich and golden.'], ['Lemon Meringue', 'Bright, tart and light.'], ['Cookie Dough & Brownies', 'Sweet-tooth favourites.'], ['Sausage Rolls', 'Baked on site.']],
  },
];

export const MENU_NOTE = 'Highlights taken from our Google listing and old website. Items, prices and availability change daily and vary by bakery — ask in store.';

/* ---------- events (from the old /product pages) ---------- */
const AH_BASE = `${OLD_SITE}/product`;
export const EVENTS = [
  {
    slug: 'wreath-making-class',
    title: 'Silver Tree After Hours — Wreath Making Class',
    short: 'A cosy festive evening with Shires Florist.',
    date: 'Sun 29 Nov', time: '17:00', place: 'Thorpe Estate, Tamworth B79 0LH',
    price: '£70', priceNote: 'per person',
    img: asset('event-wreath.jpg'),
    book: `${AH_BASE}/silver-tree-after-hours-wreath-making-class/ROYPZRLTO3E3LMXCLKRP73I5`,
    body: [
      'Join us on Sunday 29th November for Silver Tree After Hours: get into the festive spirit with a cosy wreath making evening at Silver Tree Bakery, Thorpe Estate in collaboration with Shires Florist.',
      'With guidance from Ell at Shires Florist, you’ll create your own beautiful Christmas wreath to take home. All wreath making materials are included, along with mulled wine and mince pies to enjoy during the evening.',
    ],
    terms: [
      'Cancellations: if you need to cancel your booking, please contact us at least 48 hours before the event to receive a full refund. Cancellations made less than 48 hours before the event are non-refundable.',
      'If we have to cancel the event, all tickets will be refunded in full.',
    ],
  },
  ...[
    { slug: 'cheese-wine-evening-fri-27-nov', date: 'Fri 27 Nov', day: 'Friday 27 November', link: 'silver-tree-after-hours-cheese-wine-evening/HXSYOLFEIEAZ4QYAD3DXREAM', place: 'Silver Tree After Hours', status: null, hours: false },
    { slug: 'cheese-wine-evening-sat-28-nov', date: 'Sat 28 Nov', day: 'Saturday 28th November', link: 'silver-tree-after-hours-cheese-wine-evening-saturday-28th-november/KZURHWWHZELYL7N36UGCLC5L', place: 'Gracechurch Shopping Centre, Sutton Coldfield B72 1PA', status: 'Sold out', hours: true },
    { slug: 'cheese-wine-evening-fri-18-dec', date: 'Fri 18 Dec', day: 'Friday 18th December', link: 'silver-tree-after-hours-cheese-wine-evening-friday-18th-december/COJHUTKIBVYXDHMBU44W25SP', place: 'Thorpe Estate, Tamworth B79 0LH', status: 'Sold out', hours: true },
    { slug: 'cheese-wine-evening-sat-19-dec', date: 'Sat 19 Dec', day: 'Saturday 19th December', link: 'silver-tree-after-hours-cheese-wine-evening-saturday-19th-december/DRJM3GI756R6QLHAJ4ZZBM4V', place: 'Thorpe Estate, Tamworth B79 0LH', status: 'Sold out', hours: true },
  ].map((e) => ({
    slug: e.slug,
    title: 'Silver Tree After Hours — Cheese & Wine Evening',
    short: 'Wine, beautiful cheeses and charcuterie sliced to order.',
    date: e.date, time: e.hours ? '19:00 – 22:30' : null, place: e.place,
    status: e.status,
    price: '£15', priceNote: 'deposit per person, deducted from your bill',
    img: asset('event-afterhours.jpg'),
    book: `${AH_BASE}/${e.link}`,
    body: [
      `Join us on ${e.day} for Silver Tree After Hours: a relaxed evening of wine, beautiful cheeses and charcuterie sliced to order. Your table is yours for the whole evening, so you can settle in and enjoy the night at your own pace.`,
      'Your booking reserves your place. Food and drinks are purchased separately on the night, so you can choose exactly what you fancy. A £15 deposit per person is taken when you book and deducted from your purchases that evening.',
    ],
    terms: [
      'A £15 deposit is required for each person attending. Your booking is confirmed once the deposit has been paid. The deposit will be deducted from your final bill for purchases made at Silver Tree After Hours that evening. It cannot be used on another date or exchanged for cash. Any unused deposit balance will not be refunded or carried forward.',
      'You can cancel your booking and request a full deposit refund up to 48 hours before the event. Cancellations made less than 48 hours before the event, and no-shows, are not eligible for a deposit refund. If you cannot attend, you may transfer your place to someone else by letting us know before the event.',
      'Arbour Club members receive their 10% discount on purchases made during the event.',
      'Please tell us about any dietary requirements or allergies before the event. We’ll do our best to help, but we cannot guarantee that food or drinks will be free from allergens or cross-contamination.',
      'Alcohol will only be served to guests aged 18 or over. We may ask for valid photo ID.',
      'If Silver Tree Bakery cancels the event, customers will be contacted and their deposit will be refunded. If there is a significant change to the event, customers will be contacted with further information.',
    ],
  })),
];

/* ---------- arbour club ---------- */
export const ARBOUR_GALLERY = ['arbour-5.jpg', 'arbour-3.jpg', 'arbour-6.jpg', 'arbour-4.jpg', 'arbour-8.jpg', 'arbour-7.jpg'].map(asset);
export const MEMBERSHIP_URL = `${OLD_SITE}/product/arbour-club-memberships/KTUZT63ZGIFY37BSUAXDYSTF`;

export const PLANS = [
  { name: 'Full Access', option: 'Unlimited Access', price: '£200', feat: true, perks: ['Unlimited weekday access'], text: 'Perfect for business owners, remote workers and professionals who need a dedicated workspace throughout the week.' },
  { name: '3 Day', option: '3 Day Membership', price: '£160', perks: ['12 visits per month'], text: 'Ideal if you split your week between home, office and client meetings.' },
  { name: '1 Day', option: '1 Day Membership', price: '£80', perks: ['4 visits per month'], text: 'Perfect if you need a regular workspace once a week.' },
];

export const PERKS = ['Complimentary coffee and pastry every day', 'Fast WiFi', 'Comfortable workspace', '10% discount at Silver Tree Bakery', 'Discounted meeting room hire', 'Discounted parking', 'Personal member flask', 'Networking opportunities and events'];

export const ROOMS = [
  { name: 'Large Boardroom', text: 'Perfect for presentations, workshops, training sessions and team meetings.', feats: ['Seats up to 10 boardroom style', 'Up to 20 theatre style', 'Large presentation screen', 'Complimentary tea, coffee and water', 'High-speed WiFi'], half: '£150', full: '£300', img: asset('arbour-5.jpg') },
  { name: 'Small Meeting Room', text: 'A private space for interviews, client meetings and video calls.', feats: ['Seats up to 4 people', '2 work desks', 'Complimentary tea, coffee and water', 'High-speed WiFi'], half: '£100', full: '£200', img: asset('arbour-4.jpg') },
];

export const ROOM_CATERING = ['Fresh pastries and breakfast platters', 'Sandwich and lunch platters', 'Cakes and sweet treats', 'Tea and coffee packages', 'Bespoke catering available on request'];

/* ---------- careers (from the old /careers page) ---------- */
export const JOBS = [
  {
    id: 'bakers', title: 'Experienced Bakers & Pastry Laminators', where: 'Water Orton Lane, Sutton Coldfield', type: 'Full-time',
    intro: 'Silver Tree Bakery is growing — and we’re looking for skilled Bakers to join our team as we continue to expand. If you have a passion for quality bread and viennoiserie, enjoy early starts (without the late nights), and have at least 3 years’ experience, this could be the perfect role for you.',
    want: ['Proven experience with sourdough bread and laminated pastries (croissants, viennoiserie)', 'Strong attention to detail and pride in your work', 'A positive attitude and ability to thrive in a fast-paced, supportive environment'],
    get: ['Birthday & Christmas incentives', 'Two team outings per year', 'A friendly, ambitious team environment', 'Opportunities to grow with us as we expand'],
  },
  {
    id: 'foh-jq', title: 'Front of House Team Member — Jewellery Quarter', where: 'Jewellery Quarter, Birmingham', type: 'Full-time & part-time',
    intro: 'Silver Tree Bakery is growing — and we’re looking for full-time and part-time Front of House team members to join us at our new location in the JQ. If you love working with people, thrive in a fast-paced environment, and take pride in delivering great customer experiences, this could be the perfect role for you.',
    want: ['Previous experience in a customer-facing role is a must', 'Full availability to work across the week', 'A positive, friendly attitude and strong communication skills', 'Ability to work efficiently in a busy environment', 'Strong attention to detail and presentation'],
    get: ['No evening shifts', 'Full timers will work a 4 on 2 off pattern', 'Two team outings per year', 'A friendly, ambitious team environment', 'Opportunities to grow with us as we expand'],
  },
  {
    id: 'foh-gracechurch', title: 'Front of House Team Member — Gracechurch', where: 'Gracechurch Shopping Centre, Sutton Coldfield', type: 'Full-time',
    intro: 'We’re looking for full time Front of House team members to join us at our Gracechurch, Sutton Coldfield location. If you love working with people, thrive in a fast-paced environment, and take pride in delivering great customer experiences, this could be the perfect role for you.',
    want: ['Previous experience in a customer-facing role is a must', 'A positive, friendly attitude and strong communication skills', 'Ability to work efficiently in a busy environment', 'Strong attention to detail and presentation', 'Availability to work weekends'],
    get: ['No evening shifts', 'Full timers will work a 4 on 2 off pattern', 'Two team outings per year', 'A friendly, ambitious team environment', 'Opportunities to grow with us as we expand'],
  },
  {
    id: 'foh-thorpe', title: 'Front of House Team Member — Thorpe', where: 'Thorpe Estate, Tamworth', type: 'Part-time',
    intro: 'We’re looking for part-time Front of House team members to join us at our Thorpe location. If you love working with people, thrive in a fast-paced environment, and take pride in delivering great customer experiences, this could be the perfect role for you.',
    want: ['Previous experience in a customer-facing role is a must', 'A positive, friendly attitude and strong communication skills', 'Ability to work efficiently in a busy environment', 'Strong attention to detail and presentation', 'Availability to work weekends'],
    get: ['No evening shifts', 'Two team outings per year', 'A friendly, ambitious team environment', 'Opportunities to grow with us as we expand'],
  },
  {
    id: 'driver', title: 'Part Time Delivery Driver', where: 'Water Orton Lane, Minworth', type: 'Part-time',
    intro: 'Silver Tree Bakery is growing — and we’re looking for a reliable part time delivery driver. If you’re organised, punctual and take pride in making sure our freshly prepared products reach their destination safely and on time, this could be the role for you.',
    want: ['A full clean driving license', 'Must be aged 25 or over due to insurance purposes', 'Good timekeeping and attention to detail', 'Confidence loading, unloading and handling deliveries', 'A friendly helpful attitude'],
    get: ['No evening shifts', 'Two team outings per year', 'A friendly, ambitious team environment', 'Opportunities to grow with us as we expand'],
  },
];
export const CAREERS_EMAIL = 'careers@silvertreebakery.co.uk';

/* ---------- forms (fields from the old enquiry pages) ---------- */
export const WHOLESALE_PRODUCTS = ['Bread & sourdough', 'Viennoiserie & pastries', 'Savoury products', 'Sweet treats & cakes', 'Sandwiches & toasties'];
export const COMMUNITY_TYPES = ['Charity', 'Corporate', 'School', 'Community', 'Other'];

/* ---------- home bits ---------- */
export const BAKES = [
  ['Sourdough & Bread', 'Slow-fermented loaves, focaccia and everyday bread baked at dawn.'],
  ['Viennoiserie', 'Almond croissants, cruffins and a maple & pecan danish — laminated by hand.'],
  ['Buns & Sweet Treats', 'Cinnamon buns and rolls, lemon meringue, brownies, cookie dough and trdelník.'],
  ['Toasties & Savoury', 'Ham & cheese, caramelised onion, croque monsieur, sausage rolls and Marmite cheese swirls.'],
  ['Breakfast Muffins', 'Sausage & bacon muffins and grilled sausage in a bun — the morning classic.'],
  ['Seasonal Specials', "From Halloween witch's hats to poppy brownies — something new is always on the counter."],
];

export const CONTACT = [
  ['Call', PHONE, 'tel:+441217486455'],
  ['Email', EMAIL, `mailto:${EMAIL}`],
  ['Instagram', '@silver_tree_catering', 'https://www.instagram.com/silver_tree_catering', true],
  ['Facebook', 'Silver Tree Bakery', 'https://www.facebook.com/silvertreecatering', true],
];
