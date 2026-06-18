import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

// ─── EmailJS Setup ────────────────────────────────────────────────────────────
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const now = () =>
  new Date().toLocaleString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit", hour12: true,
  });

const sendMail = async (params) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      params
    );
    return true;
  } catch {
    return false;
  }
};

// Wire nav link: click → close popup → open another
const onLink = (id, fn) =>
  document.getElementById(id)?.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.close();
    fn();
  });

// Show/clear inline error
const showErr = (el, msg) => { el.textContent = msg; el.classList.add("show"); };
const clearErr = (el) => el.classList.remove("show");

// Validate email format
const isEmail = (v) => /^\S+@\S+\.\S+$/.test(v);

// Loading / success / error feedback popups
const loadingPopup = (title = "Sending...") =>
  Swal.fire({
    ...base, showCloseButton: false, allowOutsideClick: false, allowEscapeKey: false,
    html: `<div class="nx-pop-card nx-success">
      <div class="nx-loader"></div>
      <h2 class="nx-pop-title">${title}</h2>
      <p class="nx-pop-sub">Please wait a moment...</p>
    </div>`,
  });

const feedbackPopup = (ok, title, text) =>
  Swal.fire({
    ...base, timer: ok ? 2400 : 3000, showCloseButton: false,
    html: `<div class="nx-pop-card nx-success">
      <div class="nx-success-ring" ${ok ? "" : `style="background:rgba(220,38,38,0.12)"`}>
        <svg viewBox="0 0 52 52">
          <circle cx="26" cy="26" r="24" ${ok ? "" : `style="stroke:#dc2626"`}/>
          ${ok
            ? `<path d="M14 27l8 8 16-18"/>`
            : `<path d="M18 18l16 16M34 18l-16 16" style="stroke:#dc2626;fill:none;stroke-width:3;stroke-linecap:round"/>`
          }
        </svg>
      </div>
      <h2 class="nx-pop-title">${title}</h2>
      <p class="nx-pop-sub">${text}</p>
    </div>`,
  });

// Submit helper: shows loading → sends mail → shows result
const handleSubmit = async ({ loadingMsg, successMsg, successSub, failMsg, failSub, mailParams }) => {
  loadingPopup(loadingMsg);
  const ok = await sendMail({ ...mailParams, time: now() });
  feedbackPopup(ok, ok ? successMsg : failMsg, ok ? successSub : failSub);
};

// ─── SVG Snippets ─────────────────────────────────────────────────────────────
const arrowSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;
const eyeSvg   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`;

const icons = {
  mail:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  lock:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>`,
  user:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01"/></svg>`,
  sparkle:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.4L19.2 9l-5.4 1.8L12 16l-1.8-5.2L4.8 9l5.4-1.6L12 2z"/></svg>`,
  shield:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="m9 12 2 2 4-4"/></svg>`,
  google:   `<svg viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1S8.7 6 12 6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.5 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z"/></svg>`,
  github:   `<svg viewBox="0 0 24 24" fill="#0f172a"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.55 1.04 1.55 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.36-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`,
};

// ─── UI Builders ──────────────────────────────────────────────────────────────
const pwdToggle = (target) =>
  `<button type="button" class="nx-pwd-toggle" data-target="${target}">${eyeSvg}</button>`;

const field = (id, type, label, placeholder, icon, extra = "") => `
  <label class="nx-field" for="${id}">
    <span class="nx-field-label">${label}</span>
    <span class="nx-field-wrap">
      <span class="nx-field-icon">${icon}</span>
      <input id="${id}" type="${type}" placeholder="${placeholder}" autocomplete="off" />
      ${extra}
    </span>
  </label>`;

const head = (badge, title, sub, icon) => `
  <div class="nx-pop-head">
    <div class="nx-pop-orbs">
      <span class="nx-orb nx-orb-1"></span>
      <span class="nx-orb nx-orb-2"></span>
      <span class="nx-orb nx-orb-3"></span>
    </div>
    <div class="nx-pop-icon">${icon}</div>
    <div class="nx-pop-badge">${icons.sparkle}<span>${badge}</span></div>
    <h2 class="nx-pop-title">${title}</h2>
    <p class="nx-pop-sub">${sub}</p>
  </div>`;

