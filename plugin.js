"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = "/*\n * Thymer Plugin Settings UI \u2014 Design Tokens\n *\n * Canonical CSS custom properties for the plugin settings panel system.\n * Plugins consume this verbatim; component CSS reads from these vars.\n *\n * See shared/settings-ui/DESIGN.md for rationale.\n *\n * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).\n * Fallbacks use color-mix(currentColor) so panels work when a token is absent.\n */\n\n.tps-panel {\n  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-text:           var(--text-default,   currentColor);\n  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));\n  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));\n  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));\n\n  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-bg-input:       var(--input-bg-color,\n                        color-mix(in srgb, currentColor 6%, transparent));\n  --tps-bg-hover:       var(--hover-subtle,\n                        var(--sidebar-bg-hover,\n                        color-mix(in srgb, currentColor 8%, transparent)));\n  --tps-bg-active:      var(--active-bg-color,\n                        color-mix(in srgb, currentColor 12%, transparent));\n\n  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-divider:        var(--divider-color,\n                        var(--thin-divider-color,\n                        color-mix(in srgb, currentColor 14%, transparent)));\n  --tps-border:         var(--input-border-color,\n                        var(--divider-color,\n                        color-mix(in srgb, currentColor 22%, transparent)));\n  --tps-border-strong:  var(--titlebar-border-color,\n                        var(--selection-border,\n                        color-mix(in srgb, currentColor 32%, transparent)));\n\n  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-accent:         var(--logo-color, currentColor);\n  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);\n  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));\n\n  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-danger:         var(--enum-red-fg, #ef4444);\n  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);\n  --tps-warning:        var(--text-warning,\n                        var(--enum-yellow-fg, #f59e0b));\n  --tps-success:        var(--enum-green-fg, #10b981);\n  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);\n\n  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));\n\n  /* Panel chrome */\n  --tps-panel-bg:       var(--panel-bg-color, transparent);\n  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);\n\n  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Font is INHERITED from Thymer's panel chrome (see components.css). */\n\n  --tps-fs-title:       18px;\n  --tps-fs-lede:        13px;\n  --tps-fs-section:     11px;\n  --tps-fs-hint:        12px;\n  --tps-fs-label:       13px;\n  --tps-fs-desc:        12px;\n  --tps-fs-body:        13px;\n  --tps-fs-value:       12px;\n  --tps-fs-button:      12px;\n  --tps-fs-list-header: 10px;\n\n  --tps-lh-tight:       1;\n  --tps-lh-snug:        1.2;\n  --tps-lh-base:        1.4;\n  --tps-lh-loose:       1.5;\n\n  --tps-fw-regular:     400;\n  --tps-fw-medium:      500;\n  --tps-fw-semibold:    600;\n  --tps-fw-bold:        700;\n\n  --tps-ls-section:     0.06em;\n  --tps-ls-list:        0.08em;\n  --tps-ls-title:       0;\n\n  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-space-1:        4px;\n  --tps-space-2:        8px;\n  --tps-space-3:        12px;\n  --tps-space-4:        16px;\n  --tps-space-5:        24px;\n  --tps-space-6:        32px;\n  --tps-space-7:        48px;\n\n  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-radius-sm:      4px;\n  --tps-radius-md:      6px;\n  --tps-radius-lg:      8px;\n  --tps-radius-pill:    999px;\n  --tps-radius-circle:  50%;\n\n  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);\n  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);\n  --tps-dur-fast:       80ms;\n  --tps-dur-base:       160ms;\n\n  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);\n\n  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-control-h-sm:   28px;\n  --tps-control-h-md:   32px;\n  --tps-input-w:        64px;\n  --tps-num-step-w:     28px;\n  --tps-swatch-size:    22px;\n  --tps-thumb-size:     16px;\n  --tps-track-h:        6px;\n\n  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);\n  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tps-panel {\n    --tps-dur-fast:     1ms;\n    --tps-dur-base:     1ms;\n  }\n}\n";

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el.setAttribute(k, v);
          }
        } else {
          el.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el, children);
    return el;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    return h("div", { class: cls }, ...children);
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready"
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null
      )
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      dataset: { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function button({ label, variant = "ghost", size = "sm", onClick, disabled }) {
    const cls = ["tps-button", `tps-button--${variant}`];
    if (size === "md") cls.push("tps-button--md");
    return h("button", {
      type: "button",
      class: cls.join(" "),
      disabled: !!disabled,
      onClick
    }, label);
  }
  __name(button, "button");

  // plugin.js
  var PLUGIN_VERSION = "1.0.0";
  var ROOT_CLASS = "plg-journal-day-shortcuts";
  var PANEL_TYPE = "journal-day-shortcuts-settings";
  var SETTINGS_STORAGE_PREFIX = "journal-day-shortcuts:settings:";
  var SWIPE_DIR_RATIO = 1.4;
  function numOr(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }
  __name(numOr, "numOr");
  var DEFAULTS = Object.freeze({
    enabled: true,
    prev: "Ctrl+[",
    next: "Ctrl+]",
    swipeEnabled: true,
    swipeInverted: false,
    swipeSpikeDelta: 25,
    // single wheel-event |deltaX| that fires a page change
    swipeBurstEndMs: 20,
    // silence required to release the gesture lock
    swipeShake: true,
    // master toggle for the post-commit feedback animation
    swipeZones: {
      // per-zone bespoke animation config
      tabsbar: { enabled: false, type: "nudge", duration: 250, amplitude: 10 },
      heading: { enabled: false, type: "nudge", duration: 250, amplitude: 10 },
      menubar: { enabled: false, type: "nudge", duration: 250, amplitude: 10 },
      body: { enabled: true, type: "nudge", duration: 250, amplitude: 10 }
    }
  });
  var ZONES = Object.freeze([
    { key: "tabsbar", selectors: [".panel-bar--tabsbar"], label: "Breadcrumb tabsbar", desc: ".panel-bar--tabsbar" },
    { key: "heading", selectors: [".heading-title-area"], label: "Date heading", desc: ".heading-title-area" },
    { key: "menubar", selectors: [".panel-menubar", ".id--h1-area"], label: "Nav menubar + date h1 area", desc: ".panel-menubar  +  .id--h1-area" },
    { key: "body", selectors: [".panel-body"], label: "Editor body", desc: ".panel-body" }
  ]);
  var ZONE_DEFAULT = Object.freeze({ enabled: false, type: "shake-x", duration: 250, amplitude: 10 });
  var FLICK_ANIM_TYPES = Object.freeze([
    "shake-x",
    "shake-y",
    "shake-xy",
    "pulse",
    "flash",
    "bounce",
    "wobble",
    "nudge",
    "rubberband"
  ]);
  function flickKeyframes(type, amp, dir) {
    const a = amp;
    switch (type) {
      case "shake-y":
        return [
          { offset: 0, transform: "translate3d(0, 0, 0)" },
          { offset: 0.18, transform: `translate3d(0, ${(-a).toFixed(2)}px, 0)` },
          { offset: 0.36, transform: `translate3d(0, ${(a * 0.75).toFixed(2)}px, 0)` },
          { offset: 0.54, transform: `translate3d(0, ${(-a * 0.5).toFixed(2)}px, 0)` },
          { offset: 0.72, transform: `translate3d(0, ${(a * 0.375).toFixed(2)}px, 0)` },
          { offset: 0.86, transform: `translate3d(0, ${(-a * 0.25).toFixed(2)}px, 0)` },
          { offset: 1, transform: "translate3d(0, 0, 0)" }
        ];
      case "shake-xy":
        return [
          { offset: 0, transform: "translate3d(0, 0, 0)" },
          { offset: 0.18, transform: `translate3d(${(-a).toFixed(2)}px, ${(a * 0.6).toFixed(2)}px, 0)` },
          { offset: 0.36, transform: `translate3d(${(a * 0.75).toFixed(2)}px, ${(-a * 0.45).toFixed(2)}px, 0)` },
          { offset: 0.54, transform: `translate3d(${(-a * 0.5).toFixed(2)}px, ${(a * 0.3).toFixed(2)}px, 0)` },
          { offset: 0.72, transform: `translate3d(${(a * 0.375).toFixed(2)}px, ${(-a * 0.2).toFixed(2)}px, 0)` },
          { offset: 0.86, transform: `translate3d(${(-a * 0.25).toFixed(2)}px, ${(a * 0.1).toFixed(2)}px, 0)` },
          { offset: 1, transform: "translate3d(0, 0, 0)" }
        ];
      case "pulse": {
        const s = 1 + Math.min(0.12, a * 5e-3);
        return [
          { offset: 0, transform: "scale(1)" },
          { offset: 0.5, transform: `scale(${s.toFixed(3)})` },
          { offset: 1, transform: "scale(1)" }
        ];
      }
      case "flash": {
        const dip = Math.max(0.1, Math.min(0.95, 1 - a * 0.05));
        return [
          { offset: 0, opacity: 1 },
          { offset: 0.5, opacity: dip.toFixed(3) },
          { offset: 1, opacity: 1 }
        ];
      }
      case "bounce":
        return [
          { offset: 0, transform: "translate3d(0, 0, 0)" },
          { offset: 0.4, transform: `translate3d(0, ${(-a).toFixed(2)}px, 0)` },
          { offset: 0.7, transform: `translate3d(0, ${(a * 0.35).toFixed(2)}px, 0)` },
          { offset: 1, transform: "translate3d(0, 0, 0)" }
        ];
      case "wobble": {
        const rot = Math.min(10, a * 0.5);
        return [
          { offset: 0, transform: "rotate(0deg)" },
          { offset: 0.25, transform: `rotate(${(-rot).toFixed(2)}deg)` },
          { offset: 0.5, transform: `rotate(${(rot * 0.6).toFixed(2)}deg)` },
          { offset: 0.75, transform: `rotate(${(-rot * 0.3).toFixed(2)}deg)` },
          { offset: 1, transform: "rotate(0deg)" }
        ];
      }
      case "nudge": {
        const push = (dir || 1) * a;
        return [
          { offset: 0, transform: "translate3d(0, 0, 0)" },
          { offset: 0.3, transform: `translate3d(${push.toFixed(2)}px, 0, 0)` },
          { offset: 1, transform: "translate3d(0, 0, 0)" }
        ];
      }
      case "rubberband": {
        const sx = 1 + Math.min(0.12, a * 5e-3);
        const sy = 1 - Math.min(0.08, a * 4e-3);
        return [
          { offset: 0, transform: "scale(1, 1)" },
          { offset: 0.3, transform: `scale(${sx.toFixed(3)}, ${sy.toFixed(3)})` },
          { offset: 0.6, transform: `scale(${(2 - sx).toFixed(3)}, ${(2 - sy).toFixed(3)})` },
          { offset: 1, transform: "scale(1, 1)" }
        ];
      }
      case "shake-x":
      default:
        return [
          { offset: 0, transform: "translate3d(0, 0, 0)" },
          { offset: 0.18, transform: `translate3d(${(-a).toFixed(2)}px, 0, 0)` },
          { offset: 0.36, transform: `translate3d(${(a * 0.75).toFixed(2)}px, 0, 0)` },
          { offset: 0.54, transform: `translate3d(${(-a * 0.5).toFixed(2)}px, 0, 0)` },
          { offset: 0.72, transform: `translate3d(${(a * 0.375).toFixed(2)}px, 0, 0)` },
          { offset: 0.86, transform: `translate3d(${(-a * 0.25).toFixed(2)}px, 0, 0)` },
          { offset: 1, transform: "translate3d(0, 0, 0)" }
        ];
    }
  }
  __name(flickKeyframes, "flickKeyframes");
  var MOD_KEYS = /* @__PURE__ */ new Set(["Control", "Shift", "Alt", "Meta"]);
  function eventToCombo(e) {
    if (MOD_KEYS.has(e.key)) return null;
    const parts = [];
    if (e.ctrlKey) parts.push("Ctrl");
    if (e.altKey) parts.push("Alt");
    if (e.shiftKey) parts.push("Shift");
    if (e.metaKey) parts.push("Meta");
    let key = e.key;
    if (key.length === 1) key = key.toUpperCase();
    parts.push(key);
    return parts.join("+");
  }
  __name(eventToCombo, "eventToCombo");
  function parseCombo(combo) {
    const parts = String(combo || "").split("+").map((p) => p.trim()).filter(Boolean);
    const out = { ctrl: false, alt: false, shift: false, meta: false, key: "" };
    for (const p of parts) {
      const lower = p.toLowerCase();
      if (lower === "ctrl" || lower === "control") out.ctrl = true;
      else if (lower === "alt" || lower === "option") out.alt = true;
      else if (lower === "shift") out.shift = true;
      else if (lower === "meta" || lower === "cmd" || lower === "command") out.meta = true;
      else out.key = p;
    }
    if (out.key.length === 1) out.key = out.key.toUpperCase();
    return out;
  }
  __name(parseCombo, "parseCombo");
  function comboMatches(e, m) {
    if (!m.key) return false;
    if (e.ctrlKey !== m.ctrl) return false;
    if (e.altKey !== m.alt) return false;
    if (e.shiftKey !== m.shift) return false;
    if (e.metaKey !== m.meta) return false;
    const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    return key === m.key;
  }
  __name(comboMatches, "comboMatches");
  function isEditableTarget(target) {
    if (!(target instanceof Element)) return false;
    const tag = target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (
      /** @type {HTMLElement} */
      target.isContentEditable
    ) return true;
    return false;
  }
  __name(isEditableTarget, "isEditableTarget");
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter.count({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    onLoad() {
      pingInstall("journal-day-shortcuts");
      pingActive("journal-day-shortcuts");
      this._handlerIds = [];
      this._panelEl = null;
      this._cmdPrev = null;
      this._cmdNext = null;
      this._cmdSettings = null;
      this._keyHandler = null;
      this._wheelHandler = null;
      this._locked = false;
      this._lockTimer = null;
      this._settings = this._loadSettings();
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(`
			.${ROOT_CLASS}-panel .tps-key-row {
				display: grid;
				grid-template-columns: 1fr auto;
				align-items: center;
				gap: var(--tps-space-3);
				padding: 6px 10px;
				margin: 0 -10px;
				border-radius: var(--tps-radius-md);
			}
			.${ROOT_CLASS}-panel .tps-key-row:hover { background: var(--tps-bg-hover); }
			.${ROOT_CLASS}-panel .tps-key-row-label {
				font-size: var(--tps-fs-label);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .tps-key-chip {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				min-width: 110px;
				height: var(--tps-control-h-sm);
				padding: 0 var(--tps-space-3);
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
				font-size: var(--tps-fs-button);
				color: var(--tps-text);
				background: var(--tps-bg-input);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				cursor: pointer;
				transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
				            background-color var(--tps-dur-fast) var(--tps-ease-out),
				            color var(--tps-dur-fast) var(--tps-ease-out);
			}
			.${ROOT_CLASS}-panel .tps-key-chip:hover { border-color: var(--tps-border); }
			.${ROOT_CLASS}-panel .tps-key-chip[data-capturing="true"] {
				background: var(--tps-accent-soft);
				border-color: var(--tps-accent);
				color: var(--tps-accent);
				outline: 2px solid var(--tps-accent);
				outline-offset: 2px;
			}
			.${ROOT_CLASS}-panel .tps-footer {
				display: flex;
				gap: var(--tps-space-2);
				margin-top: var(--tps-space-5);
			}
			.${ROOT_CLASS}-panel .tps-button--save {
				background: color-mix(in srgb, var(--tps-success) 18%, transparent);
				border-color: color-mix(in srgb, var(--tps-success) 55%, transparent);
				color: var(--tps-success);
			}
			.${ROOT_CLASS}-panel .tps-button--save:hover:not(:disabled) {
				background: color-mix(in srgb, var(--tps-success) 28%, transparent);
				border-color: var(--tps-success);
			}
			.${ROOT_CLASS}-panel .tps-button--save:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}
			.${ROOT_CLASS}-panel .jds-zone-row {
				display: grid;
				grid-template-columns: 1fr auto;
				column-gap: var(--tps-space-4);
				align-items: start;
				padding: 8px 10px;
				margin: 0 -10px;
				border-radius: var(--tps-radius-md);
				transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
			}
			.${ROOT_CLASS}-panel .jds-zone-row:hover { background: var(--tps-bg-hover); }
			.${ROOT_CLASS}-panel .jds-zone-left {
				display: grid;
				grid-template-columns: 18px 1fr;
				column-gap: var(--tps-space-3);
				row-gap: 2px;
				align-items: start;
				min-height: 60px;
			}
			.${ROOT_CLASS}-panel .jds-zone-left > input[type="checkbox"] {
				grid-column: 1; grid-row: 1;
				width: 16px;
				height: 16px;
				margin: 3px 0 0 0;
				accent-color: var(--tps-accent);
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .jds-zone-label {
				grid-column: 2; grid-row: 1;
				font-size: var(--tps-fs-label);
				font-weight: var(--tps-fw-medium);
				color: var(--tps-text);
				line-height: var(--tps-lh-base);
			}
			.${ROOT_CLASS}-panel .jds-zone-desc {
				grid-column: 2; grid-row: 2;
				font-size: var(--tps-fs-hint);
				color: var(--tps-text-muted);
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
			}
			.${ROOT_CLASS}-panel .jds-zone-right {
				display: flex;
				flex-direction: column;
				gap: 6px;
				align-items: end;
			}
			.${ROOT_CLASS}-panel .jds-zone-control {
				display: inline-grid;
				grid-template-columns: 70px auto auto;
				column-gap: 6px;
				align-items: center;
				font-size: var(--tps-fs-hint);
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .jds-zone-control > .jds-mini-label {
				text-align: right;
			}
			.${ROOT_CLASS}-panel .jds-zone-control input,
			.${ROOT_CLASS}-panel .jds-zone-control select {
				font-family: inherit;
				font-size: var(--tps-fs-button);
				color: var(--tps-text);
				background: var(--tps-bg-input);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				height: var(--tps-control-h-sm);
				padding: 0 var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .jds-zone-control input {
				width: 70px;
				text-align: center;
				font-variant-numeric: tabular-nums;
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
				-moz-appearance: textfield;
			}
			.${ROOT_CLASS}-panel .jds-zone-control input::-webkit-outer-spin-button,
			.${ROOT_CLASS}-panel .jds-zone-control input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
			.${ROOT_CLASS}-panel .jds-zone-control select { width: 130px; }
			.${ROOT_CLASS}-panel .jds-zone-control input:focus,
			.${ROOT_CLASS}-panel .jds-zone-control select:focus {
				outline: none;
				border-color: var(--tps-accent);
			}
			.${ROOT_CLASS}-panel .jds-zone-control .jds-mini-unit {
				font-size: var(--tps-fs-hint);
				color: var(--tps-text-muted);
			}
		`);
      this._cmdPrev = this.ui.addCommandPaletteCommand({
        label: "Journal: Previous Day",
        icon: "arrow-left",
        onSelected: /* @__PURE__ */ __name(() => this._step(-1), "onSelected")
      });
      this._cmdNext = this.ui.addCommandPaletteCommand({
        label: "Journal: Next Day",
        icon: "arrow-right",
        onSelected: /* @__PURE__ */ __name(() => this._step(1), "onSelected")
      });
      this._cmdSettings = this.ui.addCommandPaletteCommand({
        label: "Plugin: Journal Day Shortcuts",
        icon: "calendar",
        onSelected: /* @__PURE__ */ __name(() => this._openSettings(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Journal Day Shortcuts");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderSettings();
      });
      this._installKeyListener();
      this._installSwipeListener();
    }
    onUnload() {
      this._removeKeyListener();
      this._removeSwipeListener();
      for (const id of this._handlerIds || []) this.events.off(id);
      this._handlerIds = [];
      if (this._cmdPrev) {
        this._cmdPrev.remove();
        this._cmdPrev = null;
      }
      if (this._cmdNext) {
        this._cmdNext.remove();
        this._cmdNext = null;
      }
      if (this._cmdSettings) {
        this._cmdSettings.remove();
        this._cmdSettings = null;
      }
      this._panelEl = null;
    }
    // ── navigation ─────────────────────────────────────────────────────
    _step(delta) {
      const action = delta < 0 ? "plugin.journal_previous_day" : "plugin.journal_next_day";
      const panelApi = this.ui.getActivePanel();
      const panelEl = panelApi?.getElement?.();
      let btn = null;
      if (panelEl) {
        btn = panelEl.querySelector(`button[data-action="${action}"]`);
      }
      if (!btn) {
        const candidates = Array.from(document.querySelectorAll(`button[data-action="${action}"]`));
        btn = /** @type {HTMLButtonElement | null} */
        candidates.find((el) => {
          const rect = el.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        }) ?? null;
      }
      if (!btn) {
        try {
          this.ui.addToaster({
            title: "Open a journal page first",
            dismissible: true,
            autoDestroyTime: 2500
          });
        } catch {
        }
        return;
      }
      btn.click();
    }
    // ── key listener ───────────────────────────────────────────────────
    _installKeyListener() {
      if (!this._settings.enabled || this._keyHandler) return;
      this._keyHandler = (e) => this._onKeydown(e);
      window.addEventListener("keydown", this._keyHandler, true);
    }
    _removeKeyListener() {
      if (!this._keyHandler) return;
      window.removeEventListener("keydown", this._keyHandler, true);
      this._keyHandler = null;
    }
    /** @param {KeyboardEvent} e */
    _onKeydown(e) {
      if (isEditableTarget(e.target)) return;
      const prev = parseCombo(this._settings.prev);
      const next = parseCombo(this._settings.next);
      if (comboMatches(e, prev)) {
        e.preventDefault();
        e.stopPropagation();
        this._step(-1);
      } else if (comboMatches(e, next)) {
        e.preventDefault();
        e.stopPropagation();
        this._step(1);
      }
    }
    // ── settings persistence ───────────────────────────────────────────
    //
    // Thymer's saveConfiguration() drops unknown top-level keys; only
    // `custom` survives. We also write to localStorage so settings survive
    // any Thymer-side reset of the plugin config.
    _storageKey() {
      const ws = typeof this.getWorkspaceGuid === "function" ? this.getWorkspaceGuid() : "default";
      return SETTINGS_STORAGE_PREFIX + ws;
    }
    _loadSettings() {
      let stored = null;
      try {
        const raw = localStorage.getItem(this._storageKey());
        if (raw) stored = JSON.parse(raw);
      } catch {
      }
      const conf = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
      const cust = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
      const merged = { ...DEFAULTS, ...conf, ...cust, ...stored || {} };
      const zones = merged.swipeZones && typeof merged.swipeZones === "object" ? merged.swipeZones : {};
      const mergedZones = {};
      for (const z of ZONES) {
        const dflt = DEFAULTS.swipeZones && DEFAULTS.swipeZones[z.key] || ZONE_DEFAULT;
        mergedZones[z.key] = { ...ZONE_DEFAULT, ...dflt, ...zones[z.key] || {} };
      }
      merged.swipeZones = mergedZones;
      return merged;
    }
    async _persistSettings() {
      try {
        localStorage.setItem(this._storageKey(), JSON.stringify(this._settings));
      } catch {
      }
      try {
        const conf = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
        const next = { ...conf, custom: { ...conf.custom || {}, ...this._settings } };
        if (typeof this.saveConfiguration === "function") await this.saveConfiguration(next);
      } catch {
      }
    }
    // ── swipe listener (trackpad two-finger horizontal flick) ──────────
    //
    // Spike + lock: a single wheel event with |deltaX| >= swipeSpikeDelta
    // commits a day-change immediately, with NO animation. After firing,
    // a hard lockout of swipeLockMs prevents subsequent inertia events
    // from re-triggering until the trackpad gesture truly ends.
    _installSwipeListener() {
      if (!this._settings.swipeEnabled || this._wheelHandler) return;
      this._wheelHandler = (e) => this._onWheel(e);
      window.addEventListener("wheel", this._wheelHandler, { capture: true, passive: false });
    }
    _removeSwipeListener() {
      if (this._lockTimer) {
        clearTimeout(this._lockTimer);
        this._lockTimer = null;
      }
      this._locked = false;
      if (!this._wheelHandler) return;
      window.removeEventListener("wheel", this._wheelHandler, { capture: true });
      this._wheelHandler = null;
    }
    // Cursor-driven journal-panel detection: walks up from the wheel event's
    // own target (the element directly under the cursor when the wheel
    // fired) and returns the enclosing `.panel`, but only if that panel is
    // a journal. Hovering over any other panel — or over chrome outside any
    // panel — returns null, so swipe never fires there.
    //
    // Journal marker: the prev/next-day view-buttons (data-action
    // "plugin.journal_previous_day" / "plugin.journal_next_day"). This is the
    // canonical, name-INDEPENDENT signal — and the exact buttons _step()
    // clicks, so a passing gate guarantees navigation will work. We do NOT
    // key off `.panel-bar[data-plugin="Journal"]`: that attribute reflects the
    // collection's display NAME, which varies per workspace (e.g. a journal
    // renamed "Calendar" carries data-plugin="Calendar"), silently disabling
    // swipe. The legacy attribute marker is kept only as a fallback.
    _journalPanelUnder(e) {
      const t = (
        /** @type {Element|null} */
        e && e.target
      );
      if (!t || typeof t.closest !== "function") return null;
      const pane = (
        /** @type {HTMLElement|null} */
        t.closest(".panel")
      );
      if (!pane) return null;
      if (pane.querySelector('button[data-action^="plugin.journal_"]')) return pane;
      if (pane.querySelector('.panel-bar[data-plugin="Journal"]')) return pane;
      return null;
    }
    /** @param {WheelEvent} e */
    _onWheel(e) {
      if (!this._settings.swipeEnabled) return;
      const burstEndMs = numOr(this._settings.swipeBurstEndMs, DEFAULTS.swipeBurstEndMs);
      if (this._locked) {
        e.preventDefault();
        this._armUnlock(burstEndMs);
        return;
      }
      const ax = Math.abs(e.deltaX);
      const ay = Math.abs(e.deltaY);
      if (ax < 1 || ax < ay * SWIPE_DIR_RATIO) return;
      const pane = this._journalPanelUnder(e);
      if (!pane) return;
      const spike = numOr(this._settings.swipeSpikeDelta, DEFAULTS.swipeSpikeDelta);
      if (ax < spike) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const dx = this._settings.swipeInverted ? -e.deltaX : e.deltaX;
      const dir = dx > 0 ? 1 : -1;
      this._locked = true;
      this._armUnlock(burstEndMs);
      this._step(dir);
      if (this._settings.swipeShake) this._playFlickAnim(pane, dir);
    }
    _armUnlock(quietMs) {
      if (this._lockTimer) clearTimeout(this._lockTimer);
      this._lockTimer = setTimeout(() => {
        this._locked = false;
        this._lockTimer = null;
      }, Math.max(0, quietMs));
    }
    // Post-commit feedback animation. Each zone has its own toggle + style
    // + duration + amplitude. WAAPI so we never leave inline styles behind.
    // `.panel-header-scrim` and the `.panel-scroller-y` root are never
    // touched — only the explicitly-toggled zones from ZONES.
    _playFlickAnim(pane, dir) {
      if (!pane) return;
      const zones = this._settings.swipeZones && typeof this._settings.swipeZones === "object" ? this._settings.swipeZones : {};
      for (const z of ZONES) {
        const cfg = zones[z.key];
        if (!cfg || !cfg.enabled) continue;
        const duration = numOr(cfg.duration, ZONE_DEFAULT.duration);
        const amplitude = numOr(cfg.amplitude, ZONE_DEFAULT.amplitude);
        if (duration <= 0 || amplitude === 0) continue;
        const type = FLICK_ANIM_TYPES.includes(cfg.type) ? cfg.type : ZONE_DEFAULT.type;
        const frames = flickKeyframes(type, amplitude, dir);
        if (!frames || !frames.length) continue;
        const opts = {
          duration,
          easing: "cubic-bezier(0.36, 0.07, 0.19, 0.97)",
          fill: "none"
        };
        for (const sel of z.selectors) {
          const el = pane.querySelector(sel);
          if (!el || typeof el.animate !== "function") continue;
          try {
            el.animate(frames, opts);
          } catch {
          }
        }
      }
    }
    // ── settings panel ─────────────────────────────────────────────────
    async _openSettings() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const p = await this.ui.createPanel();
      if (p) p.navigateToCustomType(PANEL_TYPE);
    }
    _renderSettings() {
      if (!this._panelEl) return;
      const draft = {
        ...this._settings,
        swipeZones: JSON.parse(JSON.stringify(this._settings.swipeZones || DEFAULTS.swipeZones))
      };
      const conf = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
      let saveBtn = null;
      const numKeys = ["swipeSpikeDelta", "swipeBurstEndMs"];
      const markDirty = /* @__PURE__ */ __name(() => {
        let dirty = draft.prev !== this._settings.prev || draft.next !== this._settings.next || draft.enabled !== this._settings.enabled || !!draft.swipeEnabled !== !!this._settings.swipeEnabled || !!draft.swipeInverted !== !!this._settings.swipeInverted || !!draft.swipeShake !== !!this._settings.swipeShake || JSON.stringify(draft.swipeZones) !== JSON.stringify(this._settings.swipeZones);
        if (!dirty) {
          for (const k of numKeys) {
            if (Number(draft[k]) !== Number(this._settings[k])) {
              dirty = true;
              break;
            }
          }
        }
        if (saveBtn) saveBtn.disabled = !dirty;
      }, "markDirty");
      const keyRow = /* @__PURE__ */ __name((which, labelText) => {
        const row = document.createElement("div");
        row.className = "tps-key-row";
        const label = document.createElement("div");
        label.className = "tps-key-row-label";
        label.textContent = labelText;
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "tps-key-chip";
        chip.textContent = draft[which];
        chip.setAttribute("aria-label", `${labelText} \u2014 click to rebind`);
        let capturing = false;
        let onCaptureKey = null;
        const stopCapturing = /* @__PURE__ */ __name((commit) => {
          if (!capturing) return;
          capturing = false;
          chip.removeAttribute("data-capturing");
          if (onCaptureKey) {
            window.removeEventListener("keydown", onCaptureKey, true);
            onCaptureKey = null;
          }
          if (!commit) chip.textContent = draft[which];
        }, "stopCapturing");
        chip.addEventListener("click", () => {
          if (capturing) {
            stopCapturing(false);
            return;
          }
          capturing = true;
          chip.setAttribute("data-capturing", "true");
          chip.textContent = "Press a key\u2026";
          onCaptureKey = /* @__PURE__ */ __name((ev) => {
            if (ev.key === "Escape") {
              ev.preventDefault();
              ev.stopPropagation();
              stopCapturing(false);
              return;
            }
            const combo = eventToCombo(ev);
            if (!combo) return;
            ev.preventDefault();
            ev.stopPropagation();
            draft[which] = combo;
            chip.textContent = combo;
            stopCapturing(true);
            markDirty();
          }, "onCaptureKey");
          window.addEventListener("keydown", onCaptureKey, true);
        });
        row.append(label, chip);
        return row;
      }, "keyRow");
      const enabledOpt = optionRow({
        type: "checkbox",
        name: "enabled",
        label: "Enable keyboard shortcuts",
        desc: "When off, the command palette entries still work but the keystrokes are ignored.",
        checked: draft.enabled,
        onChange: /* @__PURE__ */ __name((e) => {
          draft.enabled = !!/** @type {HTMLInputElement} */
          e.target.checked;
          markDirty();
        }, "onChange")
      });
      const swipeEnabledOpt = optionRow({
        type: "checkbox",
        name: "swipeEnabled",
        label: "Enable trackpad swipe",
        desc: "Two-finger horizontal flick on a journal page navigates between days. Vertical scrolling is unaffected.",
        checked: draft.swipeEnabled,
        onChange: /* @__PURE__ */ __name((e) => {
          draft.swipeEnabled = !!/** @type {HTMLInputElement} */
          e.target.checked;
          markDirty();
        }, "onChange")
      });
      const swipeInvertedOpt = optionRow({
        type: "checkbox",
        name: "swipeInverted",
        label: "Invert swipe direction",
        desc: "Off: swipe right \u2192 next day (natural scroll). On: swipe right \u2192 previous day (page-turn metaphor).",
        checked: draft.swipeInverted,
        onChange: /* @__PURE__ */ __name((e) => {
          draft.swipeInverted = !!/** @type {HTMLInputElement} */
          e.target.checked;
          markDirty();
        }, "onChange")
      });
      const numberRow = /* @__PURE__ */ __name((key, labelText, unitText, hint) => {
        const row = document.createElement("div");
        row.className = "tps-key-row";
        const labelEl = document.createElement("div");
        labelEl.className = "tps-key-row-label";
        labelEl.textContent = labelText;
        if (hint) labelEl.title = hint;
        const right = document.createElement("div");
        right.style.display = "inline-flex";
        right.style.alignItems = "center";
        right.style.gap = "6px";
        const input = document.createElement("input");
        input.type = "number";
        input.value = String(draft[key]);
        input.className = "tps-num-input";
        input.style.width = "110px";
        input.setAttribute("aria-label", labelText);
        const live = /* @__PURE__ */ __name(() => {
          const n = Number(input.value);
          if (Number.isFinite(n)) draft[key] = n;
          markDirty();
        }, "live");
        const finalize = /* @__PURE__ */ __name((v) => {
          const n = Number(v);
          draft[key] = Number.isFinite(n) ? n : DEFAULTS[key];
          input.value = String(draft[key]);
          markDirty();
        }, "finalize");
        input.addEventListener("input", live);
        input.addEventListener("change", () => finalize(input.value));
        input.addEventListener("keydown", (ev) => {
          const k = ev.key;
          if (k !== "ArrowUp" && k !== "ArrowDown") return;
          ev.preventDefault();
          const cur = Number(input.value) || 0;
          const step = ev.shiftKey ? 100 : 10;
          finalize(k === "ArrowUp" ? cur + step : cur - step);
        });
        const unit = document.createElement("span");
        unit.textContent = unitText;
        unit.style.fontSize = "var(--tps-fs-hint)";
        unit.style.color = "var(--tps-text-muted)";
        right.append(input, unit);
        row.append(labelEl, right);
        return row;
      }, "numberRow");
      const swipeShakeOpt = optionRow({
        type: "checkbox",
        name: "swipeShake",
        label: "Animate on commit",
        desc: "Master toggle for the post-commit feedback animation. Off = no visual effect on swipe (page still changes).",
        checked: draft.swipeShake,
        onChange: /* @__PURE__ */ __name((e) => {
          draft.swipeShake = !!/** @type {HTMLInputElement} */
          e.target.checked;
          markDirty();
        }, "onChange")
      });
      const zoneRow = /* @__PURE__ */ __name((z) => {
        if (!draft.swipeZones[z.key]) draft.swipeZones[z.key] = { ...ZONE_DEFAULT };
        const cfg = draft.swipeZones[z.key];
        const row = document.createElement("div");
        row.className = "jds-zone-row";
        const left = document.createElement("label");
        left.className = "jds-zone-left";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = !!cfg.enabled;
        cb.addEventListener("change", () => {
          cfg.enabled = cb.checked;
          markDirty();
        });
        const labelEl = document.createElement("div");
        labelEl.className = "jds-zone-label";
        labelEl.textContent = z.label;
        const descEl = document.createElement("div");
        descEl.className = "jds-zone-desc";
        descEl.textContent = z.desc;
        left.append(cb, labelEl, descEl);
        const right = document.createElement("div");
        right.className = "jds-zone-right";
        const styleCtl = document.createElement("div");
        styleCtl.className = "jds-zone-control";
        const styleLab = document.createElement("span");
        styleLab.className = "jds-mini-label";
        styleLab.textContent = "style";
        const styleSel = document.createElement("select");
        styleSel.setAttribute("aria-label", `${z.label} animation style`);
        for (const t of FLICK_ANIM_TYPES) {
          const opt = document.createElement("option");
          opt.value = t;
          opt.textContent = t;
          if (t === cfg.type) opt.selected = true;
          styleSel.appendChild(opt);
        }
        styleSel.addEventListener("change", () => {
          cfg.type = styleSel.value;
          markDirty();
        });
        styleCtl.append(styleLab, styleSel);
        const numCtl = /* @__PURE__ */ __name((label, unit, key, fallback) => {
          const ctl = document.createElement("div");
          ctl.className = "jds-zone-control";
          const lab = document.createElement("span");
          lab.className = "jds-mini-label";
          lab.textContent = label;
          const input = document.createElement("input");
          input.type = "number";
          input.value = String(cfg[key]);
          input.setAttribute("aria-label", `${z.label} ${label}`);
          const live = /* @__PURE__ */ __name(() => {
            const n = Number(input.value);
            if (Number.isFinite(n)) cfg[key] = n;
            markDirty();
          }, "live");
          const finalize = /* @__PURE__ */ __name((v) => {
            const n = Number(v);
            cfg[key] = Number.isFinite(n) ? n : fallback;
            input.value = String(cfg[key]);
            markDirty();
          }, "finalize");
          input.addEventListener("input", live);
          input.addEventListener("change", () => finalize(input.value));
          input.addEventListener("keydown", (ev) => {
            const k = ev.key;
            if (k !== "ArrowUp" && k !== "ArrowDown") return;
            ev.preventDefault();
            const cur = Number(input.value) || 0;
            const step = ev.shiftKey ? 100 : 10;
            finalize(k === "ArrowUp" ? cur + step : cur - step);
          });
          const unitEl = document.createElement("span");
          unitEl.className = "jds-mini-unit";
          unitEl.textContent = unit;
          ctl.append(lab, input, unitEl);
          return ctl;
        }, "numCtl");
        const durCtl = numCtl("duration", "ms", "duration", ZONE_DEFAULT.duration);
        const ampCtl = numCtl("amplitude", "px", "amplitude", ZONE_DEFAULT.amplitude);
        right.append(styleCtl, durCtl, ampCtl);
        row.append(left, right);
        return row;
      }, "zoneRow");
      const zoneRows = ZONES.map(zoneRow);
      const swipeSpikeRow = numberRow("swipeSpikeDelta", "Flick sensitivity", "px", "Single wheel-event horizontal magnitude that triggers a page change. Lower = easier to trigger.");
      const swipeBurstEndRow = numberRow("swipeBurstEndMs", "Burst-end gap (silence)", "ms", "How long the trackpad must be silent after a commit before the next flick can fire. Lower = snappier rapid-fire, but easier for inertia to double-trigger.");
      const footer = document.createElement("div");
      footer.className = "tps-footer";
      saveBtn = button({
        label: "Save Settings",
        variant: "ghost",
        size: "md",
        onClick: /* @__PURE__ */ __name(async () => {
          this._settings = {
            ...this._settings,
            ...draft,
            swipeZones: JSON.parse(JSON.stringify(draft.swipeZones))
          };
          await this._persistSettings();
          this._removeKeyListener();
          this._installKeyListener();
          this._removeSwipeListener();
          this._installSwipeListener();
          markDirty();
          try {
            this.ui.addToaster({
              title: "Journal Day Shortcuts saved",
              dismissible: true,
              autoDestroyTime: 2e3
            });
          } catch {
          }
        }, "onClick")
      });
      saveBtn.classList.add("tps-button--save");
      saveBtn.disabled = true;
      const resetBtn = button({
        label: "Reset to defaults",
        variant: "ghost",
        size: "md",
        onClick: /* @__PURE__ */ __name(async () => {
          try {
            localStorage.removeItem(this._storageKey());
          } catch {
          }
          this._settings = { ...DEFAULTS };
          try {
            const conf2 = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
            if (typeof this.saveConfiguration === "function") {
              await this.saveConfiguration({ ...conf2, custom: { ...DEFAULTS } });
            }
          } catch {
          }
          this._removeKeyListener();
          this._installKeyListener();
          this._removeSwipeListener();
          this._installSwipeListener();
          try {
            this.ui.addToaster({ title: "Journal Day Shortcuts reset", dismissible: true, autoDestroyTime: 2e3 });
          } catch {
          }
          this._renderSettings();
        }, "onClick")
      });
      const closeBtn = button({
        label: "Close",
        variant: "ghost",
        size: "md",
        onClick: /* @__PURE__ */ __name(() => {
          const p = this.ui.getActivePanel();
          try {
            p?.close?.();
          } catch {
          }
        }, "onClick")
      });
      footer.append(saveBtn, resetBtn, closeBtn);
      this._panelEl.replaceChildren(panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
        pluginHeaderFromConfig(conf, { version: PLUGIN_VERSION }),
        section({
          label: "Shortcuts",
          hint: "Click a binding and press the desired key combination. Press Escape to cancel.",
          body: [
            keyRow("prev", "Previous day"),
            keyRow("next", "Next day")
          ]
        }),
        section({
          label: "Behavior",
          body: [enabledOpt]
        }),
        section({
          label: "Trackpad swipe",
          hint: "Two-finger horizontal flick on a journal page changes the day immediately. The lockout uses silence-detection \u2014 as soon as your trackpad goes quiet, the next flick is recognised, but inertia from the previous flick can't double-trigger.",
          body: [
            swipeEnabledOpt,
            swipeInvertedOpt,
            swipeSpikeRow,
            swipeBurstEndRow
          ]
        }),
        section({
          label: "Animation feedback",
          hint: "Per-zone animation that fires after every commit. Each zone has its own toggle, style, duration, and amplitude. .panel-header-scrim and the panel-scroller root are never touched. Master toggle below disables everything at once.",
          body: [
            swipeShakeOpt,
            ...zoneRows
          ]
        }),
        footer
      ]));
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
