// ========== 🔧 이 부분만 수정하면 됩니다 ==========
// 초보자도 여기만 고치면 교재/자료 내용이 싹 바뀌게 구성했어요.

/**
 * 교재 및 자료 설정 데이터
 * - 실제 운영 시 아래 값들만 교재별로 바꿔서 사용하세요.
 */
const bookData = {
  // 교재 기본 정보
  title: "YBM 중학교 영어 1",                  // 교재 제목
  series: "2022 개정 교과서 · YBM",           // 시리즈/라인명
  grade: "중학교 1학년",                      // 학년/수준
  subject: "영어",                            // 과목명
  lastUpdated: "2025-03-15",                  // 자료 최종 업데이트 일자 (YYYY-MM-DD 형식 권장)

  // 표지 이미지 (이미지 경로 또는 URL)
  // 예: "./images/middle_english_1.jpg"
  coverImage: "https://kr.object.ncloudstorage.com/ybm-prd-std/YBM_MALL/THUMB/UPLOAD/2025/314/V19sbfcbQ0AXLLu",

  // 전체 다운로드(압축파일) 링크
  // 실제 zip 경로로 교체해서 사용
  downloadAllUrl: "#",

  // 개별 자료 파일 목록
  // 필요에 따라 자유롭게 추가/삭제
  files: [
    {
      id: 1,
      name: "단원별 평가문제 (한글)",
      type: "HWP",
      size: "2.3MB",
      tag: "평가자료",
      url: "#"
    },
    {
      id: 2,
      name: "단원별 평가문제 해설",
      type: "PDF",
      size: "1.1MB",
      tag: "정답/해설",
      url: "#"
    },
    {
      id: 3,
      name: "추가 워크시트 (어휘 · 표현)",
      type: "PDF",
      size: "3.0MB",
      tag: "보충자료",
      url: "#"
    },
    {
      id: 4,
      name: "수업용 PPT (1~3과)",
      type: "PPTX",
      size: "15.2MB",
      tag: "수업자료",
      url: "#"
    },
    {
      id: 5,
      name: "교사용 지도서 샘플",
      type: "PDF",
      size: "4.7MB",
      tag: "교사용",
      url: "#"
    }
  ]
};

// ========== 실제 렌더링 스크립트 ==========

document.addEventListener("DOMContentLoaded", () => {
  renderBookInfo(bookData);
  renderFileList(bookData.files);
  setupDownloadAll(bookData);
});

/**
 * 상단 교재 정보 렌더링
 */
function renderBookInfo(data) {
  const titleEl = document.getElementById("book-title");
  const seriesEl = document.getElementById("book-series");
  const metaEl = document.getElementById("book-meta");
  const updatedEl = document.getElementById("book-updated");
  const coverImg = document.getElementById("book-cover");
  const coverWrapper = coverImg.closest(".book-cover");

  if (titleEl) titleEl.textContent = data.title || "";
  if (seriesEl) seriesEl.textContent = data.series || "";
  if (metaEl) metaEl.textContent = combineMeta(data.grade, data.subject);
  if (updatedEl) {
    updatedEl.textContent = data.lastUpdated
      ? `자료 업데이트: ${data.lastUpdated}`
      : "";
  }

  if (data.coverImage) {
    coverImg.src = data.coverImage;
    coverImg.alt = `${data.title || "교재"} 표지 이미지`;
  } else {
    // 표지 이미지 없을 때 대체 UI
    coverImg.style.display = "none";
    if (coverWrapper) {
      coverWrapper.classList.add("book-cover--empty");
      coverWrapper.textContent = "표지 이미지가 등록되지 않았습니다.";
    }
  }

  // 자료 개수 표시
  const fileCountEl = document.getElementById("file-count");
  if (fileCountEl && Array.isArray(data.files)) {
    fileCountEl.textContent = `${data.files.length}개 자료`;
  }
}

/**
 * 학년/과목 정보 합쳐서 보여주는 텍스트
 */
function combineMeta(grade, subject) {
  const parts = [];
  if (grade) parts.push(grade);
  if (subject) parts.push(subject);
  return parts.join(" · ");
}

/**
 * 자료 목록 렌더링
 */
function renderFileList(files) {
  const listEl = document.getElementById("file-list");
  if (!listEl) return;

  if (!Array.isArray(files) || files.length === 0) {
    listEl.innerHTML = `
      <li class="file-item">
        <div class="file-item__left">
          <span class="file-item__name">등록된 자료가 없습니다.</span>
          <div class="file-item__meta">
            <span class="file-item__size">관리자에게 문의해 주세요.</span>
          </div>
        </div>
      </li>
    `;
    return;
  }

  const itemsHtml = files
    .map((file) => createFileItemHtml(file))
    .join("");

  listEl.innerHTML = itemsHtml;
}

/**
 * 개별 자료 행 HTML 템플릿
 */
function createFileItemHtml(file) {
  const safeName = file.name || "자료";
  const safeType = file.type || "";
  const safeSize = file.size || "";
  const safeTag = file.tag || "";
  const safeUrl = file.url || "#";

  return `
    <li class="file-item">
      <div class="file-item__left">
        <span class="file-item__name">${safeName}</span>
        <div class="file-item__meta">
          ${safeTag ? `<span class="file-item__tag">${safeTag}</span>` : ""}
          ${safeType ? `<span class="file-item__type">${safeType}</span>` : ""}
          ${safeSize ? `<span class="file-item__size">${safeSize}</span>` : ""}
        </div>
      </div>
      <div class="file-item__right">
        <a href="${safeUrl}" class="btn btn--ghost" download>
          <span class="btn__icon" aria-hidden="true">⤓</span>
          <span class="btn__label">다운로드</span>
        </a>
      </div>
    </li>
  `;
}

/**
 * 전체 다운로드 버튼 동작 설정
 */
function setupDownloadAll(data) {
  const btn = document.getElementById("btn-download-all");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (data.downloadAllUrl && data.downloadAllUrl !== "#") {
      window.location.href = data.downloadAllUrl;
    } else {
      alert(
        "전체 다운로드 파일 경로가 설정되지 않았습니다.\n\n" +
        "👉 script.js 상단의 bookData.downloadAllUrl 값을 실제 ZIP 파일 주소로 수정해 주세요."
      );
    }
  });
}
