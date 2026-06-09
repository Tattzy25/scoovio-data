import {
  categories,
  dashboardStats,
  featuredListings,
  onboardingSteps,
  trustSignals,
} from "../lib/data.js";
import {
  renderCategories,
  renderDashboardStats,
  renderFooter,
  renderHero,
  renderListings,
  renderOnboarding,
  renderTrustSafety,
} from "../components/sections.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="container">
    ${renderHero()}
    ${renderCategories(categories)}
    ${renderListings(featuredListings)}
    ${renderOnboarding(onboardingSteps)}
    ${renderDashboardStats(dashboardStats)}
    ${renderTrustSafety(trustSignals)}
    ${renderFooter()}
  </main>
`;
