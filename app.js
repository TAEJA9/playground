/* =========================
   데이터: 여기만 편집하면 카드가 늘어납니다
   - isActive: true면 클릭 가능(실서비스), false면 Coming Soon 비활성
========================= */
const CARD_DATA = [
  {
    icon: "🎯",
    title: "이벤트 당첨자 추첨기",
    desc: "엑셀만 업로드하면 끝! 시드 번호를 입력하여 동일한 추첨 결과 재현! 추가 추첨 혜택도 한 번에~ 지금 바로 추첨해 보세요!",
    href: "https://taeja9.github.io/playground/winner.html",
    cats: ["event"],   // ← 이벤트만 남김
    isActive: true     // ← 유일하게 클릭 가능
  },

 {
    icon: "📝",
    title: "나만의 게시판",
    desc: "온라인 게시판 여기 있어요! QR코드로 간편한 초대, Apps Script를 활용한 무료 이용, 쌍방향 수업에 완전 필요함",
    href: "https://taeja9.github.io/jypad/index.html",
    cats: ["board"],   // ← 이벤트만 남김
    isActive: true     // ← 유일하게 클릭 가능
  },

    {
    icon: "🍱",
    title: "점메추 투표하기",
    desc: "오늘 점심 먹으러 어디 갈 지 고민되시나요. 가게를 골라 좋아요 수가 많은 곳으로 가보면 어떨까요?",
    href: "https://taeja9.github.io/playground/lunch.html",
    cats: ["board"],   // ← 이벤트만 남김
    isActive: true     // ← 유일하게 클릭 가능
  },

   {
    icon: "😽",
    title: "전국투어 맛집 자랑",
    desc: "전국 방방곡곡을 돌아다니는 WK의 맛집 버킷 리스트",
    href: "https://taeja9.github.io/playground/tasty-wk.html",
    cats: ["WK-Only"],   // ← 이벤트만 남김
    isActive: true     // ← 유일하게 클릭 가능
  },
   
  // 이하 전부 Coming Soon (제목도 바꿈, 클릭 불가, 카테고리 비움)
  { icon:"🤖", title:"Coming Soon", desc:"곧 공개됩니다", href:"#", cats:[], isActive:false },
  { icon:"✨", title:"Coming Soon", desc:"곧 공개됩니다", href:"#", cats:[], isActive:false },
  { icon:"🚀", title:"Coming Soon", desc:"곧 공개됩니다", href:"#", cats:[], isActive:false },
  { icon:"💡", title:"Coming Soon", desc:"곧 공개됩니다", href:"#", cats:[], isActive:false },
  { icon:"🎨", title:"Coming Soon", desc:"곧 공개됩니다", href:"#", cats:[], isActive:false },
];

/* =========================
   상태
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
  const map = { event:"이벤트", nlp:"NLP", vision:"Vision", utils:"유틸" };
  return map[c] || c;
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&gt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
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
   필터링/페이징
========================= */
function filterData(){
  const q = state.q.trim().toLowerCase();
  state.filtered = CARD_DATA.filter(d => {
    const inCat = state.cat === "all" || (d.cats||[]).map(x=>x.toLowerCase()).includes(state.cat);
    const inText = !q || d.title.toLowerCase().includes(q) || (d.desc||"").toLowerCase().includes(q);
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
    const body = `
      <div class="card-hover h-full ${d.isActive ? 'bg-slate-800/90 border-slate-600 hover:border-blue-400' : 'bg-slate-700/50 border-slate-700'} backdrop-blur-sm rounded-2xl p-8 shadow-2xl border flex flex-col ${d.isActive ? '' : 'card-disabled'}">
        <div class="text-5xl mb-4 ${d.isActive ? '' : 'opacity-70'}">${d.icon||"🧰"}</div>
        <h3 class="text-2xl font-bold ${d.isActive ? 'text-white' : 'text-slate-200'} mb-3">
          ${escapeHtml(d.title)}
        </h3>
        <p class="text-slate-300 leading-relaxed flex-1 ${d.isActive ? '' : 'opacity-80'}">
          ${d.isActive ? escapeHtml(d.desc||"") : "Coming Soon"}
        </p>
        <div class="mt-6 inline-flex items-center font-semibold link-row ${d.isActive ? 'text-blue-400' : 'text-slate-400'}">
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
   페이지네이션
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
   메인
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

document.addEventListener("DOMContentLoaded", init);






이건데. 여기에서 true 인것중에서 비번 설정을 걸어서 on인거는 모달로 비번 입력하세요! 해서 맞아야 링크가 열렸음 좋겟다고.
