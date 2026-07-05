const app = document.querySelector("#app");
const dialog = document.querySelector("#booking-dialog");
const dialogContent = document.querySelector("#dialog-content");
const menuButton = document.querySelector("#menu-button");
const mobileNav = document.querySelector("#mobile-nav");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const savedCount = document.querySelector("#saved-count");

const BUSINESS_WHATSAPP = "919117865343";

const icons = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  bowl: '<path d="M4 11h16a8 8 0 0 1-16 0Z"/><path d="M8 7c0-2 1.4-2.3 1.4-4M13 7c0-2 1.4-2.3 1.4-4M6 20h12"/>',
  bike: '<circle cx="5.5" cy="16.5" r="3.5"/><circle cx="18.5" cy="16.5" r="3.5"/><path d="m5.5 16.5 4-7 4 7h-8Zm4-7h5l4 7M8 7h3M14.5 6l2 3"/>',
  cab: '<path d="m5 11 1.6-4.3A2 2 0 0 1 8.5 5h7a2 2 0 0 1 1.9 1.7L19 11"/><path d="M4 11h16a1 1 0 0 1 1 1v5H3v-5a1 1 0 0 1 1-1Z"/><path d="M5 17v2M19 17v2M7 14h1M16 14h1"/>',
  shield: '<path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  heart: '<path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z"/>',
  leaf: '<path d="M20 4C11 4 5 8.5 5 15c0 2.8 2.2 5 5 5 6.5 0 10-7 10-16Z"/><path d="M4 21c2-5 6-8 11-11"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  calendar: '<path d="M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2ZM7 2v4M17 2v4M3 9h18"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  helmet: '<path d="M4 14a8 8 0 0 1 16 0v3H9a5 5 0 0 1-5-5v2Z"/><path d="M12 6v5M5 14h6"/>',
  fuel: '<path d="M5 3h9v18H5zM7 7h5M14 8h2l3 3v7a1.5 1.5 0 0 0 3 0V9l-2-2"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  ac: '<path d="M12 2v20M4 7l16 10M4 17 20 7M8 4l4 3 4-3M8 20l4-3 4 3M3 11l4 1-1 4M21 13l-4-1 1-4"/>',
  bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',
  sparkle: '<path d="m12 3 1.2 4.4L17 9l-3.8 1.6L12 15l-1.2-4.4L7 9l3.8-1.6L12 3ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15ZM5 3l.7 2.3L8 6l-2.3.7L5 9l-.7-2.3L2 6l2.3-.7L5 3Z"/>',
  drop: '<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/><path d="M9 16a3 3 0 0 0 3 3"/>',
  shirt: '<path d="m8 4-5 3 3 5 2-1v10h8V11l2 1 3-5-5-3a4 4 0 0 1-8 0Z"/>',
  iron: '<path d="M4 17h16l-2-6a5 5 0 0 0-4.8-3.6H9A5 5 0 0 0 4 12v5Z"/><path d="M4 17v3h16M10 7V4h4v3"/>',
  package: '<path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z"/><path d="m4 7 8 4 8-4M12 11v10M8 5l8 4"/>',
  phone: '<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM10 18h4"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  bookmark: '<path d="M6 4.75A2.75 2.75 0 0 1 8.75 2h6.5A2.75 2.75 0 0 1 18 4.75V22l-6-3.8L6 22V4.75Z"/>',
  route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 0-6h2a3 3 0 0 0 3-3V8"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 10h.01M16 10h.01M8 15s1.5 2 4 2 4-2 4-2"/>'
};

