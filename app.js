/* =========================
   데이터 (수정 없음)
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
    href: "https://taeja9.github.io/playground/tools/tasty-wk.html",
    cats: ["wk-only"],
    isActive: true,
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
    icon: "🎲",
    title: "LuckyDraw",
    desc: "행운의 로또 번호 추첨기! 이곳에서 경제적 자유를 누려 보세요!!!!",
    href: "https://luckydraw-webapp.web.app/",
    cats: ["fun"],
    isActive: true,
    author: "진우",
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
    title: "2026 Gemini Playground 리포트",
    desc: "2026 Gemini Playground(재미나이 유저톡) 현장 11개 세션 정리. 실제 기업 사례의 배경 → 아키텍처 → 성과 및 AX Idea 포함.",
    href: "https://taeja9.github.io/playground/gemini-report.html",
    cats: ["report"],
    isActive: true,
    author: "정연",
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
  { icon: "🎨", title: "Coming Soon", desc: "곧 공개됩니다", href: "#", cats: [], isActive: false, author: null, type: "tool" },
];

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

// ===== 등록 신청 모달 요소 =====
const elSubmit = {
  modal: document.getElementById("submitModal"),
  open: document.getElementById("btnOpenSubmit"),
  close: document.getElementById("btnCloseSubmit"),
  cancel: document.getElementById("btnCancelSubmit"),
  form: document.getElementById("submitForm"),
  btnSubmit: document.getElementById("btnDoSubmit"),
  msg: document.getElementById("submitMsg"),
};


/* =========================
   서버 엔드포인트 설정
========================= */

// ✅ 여기에 네 Apps Script 웹앱 URL 넣기
const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbwHdx0G0epm54ktMhDCbB0owwhYb5U6H_J-cCaD6VLs3IKsf8rDgMucPrx8P6W3MNcT/exec";

