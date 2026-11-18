// Main Application Orchestrator for "Lidera D1: Emociones que Mueven la Tienda"
import { renderOverview } from './components/overviewView.js';
import { renderRoadmap } from './components/roadmapView.js';
import { renderPausaTool } from './components/pausaSimulator.js';
import { renderPulsoTienda } from './components/pulsoTienda.js';
import { renderRoleplayCases } from './components/roleplayCases.js';
import { renderFeedbackBuilder } from './components/feedbackBuilder.js';
import { renderKpiDashboard } from './components/kpiDashboard.js';
import { renderDofaTracker } from './components/dofaTracker.js';

// Route configuration
const ROUTES = {
  overview: { title: 'Inicio / Programa', render: renderOverview },
  roadmap: { title: 'Ruta 8 Semanas', render: renderRoadmap },
  pausa: { title: 'Herramienta PAUSA', render: renderPausaTool },
  pulso: { title: 'Pulso de Tienda', render: renderPulsoTienda },
  cases: { title: 'Simulador de Casos', render: renderRoleplayCases },
  feedback: { title: 'Feedback y Reconocimiento', render: renderFeedbackBuilder },
  kpis: { title: 'Indicadores y Métricas', render: renderKpiDashboard },
  dofa: { title: 'DOFA y Continuidad', render: renderDofaTracker }
};

export function initApp() {
  window.addEventListener('hashchange', handleNavigation);
  setupMobileMenu();

  // Initial load
  if (!window.location.hash) {
    window.location.hash = '#overview';
  } else {
    handleNavigation();
  }
}

function handleNavigation() {
  const hash = window.location.hash.replace('#', '') || 'overview';
  const route = ROUTES[hash] || ROUTES.overview;

  const appRoot = document.getElementById('app-root');
  if (!appRoot) return;

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHash = link.getAttribute('href')?.replace('#', '');
    if (linkHash === hash) {
      link.className = 'nav-link active px-3.5 py-2 rounded-xl text-xs font-black transition-all bg-red-600 text-yellow-300 shadow-sm flex items-center gap-1.5';
    } else {
      link.className = 'nav-link px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5';
    }
  });

  // Render view
  route.render('app-root');

  // Close mobile drawer if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setupMobileMenu() {
  const btnToggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (btnToggle && menu) {
    btnToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

// Global Toast helper
window.showToast = function (message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  const colors = {
    info: 'bg-slate-900 text-white',
    success: 'bg-emerald-600 text-white',
    error: 'bg-red-600 text-white'
  };

  toast.className = `p-3.5 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0 ${colors[type] || colors.info}`;
  toast.innerHTML = `<i data-lucide="bell" class="w-4 h-4"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Auto-run when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