function icon(name, className = "") {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.sparkle}</svg>`;
}

function largeBike() {
  return `<svg viewBox="0 0 240 180" aria-hidden="true">
    <circle cx="48" cy="128" r="35"/><circle cx="192" cy="128" r="35"/>
    <path d="m48 128 44-72 40 72H48Zm44-72h48l52 72M78 42h32M136 39l18 25M93 56l22 5"/>
    <path d="M132 128h28M184 78h-32" />
  </svg>`;
}

function largeCab() {
  return `<svg viewBox="0 0 240 180" aria-hidden="true">
    <path d="m45 100 20-44c4-8 11-13 20-13h72c10 0 18 5 22 14l18 43"/>
    <path d="M30 101h180c8 0 14 6 14 14v31H16v-31c0-8 6-14 14-14Z"/>
    <circle cx="58" cy="145" r="17"/><circle cx="182" cy="145" r="17"/>
    <path d="M73 60h94M45 118h22M173 118h22M109 118h22M62 101l16-41M178 101l-16-41"/>
  </svg>`;
}

function largeBowl() {
  return `<svg viewBox="0 0 240 180" aria-hidden="true">
    <path d="M35 80h170c0 50-35 79-85 79S35 130 35 80Z"/>
    <path d="M52 80c8-23 128-23 136 0M69 158h102"/>
    <path d="M77 60c0-20 15-20 15-42M119 59c0-18 14-20 14-40M159 61c0-18 14-20 14-39"/>
    <path d="m95 72 8-6M126 70l9-7M153 74l7-6"/>
  </svg>`;
}

function serviceArt(type) {
  if (type === "bike") return largeBike();
  if (type === "cab") return largeCab();
  return largeBowl();
}

function button(label, href, variant = "button-dark") {
  return `<a class="button ${variant}" href="${href}" data-link>${label}${icon("arrow")}</a>`;
}

function homeTemplate() {
  return `
    <section class="home-hero">
      <img class="hero-image" src="/assets/talbina-hero.jpg" alt="A warm bowl of Royal Mart Talbina with almonds, pistachios and dates" />
      <div class="hero-content">
        <p class="eyebrow eyebrow-badge">One place for everyday needs</p>
        <h1>Wellness for your table. <em>Wheels</em> for your journey.</h1>
        <p class="hero-copy">From nourishing Talbina to easy bike and cab rides, Royal Mart takes care of the little things—so you can make more room for life.</p>
        <div class="hero-actions">
          ${button("Shop Talbina", "/talbina", "button-dark")}
          <a class="button button-light" href="#services">Explore all services${icon("arrow")}</a>
        </div>
        <div class="hero-note">
          <div class="avatar-stack"><span>AM</span><span>SK</span><span>+</span></div>
          <span>Built around comfort, care and dependable service</span>
        </div>
      </div>
      <a class="floating-product" href="/talbina" data-link>
        <span class="floating-product-icon">${icon("bowl")}</span>
        <span><strong>Royal Talbina</strong><small>Wholesome · Comforting · Natural</small></span>
        <span class="mini-arrow">${icon("arrow")}</span>
      </a>
    </section>

    <div class="trust-strip reveal">
      <div class="trust-item">${icon("shield")}<span><strong>Trusted quality</strong><span>Carefully selected services</span></span></div>
      <div class="trust-item">${icon("clock")}<span><strong>Easy & quick</strong><span>Book in just a few taps</span></span></div>
      <div class="trust-item">${icon("heart")}<span><strong>Made with care</strong><span>Your comfort comes first</span></span></div>
      <div class="trust-item">${icon("clock")}<span><strong>Open 24/7</strong><span>Kothri Kalan & Ashta</span></span></div>
    </div>

    <section class="section" id="services">
      <div class="section-shell">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">Everything you need</p>
            <h2>One trusted place.<br />Three thoughtful services.</h2>
          </div>
          <p>Royal Mart brings wellness, mobility and convenience together with a service experience that feels refreshingly simple.</p>
        </div>
        <div class="service-grid">
          <article class="service-card talbina reveal">
            <span class="service-number">01</span>
            <div class="service-card-content">
              <h3>Royal Talbina</h3>
              <p>A nourishing barley blend made for warm, wholesome moments.</p>
              <a class="button button-ghost" href="/talbina" data-link>Discover Talbina${icon("arrow")}</a>
            </div>
            <span class="card-sun">${icon("bowl")}</span><div class="card-art">${serviceArt("talbina")}</div>
          </article>
          <article class="service-card bike reveal">
            <span class="service-number">02</span>
            <div class="service-card-content">
              <h3>Bike Rental</h3>
              <p>Pick your ride and explore at your own pace.</p>
              <a class="button button-ghost" href="/bike" data-link>Find a bike${icon("arrow")}</a>
            </div>
            <span class="card-sun">${icon("bike")}</span><div class="card-art">${serviceArt("bike")}</div>
          </article>
          <article class="service-card cab reveal">
            <span class="service-number">03</span>
            <div class="service-card-content">
              <h3>Cab Booking</h3>
              <p>Comfortable rides for every route and occasion.</p>
              <a class="button button-ghost" href="/cab" data-link>Book a cab${icon("arrow")}</a>
            </div>
            <span class="card-sun">${icon("cab")}</span><div class="card-art">${serviceArt("cab")}</div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-tinted" id="why-us">
      <div class="section-shell why-grid">
        <div class="why-visual reveal">
          <div class="why-phone">
            <div class="why-phone-notch"></div>
            <div class="why-phone-head"><small>Good morning</small><strong>What do you need?</strong></div>
            <div class="phone-service"><span class="phone-service-icon">${icon("bowl")}</span><span><strong>Order Talbina</strong><small>Warm goodness at home</small></span></div>
            <div class="phone-service"><span class="phone-service-icon">${icon("bike")}</span><span><strong>Rent a bike</strong><small>Ride on your terms</small></span></div>
            <div class="phone-service"><span class="phone-service-icon">${icon("cab")}</span><span><strong>Book a cab</strong><small>Comfortable door-to-door rides</small></span></div>
          </div>
          <div class="floating-chip one">${icon("shield")}Verified service</div>
          <div class="floating-chip two">${icon("sparkle")}Fresh & simple</div>
        </div>
        <div class="why-copy reveal">
          <p class="eyebrow">Why Royal Mart</p>
          <h2>Less running around.<br />More living well.</h2>
          <p>We imagined one friendly place that could take a few daily tasks off your list. No clutter, no complicated choices—just thoughtful essentials and dependable service.</p>
          <div class="benefit-list">
            <div class="benefit"><span class="benefit-icon">${icon("shield")}</span><span><strong>Reliable by design</strong><small>Clear choices and dependable care</small></span></div>
            <div class="benefit"><span class="benefit-icon">${icon("clock")}</span><span><strong>Made for your time</strong><small>Quick booking, flexible scheduling</small></span></div>
            <div class="benefit"><span class="benefit-icon">${icon("heart")}</span><span><strong>Warm human service</strong><small>Support that actually feels helpful</small></span></div>
            <div class="benefit"><span class="benefit-icon">${icon("leaf")}</span><span><strong>Thoughtful choices</strong><small>Good quality, without the noise</small></span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark" id="how-it-works">
      <div class="section-shell">
        <div class="section-heading center reveal">
          <p class="eyebrow" style="color:var(--gold)">Simple from the start</p>
          <h2>How Royal Mart works</h2>
        </div>
        <div class="steps-grid">
          <div class="step reveal"><span class="step-number">1</span><h3>Choose a service</h3><p>Select Talbina, a bike or a cab from one clean space.</p></div>
          <div class="step reveal"><span class="step-number">2</span><h3>Share the details</h3><p>Tell us what you need, where you are, and when it works for you.</p></div>
          <div class="step reveal"><span class="step-number">3</span><h3>Relax—we’ve got it</h3><p>We’ll confirm the request and help make your day a little lighter.</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-shell">
        <div class="section-heading center reveal">
          <p class="eyebrow">Made for real life</p>
          <h2>A service experience that feels human</h2>
        </div>
        <div class="review-card reveal">
          <div class="review-avatar">RM</div>
          <div class="review-content">
            <div class="stars">★★★★★</div>
            <blockquote>“Royal Mart is being built around one simple promise: everyday services should feel easy, clear and genuinely caring.”</blockquote>
            <strong>The Royal Mart promise</strong>
            <small>Quality, convenience and warmth in every request</small>
          </div>
        </div>
      </div>
    </section>

    <section class="home-cta reveal" id="contact">
      <p class="eyebrow" style="justify-content:center;color:var(--gold)">Ready when you are</p>
      <h2>Make your everyday a little more royal.</h2>
      <p>Serving Kothri Kalan, Ashta and the VIT Bhopal area 24 hours a day.</p>
      <a class="button button-gold" href="#services">Explore all services${icon("arrow")}</a>
    </section>
  `;
}

const bikeListings = [
  {
    name: "Bajaj Pulsar",
    subtitle: "A powerful and comfortable everyday ride",
    tag: "Sport bike",
    category: "sport",
    image: "/assets/bike-pulsar.jpg",
    price: "₹500 / 12 hours",
    monthly: "₹5,500 monthly",
    meta: [["shield", "No deposit"], ["user", "Licence required"], ["pin", "Pickup near VIT"]]
  },
  {
    name: "Bajaj Platina",
    subtitle: "Efficient and practical for regular travel",
    tag: "Commuter",
    category: "commuter",
    image: "/assets/bike-platina.jpg",
    price: "₹350 / 12 hours",
    monthly: "₹4,500 monthly",
    meta: [["shield", "No deposit"], ["user", "Licence required"], ["pin", "Pickup near VIT"]]
  },
  {
    name: "Scooty",
    subtitle: "Simple, light and convenient for local rides",
    tag: "Easy ride",
    category: "scooter",
    image: "/assets/bike-scooty.jpg",
    price: "₹350 / 12 hours",
    monthly: "₹4,000 monthly",
    meta: [["shield", "No deposit"], ["user", "Licence required"], ["pin", "Pickup near VIT"]]
  }
];

const cabListings = [
  {
    name: "Bhopal Junction",
    subtitle: "VIT Bhopal → Bhopal Junction",
    tag: "Fixed fare",
    category: "bhopal",
    pickup: "vit",
    drop: "bhopal-junction",
    price: "₹3,300",
    monthly: "One-way fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "From VIT"], ["pin", "VIT pickup"]]
  },
  {
    name: "Rani Kamlapati Station",
    subtitle: "VIT Bhopal → Rani Kamlapati",
    tag: "Fixed fare",
    category: "bhopal",
    pickup: "vit",
    drop: "rani-kamlapati",
    price: "₹3,300",
    monthly: "One-way fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "From VIT"], ["pin", "VIT pickup"]]
  },
  {
    name: "Bhopal Airport",
    subtitle: "VIT Bhopal → Bhopal Airport",
    tag: "Airport",
    category: "bhopal",
    pickup: "vit",
    drop: "bhopal-airport",
    price: "₹3,300",
    monthly: "One-way fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "From VIT"], ["pin", "VIT pickup"]]
  },
  {
    name: "Indore Airport",
    subtitle: "VIT Bhopal → Indore Airport",
    tag: "Airport",
    category: "indore",
    pickup: "vit",
    drop: "indore-airport",
    price: "₹4,200",
    monthly: "One-way fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "From VIT"], ["pin", "VIT pickup"]]
  },
  {
    name: "Indore Junction",
    subtitle: "VIT Bhopal → Indore Junction",
    tag: "Fixed fare",
    category: "indore",
    pickup: "vit",
    drop: "indore-junction",
    price: "₹4,200",
    monthly: "One-way fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "From VIT"], ["pin", "VIT pickup"]]
  },
  {
    name: "Bhopal Junction to VIT",
    subtitle: "Bhopal Junction → VIT Bhopal",
    tag: "Return trip",
    category: "bhopal",
    pickup: "bhopal-junction",
    drop: "vit",
    price: "₹3,300",
    monthly: "Return fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "Return to VIT"], ["pin", "Junction pickup"]]
  },
  {
    name: "Rani Kamlapati to VIT",
    subtitle: "Rani Kamlapati → VIT Bhopal",
    tag: "Return trip",
    category: "bhopal",
    pickup: "rani-kamlapati",
    drop: "vit",
    price: "₹3,300",
    monthly: "Return fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "Return to VIT"], ["pin", "Station pickup"]]
  },
  {
    name: "Bhopal Airport to VIT",
    subtitle: "Bhopal Airport → VIT Bhopal",
    tag: "Return trip",
    category: "bhopal",
    pickup: "bhopal-airport",
    drop: "vit",
    price: "₹3,300",
    monthly: "Return fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "Return to VIT"], ["pin", "Airport pickup"]]
  },
  {
    name: "Indore Airport to VIT",
    subtitle: "Indore Airport → VIT Bhopal",
    tag: "Return trip",
    category: "indore",
    pickup: "indore-airport",
    drop: "vit",
    price: "₹4,200",
    monthly: "Return fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "Return to VIT"], ["pin", "Airport pickup"]]
  },
  {
    name: "Indore Junction to VIT",
    subtitle: "Indore Junction → VIT Bhopal",
    tag: "Return trip",
    category: "indore",
    pickup: "indore-junction",
    drop: "vit",
    price: "₹4,200",
    monthly: "Return fixed fare",
    meta: [["cab", "Swift / Ertiga"], ["route", "Return to VIT"], ["pin", "Junction pickup"]]
  }
];

function cabFilterTemplate() {
  return `
    <div class="cab-filter-card reveal" id="cab-finder">
      <div class="cab-filter-intro">
        <span class="benefit-icon">${icon("route")}</span>
        <div><strong>Find your fixed-fare cab</strong><small>Select from our available locations—no typing needed.</small></div>
      </div>
      <form class="cab-filter-form" data-cab-filter>
        <div class="field">
          <label for="cab-filter-pickup">Pickup location</label>
          <select id="cab-filter-pickup" name="pickup" required>
            <option value="vit">VIT Bhopal</option>
            <option value="bhopal-junction">Bhopal Junction</option>
            <option value="rani-kamlapati">Rani Kamlapati Station</option>
            <option value="bhopal-airport">Bhopal Airport</option>
            <option value="indore-airport">Indore Airport</option>
            <option value="indore-junction">Indore Junction</option>
          </select>
        </div>
        <div class="field">
          <label for="cab-filter-drop">Drop destination</label>
          <select id="cab-filter-drop" name="drop" required>
            <option value="" selected disabled>Choose destination</option>
            <option value="vit">VIT Bhopal</option>
            <option value="bhopal-junction">Bhopal Junction</option>
            <option value="rani-kamlapati">Rani Kamlapati Station</option>
            <option value="bhopal-airport">Bhopal Airport</option>
            <option value="indore-airport">Indore Airport</option>
            <option value="indore-junction">Indore Junction</option>
          </select>
        </div>
        <div class="field">
          <label for="cab-filter-type">Choose cab</label>
          <select id="cab-filter-type" name="cab">
            <option value="any">Swift or Ertiga</option>
            <option value="swift">Swift</option>
            <option value="ertiga">Ertiga</option>
          </select>
        </div>
        <div class="cab-filter-actions">
          <button class="button button-dark" type="submit">Search cabs${icon("arrow")}</button>
          <button class="cab-filter-reset" type="button" data-cab-reset>Show all routes</button>
        </div>
      </form>
    </div>`;
}

function listingCards(type, listings) {
  return listings.map((item, index) => `
    <article class="listing-card reveal" data-category="${item.category}" ${type === "cab" ? `data-pickup="${item.pickup}" data-drop="${item.drop}"` : ""}>
      <div class="listing-visual">
        <span class="listing-tag">${item.tag}</span>
        <button class="save-button" type="button" data-save="${type}-${index}" aria-label="Save ${item.name}">${icon("bookmark")}</button>
        ${type === "bike"
          ? `<img class="listing-vehicle-image" src="${item.image}" alt="${item.name} available for rent from Royal Mart" loading="lazy" />`
          : `<img class="listing-vehicle-image" src="${index % 2 === 0 ? "/assets/cab-swift.jpg" : "/assets/cab-ertiga.jpg"}" data-original-src="${index % 2 === 0 ? "/assets/cab-swift.jpg" : "/assets/cab-ertiga.jpg"}" alt="${index % 2 === 0 ? "Swift-style" : "Ertiga-style"} Royal Mart cab for ${item.name}" loading="lazy" />`}
      </div>
      <div class="listing-body">
        <div class="listing-title-row"><div><h3>${item.name}</h3><span class="listing-subtitle">${item.subtitle}</span></div><span class="rating">OPEN 24/7</span></div>
        <div class="listing-meta">${item.meta.map(([iconName, text], metaIndex) => `<span class="${type === "cab" && metaIndex === 0 ? "cab-type-label" : ""}">${icon(iconName)}<b>${text}</b></span>`).join("")}</div>
        <div class="listing-footer">
          <span class="price-pending"><strong>${item.price}</strong><small>${item.monthly}</small></span>
          <button class="button button-dark" type="button" data-book="${type}" data-item="${item.name} — ${item.price}" ${type === "cab" ? `data-base-item="${item.name} — ${item.price}"` : ""}>${type === "bike" ? "Reserve" : "Book route"}</button>
        </div>
      </div>
    </article>`).join("");
}

function servicePageTemplate(type) {
  const isBike = type === "bike";
  const title = isBike ? "Your ride, your time." : "Comfortable rides, right on time.";
  const intro = isBike
    ? "Choose a well-kept ride for errands, work or the open road. Flexible plans, simple booking and freedom on two wheels."
    : "From quick city trips to family travel, find the right cab for your route—with an experience designed around comfort and clarity.";
  const pageClass = isBike ? "bike-page" : "cab-page";
  const listings = isBike ? bikeListings : cabListings;
  const art = isBike ? largeBike() : largeCab();
  return `
    <div class="${pageClass}">
      <section class="page-hero">
        <div class="page-shell page-hero-inner">
          <div class="page-hero-copy reveal">
            <p class="eyebrow">${isBike ? "Freedom on two wheels" : "A better way to get there"}</p>
            <h1>${title}</h1>
            <p>${intro}</p>
            <div class="page-hero-actions">
              <a class="button button-dark" href="${isBike ? "#available" : "#cab-finder"}">${isBike ? "Find a bike" : "Choose your cab"}${icon("arrow")}</a>
              <a class="button button-light" href="/#how-it-works" data-link>How it works</a>
            </div>
          </div>
          <div class="page-hero-art reveal"><div class="art-orb">${art}</div></div>
        </div>
      </section>
      ${isBike ? "" : cabFilterTemplate()}
      <section class="results-section" id="available">
        <div class="section-shell">
          <div class="results-head reveal">
            <div><p class="eyebrow">${isBike ? "Pick your machine" : "Choose your route"}</p><h2>${isBike ? "Rides for every kind of day" : "Fixed fares to and from VIT Bhopal"}</h2><p>${isBike ? "Choose a 12-hour ride or a convenient monthly plan. No security deposit." : "Choose the exact pickup and destination direction below. Outbound and return routes are listed separately."}</p></div>
            ${isBike ? `<div class="filter-pills" role="group" aria-label="Filter options">
              <button class="filter-pill active" type="button" data-filter="all">All</button>
              <button class="filter-pill" type="button" data-filter="commuter">Commuter</button>
              <button class="filter-pill" type="button" data-filter="scooter">Scooty</button>
              <button class="filter-pill" type="button" data-filter="sport">Sport</button>
            </div>` : ""}
          </div>
          <div class="listing-grid">${listingCards(type, listings)}</div>
          ${isBike ? "" : `<div class="cab-empty-state" id="cab-empty-state" hidden>${icon("route")}<h3>No fixed route found</h3><p>Please choose a route between VIT Bhopal and one of the listed stations or airports.</p><button class="button button-light" type="button" data-cab-reset>Show all routes</button></div>`}
        </div>
      </section>
      <section class="feature-band">
        <div class="section-shell feature-band-grid">
          <div class="feature-band-item reveal"><span class="benefit-icon">${icon("shield")}</span><div><h3>${isBike ? "Well-kept rides" : "Driver details shared"}</h3><p>${isBike ? "Each bike is checked before it reaches you." : "Know your assigned cab and driver before pickup."}</p></div></div>
          <div class="feature-band-item reveal"><span class="benefit-icon">${icon("clock")}</span><div><h3>Flexible scheduling</h3><p>Choose a date and time that works around your day.</p></div></div>
          <div class="feature-band-item reveal"><span class="benefit-icon">${icon("phone")}</span><div><h3>Friendly support</h3><p>Help is close whenever you need to change a detail.</p></div></div>
        </div>
      </section>
    </div>`;
}

function talbinaTemplate() {
  return `
    <div class="talbina-page">
      <section class="page-hero">
        <img class="page-hero-bg" src="/assets/talbina-hero.jpg" alt="Creamy Talbina with nuts and dates" />
        <div class="page-shell page-hero-inner">
          <div class="page-hero-copy reveal">
            <p class="eyebrow eyebrow-badge">Royal Mart wellness</p>
            <h1>A warm bowl of goodness.</h1>
            <p>Royal Talbina is a wholesome barley-based comfort food made for slow mornings, nourishing breaks and gentle evenings.</p>
            <div class="page-hero-actions">
              <button class="button button-dark" type="button" data-whatsapp-order="Royal Talbina">Order on WhatsApp${icon("arrow")}</button>
              <a class="button button-light" href="#discover">Discover the goodness</a>
            </div>
          </div>
        </div>
      </section>
      <section class="product-section" id="discover">
        <div class="section-shell product-grid">
          <div class="product-image reveal">
            <img src="/assets/talbina-hero.jpg" alt="A nourishing bowl of Talbina topped with almonds and pistachios" />
            <div class="product-badge"><strong>Wholesome comfort</strong><span>Simple ingredients · Warmly satisfying</span></div>
          </div>
          <div class="product-copy reveal">
            <p class="eyebrow">Meet Royal Talbina</p>
            <h2>Tradition, warmth and everyday nourishment.</h2>
            <p>Inspired by the timeless barley porridge loved across generations, our Talbina is designed to be creamy, comforting and easy to make part of your daily routine.</p>
            <div class="ingredient-list">
              <div class="ingredient"><span>${icon("leaf")}</span>Barley goodness</div>
              <div class="ingredient"><span>${icon("heart")}</span>Warm comfort food</div>
              <div class="ingredient"><span>${icon("sparkle")}</span>Simple preparation</div>
              <div class="ingredient"><span>${icon("bowl")}</span>Smooth & satisfying</div>
            </div>
            <div class="order-box">
              <div class="order-box-head">
                <span><strong>Royal Talbina</strong><small>Pack size and price coming soon</small></span>
                <div class="quantity-control" aria-label="Quantity">
                  <button class="quantity-button" type="button" data-quantity="minus" aria-label="Decrease quantity">${icon("minus")}</button>
                  <span class="quantity-value" id="quantity-value">1</span>
                  <button class="quantity-button" type="button" data-quantity="plus" aria-label="Increase quantity">${icon("plus")}</button>
                </div>
              </div>
              <button class="button button-dark button-full" type="button" data-whatsapp-order="Royal Talbina">Order on WhatsApp${icon("arrow")}</button>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-tinted">
        <div class="section-shell">
          <div class="section-heading center reveal"><p class="eyebrow">Why you’ll love it</p><h2>Goodness that fits your day.</h2></div>
          <div class="feature-band-grid">
            <div class="feature-band-item reveal"><span class="benefit-icon">${icon("clock")}</span><div><h3>Easy to prepare</h3><p>A warm, comforting bowl without a complicated routine.</p></div></div>
            <div class="feature-band-item reveal"><span class="benefit-icon">${icon("leaf")}</span><div><h3>Barley based</h3><p>Made around a simple grain enjoyed for generations.</p></div></div>
            <div class="feature-band-item reveal"><span class="benefit-icon">${icon("heart")}</span><div><h3>Made for moments of care</h3><p>Serve it warm when you want something gentle and satisfying.</p></div></div>
          </div>
          <div class="nutrition-grid reveal">
            <div class="nutrition"><strong>01</strong><span>Warm</span></div>
            <div class="nutrition"><strong>02</strong><span>Wholesome</span></div>
            <div class="nutrition"><strong>03</strong><span>Comforting</span></div>
            <div class="nutrition"><strong>04</strong><span>Simple</span></div>
          </div>
        </div>
      </section>
    </div>`;
}

const routes = {
  "/": homeTemplate,
  "/talbina": talbinaTemplate,
  "/bike": () => servicePageTemplate("bike"),
  "/cab": () => servicePageTemplate("cab")
};

function normalizedPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return routes[path] ? path : "/";
}

function routeName(path) {
  return path === "/" ? "home" : path.slice(1);
}

function render(options = {}) {
  const path = normalizedPath();
  app.innerHTML = routes[path]();
  document.body.dataset.page = routeName(path);
  document.title = path === "/"
    ? "Royal Mart — Everyday, made effortless"
    : `${routeName(path).replace(/^\w/, c => c.toUpperCase())} | Royal Mart`;

  document.querySelectorAll("[data-route]").forEach(link => {
    link.classList.toggle("active", link.dataset.route === routeName(path));
  });

  closeMenu();
  setMinimumDates();
  restoreSaved();
  initReveals();
  if (!options.popstate) window.scrollTo({ top: 0, behavior: "auto" });
  requestAnimationFrame(scrollToHash);
}

function navigate(url) {
  const target = new URL(url, window.location.origin);
  if (target.origin !== window.location.origin) {
    window.location.href = target.href;
    return;
  }
  const previousPath = window.location.pathname;
  const current = window.location.pathname + window.location.hash;
  const next = target.pathname + target.hash;
  if (current !== next) history.pushState({}, "", next);
  if (target.pathname !== previousPath) {
    render();
  } else if (target.pathname === window.location.pathname && target.hash) {
    scrollToHash();
  } else {
    render();
  }
}

function scrollToHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setMinimumDates() {
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
    if (!input.value) input.value = today;
  });
}

function initReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px" });
  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
    observer.observe(item);
  });
}

function openMenu() {
  menuButton.classList.add("open");
  mobileNav.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  menuButton.classList.remove("open");
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toastMessage.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem("royal-mart-saved") || "[]");
  } catch {
    return [];
  }
}

function restoreSaved() {
  const saved = getSaved();
  savedCount.textContent = saved.length;
  document.querySelectorAll("[data-save]").forEach(button => {
    const isSaved = saved.includes(button.dataset.save);
    button.classList.toggle("saved", isSaved);
    button.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${button.dataset.save}`);
  });
}

