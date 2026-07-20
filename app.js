// =====================
// 🔒 비밀번호 설정
// isProtected: true인 카드를 클릭할 때 이 비밀번호를 입력해야 합니다
// =====================
const SECRET_PASSWORD = "4372"; // ⬅️ 비밀번호 수정 시 여기를 변경

/* =========================
   데이터
========================= */
const CARD_DATA = [
  // =====================
  // 🔧 도구 (tool)
  // =====================
  {
    icon: "🎯",
    title: "이벤트 당첨자 추첨기",
    desc: "엑셀만 업로드하면 끝! 시드 번호를 입력하여 동일한 추첨 결과 재현! 추가 추첨 혜택도 한 번에~ 당첨자 제외 목록 기능 추가! 지금 바로 추첨해 보세요!",
    href: "https://taeja9.github.io/playground/tools/winner-ex.html",
    cats: ["event"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "📝",
    title: "나만의 게시판",
    desc: "온라인 게시판 여기 있어요! QR코드로 간편한 초대, Apps Script를 활용한 무료 이용, 쌍방향 수업에 완전 필요함",
    href: "https://taeja9.github.io/jypad/index.html",
    cats: ["board"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "🍱",
    title: "점메추 투표하기",
    desc: "오늘 점심 먹으러 어디 갈 지 고민되시나요. 가게를 골라 좋아요 수가 많은 곳으로 가보면 어떨까요?",
    href: "https://taeja9.github.io/playground/tools/lunch.html",
    cats: ["board"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "😽",
    title: "전국투어 맛집 자랑",
    desc: "전국 방방곡곡을 돌아다니는 WK의 맛집 버킷 리스트",
    encryptedHref: "GJomjUej1W4jL972q0yJFgWAem8+GnByZoD581UwGyrshVV4hk2ASagzMC1qWAZiXjT26mKWM8vTmS/NhIdyPpRcRRjLMP81fNs/wahrPG9vbxjKSSq59qi7D6WJW+cy8do7",
    cats: ["wk-only"],
    isActive: true,
    isProtected: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "💻",
    title: "개체 대량등록 결과 변환기",
    desc: "CMS에 대량등록한 개체들.. 언제 링크로 변환하고 파일명을 추출하나요.... 이렇게 해보세요!",
    href: "https://taeja9.github.io/playground/tools/xlsx.html",
    cats: ["automation"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {

    icon: "💯",
    title: "문제은행 파일 검사기",
    desc: "문제은행 파일 검사, 이제 웹으로 진행해 보세요! 눈 빠지는 파일명 오류 찾기 고민 해결!!",
    href: "https://taeja9.github.io/playground/set_checker/checker.html",
    cats: ["automation"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "🔠",
    title: "Sentence Prompt Builder",
    desc: "영어 교육용 문장 생성을 위한 AI 프롬프트 자동화 도구",
    href: "https://taeja9.github.io/playground/english/index.html",
    cats: ["automation"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "📷",
    title: "The GRAND Contents Festival",
    desc: "올해를 빛낸 당신의 콘텐츠를 자랑해 보세요!",
    href: "https://taeja9.github.io/playground/grandimagefestival/index.html",
    cats: ["event"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "🐶",
    title: "멍BTI",
    desc: "내 취향에 맞는 멈머 사진을 구경해 보세요. 멈머로 행복 충전!",
    href: "https://taeja9.github.io/playground/tools/meongbti.html",
    cats: ["fun"],
    isActive: true,
    author: "정연",
    type: "tool"
  },
  {
    icon: "📚",
    title: "교재 자료실 ver.2",
    desc: "몹시 간단한 QR코드 스캔하면 나오는 교재 자료실 페이지",
    href: "https://taeja9.github.io/playground/pages_2/index.html",
    cats: ["automation"],
    isActive: true,
    author: "정연",
    type: "tool"
  },

  // =====================
  // 📄 업무 결과물 (report)
  // 새 결과물은 여기에 추가하세요!
  // =====================
  {
    icon: "🤖",
    title: "2026 Gemini Playground",
    desc: "2026 Gemini Playground 현장 세션 정리 및 실무 도입 사례, AX Idea 분석 자료 페이지 (요약 슬라이드 포함)",
    href: "https://taeja9.github.io/playground/works/gemini-playground-2026/index.html",
    cats: ["report"],
    isActive: true,
    author: "정연",
    type: "report"
  },
  {
    icon: "👤",
    title: "AI 에이전트 검토",
    desc: "일레븐랩스, 네오나 에이전트, perso interactive의 기능 상세 비교 및 확인 사항 비교용",
    href: "https://ai-human-delta.vercel.app/",
    cats: ["report"],
    isActive: true,
    author: "정연",
    type: "report"
  },
  {
    icon: "🧭",
    title: "당신을 위한 바이브코딩 가이드",
    desc: "바이브코딩의 기초부터 협업 흐름, 업무 자동화 방법에 대한 가이드를 제공합니다.",
    href: "https://ai-guide-01.vercel.app/",
    cats: ["report"],
    isActive: true,
    author: "정연",
    type: "report"
  },
  {
    icon: "🏫",
    title: "AI 어학원",
    desc: "AI 휴먼의 1:1 토익 과외 앱 서비스",
    encryptedHref: "RLDW51kyD1Fn/e/GluSaJcmdLxdyge556hwR1PgN+OconwSos6UoXJOyfwdiOMLZe2Ag8hSCDEQJYMKYj3fc9gPzolzArMU+1CLrZuUCDg8=",
    cats: ["report"],
    isActive: true,
    isProtected: true,
    author: "유진",
    type: "report"
  },
  {
    icon: "🐳",
    title: "AI 필기인식 서비스 비교 분석 결과",
    desc: "AI 필기인식 서비스 비교 항목 선정부터 분석 결과까지 완전 시각화 미쳤지 모야",
    href: "https://claude.ai/public/artifacts/1c92aef1-b1da-455e-9508-94c355adb973",
    cats: ["automation"],
    isActive: true,
    author: "유진",
    type: "report"
  },

  { icon: "🤖", title: "Coming Soon", desc: "곧 공개됩니다", href: "#", cats: [], isActive: false, author: null, type: "tool" },
  { icon: "✨", title: "Coming Soon", desc: "곧 공개됩니다", href: "#", cats: [], isActive: false, author: null, type: "tool" },
  { icon: "🚀", title: "Coming Soon", desc: "곧 공개됩니다", href: "#", cats: [], isActive: false, author: null, type: "tool" },
];

// 🎲 활성화된 카드만 랜덤 셔플 (Coming Soon 카드는 맨 뒤에 고정)
(function shuffleActiveCards() {
  const active = CARD_DATA.filter(d => d.isActive);
  const inactive = CARD_DATA.filter(d => !d.isActive);
  for (let i = active.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [active[i], active[j]] = [active[j], active[i]];
  }
  CARD_DATA.length = 0;
  CARD_DATA.push(...active, ...inactive);
})();

/* =========================
   상태 (수정 없음)
========================= */
let state = {
  q: "",
  cat: "all",
  page: 1,
  pageSize: 9,
  filtered: [],
  pageCount: 1
};

const el = {
  search: document.getElementById("searchInput"),
  pageSize: document.getElementById("pageSize"),
  catBar: document.getElementById("catBar"),
  grid: document.getElementById("cardGrid"),
  pager: document.getElementById("pager"),
};

/* =========================
   유틸
========================= */
function uniq(arr){ return [...new Set(arr)]; }
function flatten(arrs){ return arrs.reduce((a,b)=>a.concat(b),[]); }
function labelCat(c){
  if (c === "all") return "전체";
  const map = { 
    event:"이벤트", 
    board:"게시판",
    "wk-only": "WK-Only",
    automation: "자동화",
    report: "works",
    nlp:"NLP", 
    vision:"Vision", 
    utils:"유틸" 
  };
  return map[c] || c;
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({
    '&':'&amp;',
    '<':'&lt;',   // 👈 여기!
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[m]));
}


/* =========================
   카테고리 자동 생성
========================= */
function collectCategories(data){
  const cats = uniq(flatten(data.map(d => d.cats || []))).sort();
  return ["all", ...cats];
}
function renderCategories(){
  const cats = collectCategories(CARD_DATA);
  const counts = new Map();
  cats.forEach(c => counts.set(c, 0));
  CARD_DATA.forEach(d => (d.cats||[]).forEach(c => counts.set(c, (counts.get(c)||0)+1)));
  counts.set("all", CARD_DATA.length);

  el.catBar.innerHTML = cats.map(c => `
    <button class="btn-cat px-4 py-2 rounded-full border border-slate-200 bg-white hover:border-slate-400 text-xs font-semibold text-slate-700 transition-all active:scale-95"
            data-cat="${c}">
      ${labelCat(c)} <span class="text-slate-400 font-normal">(${counts.get(c)})</span>
    </button>
  `).join("");

  el.catBar.querySelectorAll(".btn-cat").forEach(btn=>{
    if(btn.dataset.cat === state.cat) btn.classList.add("active");
    btn.addEventListener("click", ()=>{
      el.catBar.querySelectorAll(".btn-cat").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      state.cat = btn.dataset.cat;
      state.page = 1;
      applyAndRender();
    });
  });
}

/* =========================
   필터링/페이징 (수정 없음)
========================= */
function filterData(){
  const q = state.q.trim().toLowerCase();
  state.filtered = CARD_DATA.filter(d => {
    const inCat = state.cat === "all" || (d.cats||[]).map(x=>x.toLowerCase()).includes(state.cat);
    const inText = !q || 
      d.title.toLowerCase().includes(q) || 
      (d.desc||"").toLowerCase().includes(q) ||
      (d.author||"").toLowerCase().includes(q);
    return inCat && inText;
  });
  state.pageCount = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
  if (state.page > state.pageCount) state.page = state.pageCount;
}
function currentSlice(){
  const start = (state.page - 1) * state.pageSize;
  return state.filtered.slice(start, start + state.pageSize);
}

/* =========================
   카드 렌더
========================= */
function renderCards(){
  const items = currentSlice();
  el.grid.innerHTML = items.map(d => {
    
    // 제작자 배지 HTML
    const authorBadgeHtml = (d.isActive && d.author) ?
      `<div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.6);color:#1d1d1f;border-radius:9999px;padding:3px 10px;font-size:0.72rem;font-weight:600;backdrop-filter:blur(4px);">${escapeHtml(d.author)}</div>` : '';

    // 타입 배지 HTML (도구 / 리포트 구분)
    const typeBadgeStyles = {
      tool:   { bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', color: '#059669', label: '🔧 도구' },
      report: { bg: 'rgba(20,184,166,0.12)', border: 'rgba(20,184,166,0.3)', color: '#0d9488', label: '🧭 works' },
    };
    const tb = typeBadgeStyles[d.type] || typeBadgeStyles.tool;
    const typeBadgeHtml = d.isActive ? `
      <div style="position:absolute;bottom:20px;right:20px;
        background:${tb.bg};border:1px solid ${tb.border};color:${tb.color};
        border-radius:9999px;padding:3px 10px;font-size:0.72rem;font-weight:600;">
        ${tb.label}
      </div>` : '';

    const body = `
      <div class="card-hover relative h-full ${d.isActive ? 'bg-white/40 border border-white/50 backdrop-blur-xl saturate-[160%]' : 'bg-white/10 border border-white/30 backdrop-blur-md card-disabled'} rounded-xl p-8 flex flex-col">
        ${authorBadgeHtml}
        ${typeBadgeHtml}
        <div class="text-5xl mb-5 ${d.isActive ? '' : 'opacity-60'}">${d.icon || '🧰'}</div>
        <h3 class="text-xl font-bold ${d.isActive ? 'text-slate-900' : 'text-slate-400'} mb-2.5">
          ${escapeHtml(d.title)}
        </h3>
        <p class="text-sm leading-relaxed ${d.isActive ? 'text-slate-600' : 'text-slate-400'} flex-1">
          ${d.isActive ? escapeHtml(d.desc || '') : 'Coming Soon'}
        </p>
        <div class="mt-6 inline-flex items-center font-semibold link-row ${d.isActive ? 'text-linkgreen group-hover:text-applegreen' : 'text-slate-400'} transition-colors">
          <span>${d.isProtected ? '🔒 ' : ''}${d.isActive ? '바로가기' : '준비 중'}</span>
          <svg class="w-4 h-4 ml-1.5 ${d.isActive ? 'group-hover:translate-x-1 transition-transform' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${d.isActive ? 'M13 7l5 5m0 0l-5 5m5-5H6' : 'M6 12h12'}"/>
          </svg>
        </div>
      </div>
    `;
    const targetHref = d.isProtected ? '#' : d.href;
    return d.isActive
      ? `<a href="${targetHref}" target="_blank" rel="noopener noreferrer" class="group block"
             ${d.isProtected ? 'data-protected="true"' : ''}
             data-title="${escapeHtml(d.title)}" data-desc="${escapeHtml(d.desc||'')}" data-cat="${(d.cats||[]).join(' ')}">${body}</a>`
      : `<div class="group block" aria-disabled="true"
             data-title="${escapeHtml(d.title)}" data-desc="${escapeHtml(d.desc||'')}" data-cat="${(d.cats||[]).join(' ')}">${body}</div>`;
  }).join("");
}

/* =========================
   페이지네이션 (수정 없음)
========================= */
function renderPager(){
  const total = state.pageCount;
  if (total <= 1) { el.pager.innerHTML = ""; return; }

  const maxLen = 7;
  let start = Math.max(1, state.page - Math.floor(maxLen/2));
  let end = Math.min(total, start + maxLen - 1);
  start = Math.max(1, end - maxLen + 1);

  let html = `
    <button data-act="prev" class="px-3 py-1.5 rounded-lg bg-white border border-pebble hover:border-carbon text-xs font-semibold ${state.page===1?"opacity-40 cursor-not-allowed":""}">&laquo;</button>
  `;
  for (let p = start; p <= end; p++){
    html += `<button data-page="${p}" class="px-3 py-1.5 rounded-lg border text-xs font-semibold ${p===state.page ? "bg-carbon text-white border-carbon" : "bg-white border-pebble hover:border-carbon text-carbon"}">${p}</button>`;
  }
  html += `
    <button data-act="next" class="px-3 py-1.5 rounded-lg bg-white border border-pebble hover:border-carbon text-xs font-semibold ${state.page===total?"opacity-40 cursor-not-allowed":""}">&raquo;</button>
  `;
  el.pager.innerHTML = html;

  el.pager.querySelectorAll("button[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.page = parseInt(btn.dataset.page, 10);
      renderCards();
      renderPager();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  el.pager.querySelector('button[data-act="prev"]')?.addEventListener("click", ()=>{
    if (state.page > 1) { state.page--; renderCards(); renderPager(); window.scrollTo({top:0,behavior:'smooth'}); }
  });
  el.pager.querySelector('button[data-act="next"]')?.addEventListener("click", ()=>{
    if (state.page < total) { state.page++; renderCards(); renderPager(); window.scrollTo({top:0,behavior:'smooth'}); }
  });
}

/* =========================
   메인 (수정 없음)
========================= */
function applyAndRender(){
  filterData();
  renderCards();
  renderPager();
}

function init(){
  renderCategories();
  filterData();
  renderCards();
  renderPager();

  el.search.addEventListener("input", ()=>{
    state.q = el.search.value;
    state.page = 1;
    applyAndRender();
  });
  el.pageSize.addEventListener("change", ()=>{
    state.pageSize = parseInt(el.pageSize.value, 10);
    state.page = 1;
    applyAndRender();
  });

  // 🔒 비밀번호 보호 카드 클릭 핸들러
  el.grid.addEventListener("click", function(e) {
    const protectedCard = e.target.closest("a[data-protected='true']");
    if (protectedCard) {
      e.preventDefault();
      const cardTitle = protectedCard.getAttribute("data-title");
      const card = CARD_DATA.find(d => d.title === cardTitle);
      if (card) {
        showPasswordModal(card);
      }
    }
  });
}

/* =========================
   🔒 비밀번호 입력 모달 UI
========================= */
let activeProtectedCard = null;

function createPasswordModal() {
  if (document.getElementById("passwordModal")) return;

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }
    .animate-shake {
      animation: shake 0.3s ease-in-out;
    }
  `;
  document.head.appendChild(style);

  const modalHtml = `
    <div id="passwordModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="passwordModalContent" class="bg-white/90 border border-pebble rounded-2xl p-6 md:p-8 max-w-sm w-full mx-4 shadow-2xl transform scale-95 transition-all duration-300 backdrop-blur-md">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-carbon flex items-center gap-2">
            <span>🔒</span> 비밀번호 입력
          </h3>
          <button id="closeModalBtn" class="text-ash hover:text-carbon transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <p id="modalCardTitle" class="text-sm text-ash mb-6 font-medium text-center"></p>
        <div class="space-y-4">
          <div>
            <input id="modalPasswordInput" type="password" placeholder="비밀번호" 
              class="w-full rounded-xl bg-frost border border-pebble px-4 py-3 text-carbon placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-applegreen focus:bg-white text-center tracking-widest text-lg font-bold transition-all" />
            <p id="modalErrorMessage" class="text-red-500 text-xs mt-2 hidden text-center">비밀번호가 올바르지 않습니다.</p>
          </div>
          <button id="submitPasswordBtn" class="w-full py-3 bg-carbon hover:bg-smoke text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            확인
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById("passwordModal");
  const content = document.getElementById("passwordModalContent");
  const input = document.getElementById("modalPasswordInput");
  const closeBtn = document.getElementById("closeModalBtn");
  const submitBtn = document.getElementById("submitPasswordBtn");
  const errorMsg = document.getElementById("modalErrorMessage");

  const hideModal = () => {
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-100");
    content.classList.add("scale-95");
    content.classList.remove("scale-100");
    input.value = "";
    errorMsg.classList.add("hidden");
    activeProtectedCard = null;
  };

  const handleVerify = async () => {
    const password = input.value;
    if (!password) return;

    if (activeProtectedCard) {
      if (activeProtectedCard.encryptedHref) {
        const decryptedUrl = await decrypt(activeProtectedCard.encryptedHref, password);
        if (decryptedUrl) {
          hideModal();
          window.open(decryptedUrl, "_blank", "noopener,noreferrer");
        } else {
          showError();
        }
      } else {
        // Fallback for plaintext href cards using the global SECRET_PASSWORD
        if (password === SECRET_PASSWORD) {
          hideModal();
          window.open(activeProtectedCard.href, "_blank", "noopener,noreferrer");
        } else {
          showError();
        }
      }
    }
  };

  const showError = () => {
    errorMsg.classList.remove("hidden");
    content.classList.add("animate-shake");
    input.select();
    setTimeout(() => {
      content.classList.remove("animate-shake");
    }, 300);
  };

  closeBtn.addEventListener("click", hideModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleVerify();
    if (e.key === "Escape") hideModal();
  });

  submitBtn.addEventListener("click", handleVerify);
}

function showPasswordModal(card) {
  createPasswordModal();
  activeProtectedCard = card;
  
  const modal = document.getElementById("passwordModal");
  const content = document.getElementById("passwordModalContent");
  const titleEl = document.getElementById("modalCardTitle");
  const input = document.getElementById("modalPasswordInput");
  
  titleEl.textContent = `"${card.title}" 페이지에 접근하려면 비밀번호가 필요합니다.`;
  
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100");
  content.classList.remove("scale-95");
  content.classList.add("scale-100");
  
  setTimeout(() => input.focus(), 100);
}

/* =========================
   🔒 복호화 (PBKDF2 + AES-GCM)
========================= */
async function decrypt(encryptedBase64, password) {
  try {
    const decoder = new TextDecoder();
    const combined = new Uint8Array(
      atob(encryptedBase64).split("").map(c => c.charCodeAt(0))
    );
    const salt = combined.slice(0, 16);
    const iv = combined.slice(16, 28);
    const ciphertext = combined.slice(28);
    
    const encoder = new TextEncoder();
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256"
      },
      passwordKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv },
      key,
      ciphertext
    );
    return decoder.decode(decrypted);
  } catch (e) {
    return null;
  }
}

document.addEventListener("DOMContentLoaded", init);





















