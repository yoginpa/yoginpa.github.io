/* ============================================
   Yogin Patel — Landing Page
   Vanilla JS · No dependencies
   ============================================ */

// Intentionally minimal — all animations are CSS-driven.
// This file exists as a hook for future enhancements
// (e.g., vCard download, dynamic year in footer, etc.)

(function () {
  'use strict';

  // Ensure external links open safely
  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    if (!link.getAttribute('rel') || !link.getAttribute('rel').includes('noopener')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
})();