function toggleSaved(key) {
  const saved = getSaved();
  const next = saved.includes(key) ? saved.filter(item => item !== key) : [...saved, key];
  localStorage.setItem("royal-mart-saved", JSON.stringify(next));
  restoreSaved();
  showToast(next.includes(key) ? "Saved to your favourites" : "Removed from favourites");
}

function setCabCardVehicle(card, cabType) {
  const image = card.querySelector(".listing-vehicle-image");
  const label = card.querySelector(".cab-type-label b");
  const bookingButton = card.querySelector('[data-book="cab"]');
  if (!image || !label || !bookingButton) return;

  if (cabType === "swift") {
    image.src = "/assets/cab-swift.jpg";
    image.alt = `Swift-style Royal Mart cab for ${card.querySelector("h3")?.textContent || "this route"}`;
    label.textContent = "Swift";
    bookingButton.dataset.item = `${bookingButton.dataset.baseItem} — Swift`;
    return;
  }
  if (cabType === "ertiga") {
    image.src = "/assets/cab-ertiga.jpg";
    image.alt = `Ertiga-style Royal Mart cab for ${card.querySelector("h3")?.textContent || "this route"}`;
    label.textContent = "Ertiga";
    bookingButton.dataset.item = `${bookingButton.dataset.baseItem} — Ertiga`;
    return;
  }

  image.src = image.dataset.originalSrc;
  label.textContent = "Swift / Ertiga";
  bookingButton.dataset.item = bookingButton.dataset.baseItem;
}