/* =========================
   유틸 (수정 없음)
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
    report: "결과물",
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
   등록 모달 유틸
========================= */
function openSubmitModal() {
  if (!elSubmit.modal) return;
  elSubmit.modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSubmitModal() {
  if (!elSubmit.modal) return;
  elSubmit.modal.classList.add("hidden");
  document.body.style.overflow = "";
  if (elSubmit.form) elSubmit.form.reset();
  if (elSubmit.msg) {
    elSubmit.msg.classList.add("hidden");
    elSubmit.msg.textContent = "";
    elSubmit.msg.classList.remove("text-green-400", "text-red-400");
  }
}

function showSubmitMsg(text, ok) {
  if (!elSubmit.msg) return;
  elSubmit.msg.textContent = text;
  elSubmit.msg.classList.remove("hidden");
  elSubmit.msg.classList.toggle("text-green-400", !!ok);
  elSubmit.msg.classList.toggle("text-red-400", !ok);
}


/* =========================
   카테고리 자동 생성 (수정 없음)
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
    <button class="btn-cat px-4 py-2 rounded-full border border-slate-600 bg-slate-900/50 hover:border-blue-400 text-sm"
            data-cat="${c}">
      ${labelCat(c)} <span class="opacity-70">(${counts.get(c)})</span>
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
      `<div class="card-author">${escapeHtml(d.author)}</div>` : '';

    // 타입 배지 HTML (도구 / 리포트 구분)
    const typeBadgeStyles = {
      tool:   { bg: 'rgba(59,130,246,0.18)',  border: 'rgba(59,130,246,0.5)',  color: '#93c5fd', label: '🔧 도구' },
      report: { bg: 'rgba(139,92,246,0.18)', border: 'rgba(139,92,246,0.5)', color: '#c4b5fd', label: '📄 리포트' },
    };
    const tb = typeBadgeStyles[d.type] || typeBadgeStyles.tool;
    const typeBadgeHtml = d.isActive ? `
      <div style="position:absolute;bottom:20px;right:20px;
        background:${tb.bg};border:1px solid ${tb.border};color:${tb.color};
        border-radius:9999px;padding:3px 10px;font-size:0.72rem;font-weight:600;
        backdrop-filter:blur(4px);">
        ${tb.label}
      </div>` : '';

    // 카드 테두리 강조색: 도구=파란색, 리포트=보라색
    const hoverBorder = d.type === 'report' ? 'hover:border-purple-400' : 'hover:border-blue-400';
    const activeBorder = d.type === 'report' ? 'border-slate-600' : 'border-slate-600';

    const body = `
      <div class="card-hover relative h-full ${d.isActive ? `bg-slate-800/90 ${activeBorder} ${hoverBorder}` : 'bg-slate-700/50 border-slate-700'} backdrop-blur-sm rounded-2xl p-8 shadow-2xl border flex flex-col ${d.isActive ? '' : 'card-disabled'}">
        ${authorBadgeHtml}
        ${typeBadgeHtml}
        <div class="text-5xl mb-4 ${d.isActive ? '' : 'opacity-70'}">${d.icon || '🧰'}</div>
        <h3 class="text-2xl font-bold ${d.isActive ? 'text-white' : 'text-slate-200'} mb-3">
          ${escapeHtml(d.title)}
        </h3>
        <p class="text-slate-300 leading-relaxed flex-1 ${d.isActive ? '' : 'opacity-80'}">
          ${d.isActive ? escapeHtml(d.desc || '') : 'Coming Soon'}
        </p>
        <div class="mt-6 inline-flex items-center font-semibold link-row ${d.isActive ? (d.type === 'report' ? 'text-purple-400' : 'text-blue-400') : 'text-slate-400'}">
          <span>${d.isActive ? '바로가기' : '준비 중'}</span>
          <svg class="w-5 h-5 ml-2 ${d.isActive ? 'group-hover:translate-x-1 transition-transform' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${d.isActive ? 'M13 7l5 5m0 0l-5 5m5-5H6' : 'M6 12h12'}"/>
          </svg>
        </div>
      </div>
    `;
    return d.isActive
      ? `<a href="${d.href}" target="_blank" rel="noopener noreferrer" class="group block"
             data-title="${escapeHtml(d.title)}" data-desc="${escapeHtml(d.desc||"")}" data-cat="${(d.cats||[]).join(" ")}">${body}</a>`
      : `<div class="group block" aria-disabled="true"
             data-title="${escapeHtml(d.title)}" data-desc="${escapeHtml(d.desc||"")}" data-cat="${(d.cats||[]).join(" ")}">${body}</div>`;
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
    <button data-act="prev" class="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 hover:border-blue-400 ${state.page===1?"opacity-50":""}">&laquo;</button>
  `;
  for (let p = start; p <= end; p++){
    html += `<button data-page="${p}" class="px-3 py-2 rounded-lg border ${p===state.page ? "bg-blue-600 border-blue-600" : "bg-slate-900/60 border-slate-700 hover:border-blue-400"}">${p}</button>`;
  }
  html += `
    <button data-act="next" class="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 hover:border-blue-400 ${state.page===total?"opacity-50":""}">&raquo;</button>
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
}

  /* ===== 등록 신청 모달 이벤트 바인딩 ===== */
  // 열기 버튼
  elSubmit.open?.addEventListener("click", openSubmitModal);
  // 닫기 버튼들
  elSubmit.close?.addEventListener("click", closeSubmitModal);
  elSubmit.cancel?.addEventListener("click", closeSubmitModal);
  // 배경 클릭 시 닫기
  elSubmit.modal?.addEventListener("click", (e) => {
    if (e.target === elSubmit.modal) closeSubmitModal();
  });

  // 제출 버튼 (폼 전송)
  elSubmit.form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    // GAS 엔드포인트 확인
    if (!GAS_ENDPOINT || GAS_ENDPOINT.includes("XXXX")) {
      showSubmitMsg("서버가 설정되지 않았습니다. GAS_ENDPOINT를 확인하세요.", false);
      return;
    }

    const fd = new FormData(elSubmit.form);
    const payload = {
      name: (fd.get("name") || "").trim(),
      desc: (fd.get("desc") || "").trim(),
      link: (fd.get("link") || "").trim(),
      author: (fd.get("author") || "").trim(),
      cat: (fd.get("cat") || "").trim(),
      ua: navigator.userAgent,
      location: window.location.href,
    };

    // 필수값 검사
    if (!payload.name || !payload.desc || !payload.link || !payload.author) {
      showSubmitMsg("필수 항목을 모두 입력해 주세요.", false);
      return;
    }

    try { new URL(payload.link); } 
    catch { showSubmitMsg("링크(URL)가 올바르지 않습니다.", false); return; }

    elSubmit.btnSubmit.disabled = true;

    try {
      const res = await fetch(GAS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(()=> ({}));
      if (data && data.ok) {
        showSubmitMsg("제출 완료! 검토 후 반영하겠습니다 🙌", true);
        setTimeout(closeSubmitModal, 1200);
      } else {
        throw new Error(data?.error || "서버 오류");
      }
    } catch (err) {
      console.error(err);
      showSubmitMsg("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", false);
    } finally {
      elSubmit.btnSubmit.disabled = false;
    }
  });

  // ===== ESC 키로 모달 닫기 =====
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && elSubmit?.modal && !elSubmit.modal.classList.contains("hidden")) {
      closeSubmitModal();
    }
  });


document.addEventListener("DOMContentLoaded", init);





