const submitBtn = (label) =>
  `<button type="submit" class="nx-cta"><span>${label}</span>${arrowSvg}</button>`;

const socialRow = `
  <div class="nx-divider"><span>or continue with</span></div>
  <div class="nx-social-row">
    <button type="button" class="nx-social">${icons.google}<span>Google</span></button>
    <button type="button" class="nx-social">${icons.github}<span>GitHub</span></button>
  </div>`;

const footLink = (text, linkText, id) =>
  `<p class="nx-foot-text">${text} <a class="nx-link" id="${id}" href="#">${linkText}</a></p>`;

// ─── Base Swal Config ─────────────────────────────────────────────────────────
const base = {
  showConfirmButton: false,
  showCloseButton: true,
  width: 460,
  padding: 0,
  background: "transparent",
  backdrop: "rgba(15, 23, 42, 0.55)",
  customClass: { popup: "nx-pop", htmlContainer: "nx-pop-html", closeButton: "nx-pop-close" },
  showClass: { popup: "nx-anim-in" },
  hideClass: { popup: "nx-anim-out" },
};

const wirePasswordToggles = () =>
  document.querySelectorAll(".nx-pwd-toggle").forEach((btn) =>
    btn.addEventListener("click", () => {
      const t = document.getElementById(btn.dataset.target);
      if (!t) return;
      t.type = t.type === "password" ? "text" : "password";
      btn.classList.toggle("on");
    })
  );

// ─── Popups ───────────────────────────────────────────────────────────────────
export const openLoginPopup = () =>
  Swal.fire({
    ...base,
    html: `
      <div class="nx-pop-card">
        ${head("Welcome back", "Sign in to Nexora", "Access your enterprise workspace", icons.shield)}
        <form id="nx-login-form" class="nx-pop-body" novalidate>
          ${field("login-email", "email", "Work email", "you@company.com", icons.mail)}
          ${field("login-password", "password", "Password", "Enter your password", icons.lock, pwdToggle("login-password"))}
          <div class="nx-row-between">
            <label class="nx-check"><input type="checkbox" /><span>Remember me</span></label>
            <a class="nx-link" id="forgot-link" href="#">Forgot password?</a>
          </div>
          <div class="nx-error" id="nx-login-error"></div>
          ${submitBtn("Sign in")}
          ${socialRow}
          ${footLink("New to Nexora?", "Create an account", "goto-signup")}
        </form>
      </div>`,
    didOpen: () => {
      wirePasswordToggles();
      onLink("forgot-link",  openForgotPasswordPopup);
      onLink("goto-signup",  openSignupPopup);

      const form = document.getElementById("nx-login-form");
      const err  = document.getElementById("nx-login-error");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email    = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;

        if (!email || !password) return showErr(err, "Please enter email and password");
        if (!isEmail(email))     return showErr(err, "Please enter a valid email");
        clearErr(err);

        await handleSubmit({
          loadingMsg:  "Signing you in...",
          successMsg:  "Welcome back 👋",
          successSub:  "You're signed in to Nexora Systems",
          failMsg:     "Sign in failed ❌",
          failSub:     "Something went wrong. Please try again.",
          mailParams:  { name: email.split("@")[0], message: `Login request from ${email}` },
        });
      });
    },
  });

export const openStartPopup = () =>
  Swal.fire({
    ...base,
    html: `
      <div class="nx-pop-card">
        ${head("Get started", "Build with Nexora", "Tell us about you — we'll set up your workspace", icons.sparkle)}
        <form id="nx-start-form" class="nx-pop-body" novalidate>
          ${field("start-name",    "text",  "Full name",   "John Doe",       icons.user)}
          ${field("start-email",   "email", "Work email",  "john@company.com", icons.mail)}
          ${field("start-company", "text",  "Company",     "Acme Inc.",      icons.building)}
          <div class="nx-error" id="nx-start-error"></div>
          ${submitBtn("Create workspace")}
          ${socialRow}
          ${footLink("Already have an account?", "Sign in", "start-goto-login")}
        </form>
      </div>`,
    didOpen: () => {
      onLink("start-goto-login", openLoginPopup);

      const form = document.getElementById("nx-start-form");
      const err  = document.getElementById("nx-start-error");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name    = document.getElementById("start-name").value.trim();
        const email   = document.getElementById("start-email").value.trim();
        const company = document.getElementById("start-company").value.trim();

        if (!name || !email || !company) return showErr(err, "Please fill all the fields");
        if (!isEmail(email))             return showErr(err, "Please enter a valid email");
        clearErr(err);

        await handleSubmit({
          loadingMsg:  "Creating your workspace...",
          successMsg:  "Request submitted 🚀",
          successSub:  "Our team will reach out within 24 hours",
          failMsg:     "Submission failed ❌",
          failSub:     "Something went wrong. Please try again.",
          mailParams:  { name, message: `📧 Email: ${email}\n🏢 Company: ${company}\n📝 New workspace request` },
        });
      });
    },
  });

