const card = (content) => `<article class="card">${content}</article>`;

export const renderHero = () => `
  <section class="hero">
    <div>
      <p class="eyebrow">P2P Marketplace Platform</p>
      <h1>Hosts list. Users discover. Scoovio powers the connection.</h1>
      <p class="lead">Built for mobility scooters and baby strollers. Hosts fully control pricing, availability, delivery, and listing rules while users search and book confidently.</p>
      <div class="hero-actions">
        <button class="btn btn-primary">Become a Host</button>
        <button class="btn btn-secondary">Search Listings</button>
      </div>
    </div>
    <div class="panel">
      <h3>Platform Positioning</h3>
      <ul>
        <li>Not an inventory owner</li>
        <li>Not a traditional rental operator</li>
        <li>Pure onboarding and transaction platform</li>
        <li>Two-sided host/user trust and tooling</li>
      </ul>
    </div>
  </section>
`;

export const renderCategories = (categories) => `
  <section>
    <div class="section-header">
      <h2>Equipment Categories</h2>
      <p>Structured from Equipment and Equipment Categories schema entities.</p>
    </div>
    <div class="grid two">
      ${categories
        .map((item) =>
          card(`
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="#" class="text-link">View ${item.name}</a>
          `)
        )
        .join("")}
    </div>
  </section>
`;

export const renderListings = (listings) => `
  <section>
    <div class="section-header">
      <h2>Featured Listings</h2>
      <p>Search-ready cards aligned with listing, availability, image, and review data.</p>
    </div>
    <div class="grid four">
      ${listings
        .map((item) =>
          card(`
            <p class="badge">${item.category}</p>
            <h3>${item.title}</h3>
            <p class="meta">Hosted by ${item.hostName} · ${item.city}</p>
            <p class="meta">⭐ ${item.rating} (${item.reviewCount})</p>
            <p class="price">$${item.pricePerDay}<span>/day</span></p>
            <div class="chips">
              ${item.instantBook ? '<span class="chip">Instant Book</span>' : '<span class="chip muted">Request to Book</span>'}
              ${item.delivery ? '<span class="chip">Delivery</span>' : '<span class="chip muted">Pickup</span>'}
              ${item.verifiedHost ? '<span class="chip">Verified Host</span>' : '<span class="chip muted">New Host</span>'}
            </div>
            <p class="status">${item.availabilityStatus}</p>
          `)
        )
        .join("")}
    </div>
  </section>
`;

export const renderOnboarding = (steps) => `
  <section>
    <div class="section-header">
      <h2>Host Onboarding Flow</h2>
      <p>Mapped to partners, compliance checks, equipment moderation, and payout schemas.</p>
    </div>
    <div class="timeline">
      ${steps
        .map(
          (step, idx) => `
            <div class="timeline-item">
              <span>${idx + 1}</span>
              <p>${step}</p>
            </div>
          `
        )
        .join("")}
    </div>
  </section>
`;

export const renderDashboardStats = (stats) => `
  <section>
    <div class="section-header">
      <h2>Operations Snapshot</h2>
      <p>Platform analytics and trust operations from admin, support, and risk entities.</p>
    </div>
    <div class="grid four">
      ${stats
        .map((stat) =>
          card(`
            <p class="metric">${stat.value}</p>
            <p>${stat.label}</p>
          `)
        )
        .join("")}
    </div>
  </section>
`;

export const renderTrustSafety = (items) => `
  <section>
    <div class="section-header">
      <h2>Trust, Safety, and Support</h2>
      <p>User protection and host reliability powered by governance tables.</p>
    </div>
    <div class="grid two">
      ${items.map((item) => card(`<p>${item}</p>`)).join("")}
    </div>
  </section>
`;

export const renderFooter = () => `
  <footer>
    <p>© ${new Date().getFullYear()} Scoovio Platform</p>
    <p>Peer-to-peer mobility scooter and stroller marketplace infrastructure.</p>
  </footer>
`;