function applyCabFilter(form) {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const pickup = form.elements.pickup.value;
  const drop = form.elements.drop.value;
  const cabType = form.elements.cab.value;
  const cards = [...document.querySelectorAll(".cab-page .listing-card")];
  let matches = 0;

  cards.forEach(card => {
    const matchesRoute = card.dataset.pickup === pickup && card.dataset.drop === drop;
    card.hidden = !matchesRoute;
    if (matchesRoute) {
      matches += 1;
      setCabCardVehicle(card, cabType);
    }
  });

  const grid = document.querySelector(".cab-page .listing-grid");
  const emptyState = document.querySelector("#cab-empty-state");
  grid?.classList.toggle("filtered", matches > 0);
  if (emptyState) emptyState.hidden = matches > 0;
  showToast(matches ? `${cabType === "any" ? "Cab" : cabType.replace(/^\w/, character => character.toUpperCase())} found for this route` : "No fixed cab route is available for that selection");
  document.querySelector("#available")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetCabFilter() {
  const form = document.querySelector("[data-cab-filter]");
  form?.reset();
  document.querySelectorAll(".cab-page .listing-card").forEach(card => {
    card.hidden = false;
    setCabCardVehicle(card, "any");
  });
  document.querySelector(".cab-page .listing-grid")?.classList.remove("filtered");
  const emptyState = document.querySelector("#cab-empty-state");
  if (emptyState) emptyState.hidden = true;
}

function bookingCopy(type, item) {
  const details = {
    talbina: ["Order Talbina", "Tell us where to reach you. We’ll confirm pack size, price and delivery details once your product rate is ready.", "bowl"],
    bike: ["Reserve your ride", `You selected ${item}. Share a few details and we’ll prepare the request.`, "bike"],
    cab: ["Request your cab", `You selected ${item}. Add your contact details to continue.`, "cab"]
  };
  return details[type] || details.talbina;
}

function extraFields(type) {
  if (type === "talbina") {
    const quantity = document.querySelector("#quantity-value")?.textContent || "1";
    return `
      <div class="field-row">
        <div class="field"><label for="order-quantity">Quantity</label><select id="order-quantity" name="quantity">${[1, 2, 3, 4, 5].map(n => `<option${String(n) === quantity ? " selected" : ""}>${n}</option>`).join("")}</select></div>
        <div class="field"><label for="order-city">City</label><input id="order-city" name="city" placeholder="Your city" required /></div>
      </div>
      <div class="field"><label for="order-address">Delivery address</label><textarea id="order-address" name="address" placeholder="House / flat, street and area" required></textarea></div>`;
  }
  if (type === "cab") {
    return `
      <div class="field"><label for="modal-pickup">Pickup location</label><input id="modal-pickup" name="pickup" placeholder="Where should we pick you up?" required /></div>
      <div class="field"><label for="modal-drop">Drop location</label><input id="modal-drop" name="drop" placeholder="Where are you going?" required /></div>
      <div class="field-row">
        <div class="field"><label for="modal-cab-date">Journey date</label><input id="modal-cab-date" name="date" type="date" required /></div>
        <div class="field"><label for="modal-cab-time">Time</label><input id="modal-cab-time" name="time" type="time" required /></div>
      </div>`;
  }
  return `
    <div class="field"><label for="modal-bike-location">Pickup location</label><input id="modal-bike-location" name="location" placeholder="Your area or pickup point" required /></div>
    <div class="field-row">
      <div class="field"><label for="modal-bike-date">Pickup date</label><input id="modal-bike-date" name="date" type="date" required /></div>
      <div class="field"><label for="modal-bike-duration">Rental plan</label><select id="modal-bike-duration" name="duration"><option>12 hours</option><option>Monthly</option></select></div>
    </div>`;
}

function openBooking(type, item) {
  const [title, intro, iconName] = bookingCopy(type, item);
  const bookingNote = type === "talbina"
    ? "Talbina pack size, price and delivery charge will be added when the final product details are ready."
    : type === "bike"
      ? "No security deposit is required. Please carry a valid driving licence at pickup near VIT Bhopal."
      : "This is the fixed fare for the selected one-way route and direction.";
  dialogContent.innerHTML = `
    <div class="dialog-body">
      <span class="dialog-icon">${icon(iconName)}</span>
      <h2>${title}</h2>
      <p class="dialog-intro">${intro}</p>
      <form class="dialog-form" id="request-form" data-type="${type}" data-item="${item}">
        <div class="field-row">
          <div class="field"><label for="customer-name">Full name</label><input id="customer-name" name="name" autocomplete="name" placeholder="Your name" required /></div>
          <div class="field"><label for="customer-phone">Mobile number</label><input id="customer-phone" name="phone" type="tel" inputmode="numeric" autocomplete="tel" placeholder="10-digit number" pattern="[0-9]{10}" required /></div>
        </div>
        ${extraFields(type)}
        <p class="dialog-note">${icon("info")}${bookingNote}</p>
        <p class="form-error" id="form-error" hidden>Please check the highlighted details.</p>
        <button class="button button-dark button-full" type="submit">Send request${icon("send")}</button>
      </form>
    </div>`;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
  setMinimumDates();
  setTimeout(() => dialog.querySelector("input")?.focus(), 100);
}

function openWhatsAppOrder(item) {
  if (!BUSINESS_WHATSAPP) {
    showToast("Add your WhatsApp number to activate direct ordering");
    openBooking("talbina", item);
    return;
  }
  const quantity = document.querySelector("#quantity-value")?.textContent || "1";
  const message = encodeURIComponent(`Hello Royal Mart, I want to order ${item}.\nQuantity: ${quantity}\nPlease share the pack size, price and delivery details.`);
  window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`, "_blank", "noopener");
}

function submitRequest(form) {
  if (!form.checkValidity()) {
    form.reportValidity();
    document.querySelector("#form-error").hidden = false;
    return;
  }
  const formData = Object.fromEntries(new FormData(form));
  const reference = `RM${Date.now().toString().slice(-6)}`;
  const request = {
    reference,
    type: form.dataset.type,
    item: form.dataset.item,
    ...formData,
    createdAt: new Date().toISOString()
  };
  const requests = JSON.parse(localStorage.getItem("royal-mart-requests") || "[]");
  localStorage.setItem("royal-mart-requests", JSON.stringify([...requests, request]));

  if (BUSINESS_WHATSAPP) {
    const details = Object.entries(formData)
      .map(([key, value]) => `${key.replace(/^\w/, character => character.toUpperCase())}: ${value}`)
      .join("\n");
    const message = encodeURIComponent(`Royal Mart request ${reference}\n${request.type}: ${request.item}\n${details}`);
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`, "_blank", "noopener");
  }

  const successMessage = BUSINESS_WHATSAPP
    ? "WhatsApp has opened with your request. Send the prepared message to complete your booking."
    : "Your request has been saved on this device. Add your Royal Mart WhatsApp number before launch so each new request reaches the business instantly.";
  dialogContent.innerHTML = `
    <div class="dialog-success">
      <span class="success-check">${icon("check")}</span>
      <h2>Request saved.</h2>
      <p>${successMessage}</p>
      <span class="reference-code">${reference}</span>
      <button class="button button-dark button-full" type="button" data-close-dialog>Done</button>
    </div>`;
}

