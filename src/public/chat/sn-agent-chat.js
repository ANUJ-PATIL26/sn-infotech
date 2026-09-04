/**
 * <sn-agent-chat> — optional custom LLM chat (prefer native Wix Chat).
 */
const CHAT_CSS = `
  :host { display: block; font-family: var(--font-body); }
  *, *::before, *::after { box-sizing: border-box; }
  .launcher {
    position: fixed; right: var(--space-2); bottom: var(--space-2); z-index: 1500;
    width: 56px; height: 56px; border-radius: 999px; border: 0;
    background: var(--accent); color: var(--on-accent); font-weight: 900; cursor: pointer;
    font-family: var(--font-heading); font-size: var(--fs-small);
    box-shadow: var(--shadow-cta);
  }
  .panel {
    display: none; position: fixed; right: var(--space-2); bottom: 5rem; z-index: 1500;
    width: min(380px, calc(100vw - 1.5rem)); height: min(520px, calc(100dvh - 7rem));
    background: var(--surface-elevated); color: var(--text); border: 1px solid var(--border);
    border-radius: 18px; overflow: hidden; flex-direction: column;
    box-shadow: var(--shadow);
  }
  .panel.open { display: flex; }
  .head {
    padding: var(--space-2); background: var(--surface); border-bottom: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
  }
  .head strong { font-family: var(--font-heading); color: var(--text); font-size: var(--fs-body-lg); }
  .close {
    width: 44px; height: 44px; border: 0; background: transparent;
    color: var(--text); cursor: pointer; font-size: 1rem;
    display: grid; place-items: center; flex-shrink: 0;
  }
  .msgs { flex: 1; overflow: auto; padding: var(--space-2); display: flex; flex-direction: column; gap: 0.65rem; }
  .msg { max-width: 85%; padding: 0.75rem 0.9rem; border-radius: var(--radius); font-size: var(--fs-small); line-height: 1.45; overflow-wrap: anywhere; }
  .bot { align-self: flex-start; background: var(--surface); border: 1px solid var(--border); }
  .user { align-self: flex-end; background: var(--accent-soft); color: var(--text); }
  form { display: flex; gap: 0.5rem; padding: var(--space-1); border-top: 1px solid var(--border); align-items: center; }
  input {
    flex: 1; min-width: 0; min-height: 44px; border-radius: 999px; border: 1px solid var(--border);
    background: var(--bg); color: var(--text); padding: 0.75rem 0.95rem; font-size: var(--fs-body);
  }
  button.send {
    border: 0; border-radius: 999px; background: var(--accent); color: var(--on-accent);
    font-weight: 800; padding: 0 1rem; cursor: pointer; font-size: var(--fs-small);
    min-height: 44px; min-width: 44px; flex-shrink: 0;
  }
  .note { padding: 0 var(--space-2) var(--space-1); font-size: var(--fs-xs); color: var(--text-muted); }
  @media (max-width: 560px) {
    .panel {
      left: 0.5rem; right: 0.5rem; bottom: 0.5rem;
      width: auto; height: min(100dvh - 5.5rem, 560px);
      max-height: calc(100dvh - 5.5rem);
    }
  }
`;

class SnAgentChat extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${CHAT_CSS}</style>
      <button class="launcher" type="button" data-toggle aria-label="Open SN Infotech assistant">AI</button>
      <div class="panel" data-panel role="dialog" aria-label="SN Infotech assistant">
        <div class="head">
          <strong>SN Infotech Assistant</strong>
          <button class="close" type="button" data-toggle aria-label="Close">✕</button>
        </div>
        <div class="msgs" data-msgs>
          <div class="msg bot">Hi — ask about our cloud, DevOps, Kubernetes, or managed IT services. Prefer Wix Chat? Use the site’s native widget for standard support.</div>
        </div>
        <p class="note">Custom LLM replies require the Wix backend HTTP function and Secrets Manager.</p>
        <form data-form>
          <input name="message" type="text" placeholder="Ask a question…" required autocomplete="off" />
          <button class="send" type="submit">Send</button>
        </form>
      </div>
    `;

    const panel = this.shadowRoot.querySelector('[data-panel]');
    this.shadowRoot.querySelectorAll('[data-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => panel.classList.toggle('open'));
    });

    const msgs = this.shadowRoot.querySelector('[data-msgs]');
    const addMsg = (text, cls) => {
      const el = document.createElement('div');
      el.className = `msg ${cls}`;
      el.textContent = text;
      msgs.appendChild(el);
      msgs.scrollTop = msgs.scrollHeight;
    };

    this.shadowRoot.querySelector('[data-form]').addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = e.currentTarget.message;
      const text = input.value.trim();
      if (!text) return;
      addMsg(text, 'user');
      input.value = '';
      addMsg('Thinking…', 'bot');
      const thinking = msgs.lastElementChild;

      try {
        // [LOCAL-ONLY-ISSUE]: Calling /_functions/chatProxy fails outside Wix (no Velo HTTP functions runtime)
        // [RESOLVES-ON-WIX]: Published site exposes http-functions.js endpoints under /_functions/*
        const res = await fetch('/_functions/chatProxy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text }),
        });

        // [LOCAL-ONLY-ISSUE]: Custom Element ↔ Velo page messaging / backend proxy needs Wix page context
        // [RESOLVES-ON-WIX]: Once embedded on a Wix page with backend published, fetch resolves against the site origin
        const data = await res.json();
        thinking.textContent = data.reply || data.error || 'Sorry — I could not complete that request.';
      } catch (err) {
        thinking.textContent =
          'Assistant is unavailable in this preview. On the live Wix site it connects via the chatProxy HTTP function.';
      }
    });
  }
}

if (!customElements.get('sn-agent-chat')) {
  customElements.define('sn-agent-chat', SnAgentChat);
}