export const openSignupPopup = () =>
  Swal.fire({
    ...base,
    html: `
      <div class="nx-pop-card">
        ${head("Join Nexora", "Create your account", "Get started with enterprise workspace", icons.sparkle)}
        <form id="nx-signup-form" class="nx-pop-body" novalidate>
          ${field("signup-name",    "text",     "Full name",        "John Doe",              icons.user)}
          ${field("signup-email",   "email",    "Work email",       "john@company.com",      icons.mail)}
          ${field("signup-password","password", "Password",         "Create a strong password", icons.lock, pwdToggle("signup-password"))}
          ${field("signup-confirm", "password", "Confirm password", "Repeat your password",  icons.lock, pwdToggle("signup-confirm"))}
          <div class="nx-error" id="nx-signup-error"></div>
          ${submitBtn("Create account")}
          ${socialRow}
          ${footLink("Already have an account?", "Sign in", "goto-login")}
        </form>
      </div>`,
    didOpen: () => {
      wirePasswordToggles();
      onLink("goto-login", openLoginPopup);

      const form = document.getElementById("nx-signup-form");
      const err  = document.getElementById("nx-signup-error");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name    = document.getElementById("signup-name").value.trim();
        const email   = document.getElementById("signup-email").value.trim();
        const pass    = document.getElementById("signup-password").value;
        const confirm = document.getElementById("signup-confirm").value;

        if (!name || !email || !pass || !confirm) return showErr(err, "Please fill all fields");
        if (!isEmail(email))      return showErr(err, "Please enter a valid email");
        if (pass.length < 6)      return showErr(err, "Password must be at least 6 characters");
        if (pass !== confirm)     return showErr(err, "Passwords do not match");
        clearErr(err);

        await handleSubmit({
          loadingMsg:  "Creating your account...",
          successMsg:  "Account created! 🎉",
          successSub:  "Welcome to Nexora. Your workspace is being prepared.",
          failMsg:     "Failed ❌",
          failSub:     "Could not create account. Try again.",
          mailParams:  { name, message: `New signup!\n📧 Email: ${email}` },
        });
      });
    },
  });

export const openForgotPasswordPopup = () =>
  Swal.fire({
    ...base,
    html: `
      <div class="nx-pop-card">
        ${head("Reset password", "Forgot your password?", "Enter your email and we'll send you a reset link", icons.shield)}
        <form id="nx-forgot-form" class="nx-pop-body" novalidate>
          ${field("forgot-email", "email", "Work email", "you@company.com", icons.mail)}
          <div class="nx-error" id="nx-forgot-error"></div>
          ${submitBtn("Send reset link")}
          ${footLink("", "← Back to sign in", "goto-login3")}
        </form>
      </div>`,
    didOpen: () => {
      onLink("goto-login3", openLoginPopup);

      const form = document.getElementById("nx-forgot-form");
      const err  = document.getElementById("nx-forgot-error");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("forgot-email").value.trim();

        if (!email || !isEmail(email)) return showErr(err, "Please enter a valid email");
        clearErr(err);

        await handleSubmit({
          loadingMsg:  "Sending reset link...",
          successMsg:  "Link sent! 📧",
          successSub:  "Check your inbox for password reset instructions.",
          failMsg:     "Failed ❌",
          failSub:     "Could not send reset link.",
          mailParams:  { name: email.split("@")[0], message: `Password reset for: ${email}` },
        });
      });
    },
  });