function closeDialog() {
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

document.addEventListener("click", event => {
  const link = event.target.closest("a[data-link]");
  if (link && link.origin === window.location.origin) {
    event.preventDefault();
    navigate(link.href);
    return;
  }

  const whatsappButton = event.target.closest("[data-whatsapp-order]");
  if (whatsappButton) {
    openWhatsAppOrder(whatsappButton.dataset.whatsappOrder);
    return;
  }

  const bookingButton = event.target.closest("[data-book]");
  if (bookingButton) {
    openBooking(bookingButton.dataset.book, bookingButton.dataset.item || "Royal Mart service");
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    toggleSaved(saveButton.dataset.save);
    return;
  }

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const value = document.querySelector("#quantity-value");
    let quantity = Number(value.textContent);
    quantity += quantityButton.dataset.quantity === "plus" ? 1 : -1;
    value.textContent = Math.min(9, Math.max(1, quantity));
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    document.querySelectorAll("[data-filter]").forEach(button => button.classList.toggle("active", button === filterButton));
    document.querySelectorAll(".listing-card").forEach(card => {
      card.hidden = filterButton.dataset.filter !== "all" && card.dataset.category !== filterButton.dataset.filter;
    });
    return;
  }

  if (event.target.closest("[data-cab-reset]")) {
    resetCabFilter();
    return;
  }

  if (event.target.closest("[data-close-dialog]")) closeDialog();
});

document.addEventListener("submit", event => {
  const form = event.target;
  if (form.matches("[data-cab-filter]")) {
    event.preventDefault();
    applyCabFilter(form);
    return;
  }
  if (form.matches("[data-search]")) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    showToast("Showing available options");
    document.querySelector("#available")?.scrollIntoView({ behavior: "smooth" });
  }
  if (form.id === "request-form") {
    event.preventDefault();
    submitRequest(form);
  }
});

menuButton.addEventListener("click", () => {
  mobileNav.classList.contains("open") ? closeMenu() : openMenu();
});

document.querySelector("#dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  const isBackdrop = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (isBackdrop) closeDialog();
});

document.querySelector("#saved-button").addEventListener("click", () => {
  const count = getSaved().length;
  showToast(count ? `${count} favourite${count === 1 ? "" : "s"} saved` : "Your favourites are empty");
});

window.addEventListener("popstate", () => render({ popstate: true }));
window.addEventListener("scroll", () => document.querySelector("#site-header").classList.toggle("scrolled", window.scrollY > 12), { passive: true });
document.querySelector("#year").textContent = new Date().getFullYear();
restoreSaved();
render();
