// ========== 데이터 설정 (여기만 교체해서 사용하면 됩니다) ==========

const bookData = {
  // 교재 정보
  title: "YBM 중학교 영어 1",
  author: "홍길동 외 3인",
  pubDate: "2025-02-20",
  isbn: "978-89-000-0000-0",
  updatedDate: "2025-03-15",

  // 표지 이미지
  coverImage: "https://ymhcopau2891.edge.naverncp.com/TEXTBOOK/2025/T0807015843LngnJ.png",

  // 전체 다운로드 ZIP 경로
  downloadAllUrl: "#",

  // 개별 자료 (Lesson 1 ~ Lesson 15)
  files: [
    { id: 1,  name: "Lesson 1",  type: "PDF",  url: "#" },
    { id: 2,  name: "Lesson 2",  type: "HWP",  url: "#" },
    { id: 3,  name: "Lesson 3",  type: "PPTX", url: "#" },
    { id: 4,  name: "Lesson 4",  type: "PDF",  url: "#" },
    { id: 5,  name: "Lesson 5",  type: "PDF",  url: "#" },
    { id: 6,  name: "Lesson 6",  type: "HWP",  url: "#" },
    { id: 7,  name: "Lesson 7",  type: "PDF",  url: "#" },
    { id: 8,  name: "Lesson 8",  type: "PPTX", url: "#" },
    { id: 9,  name: "Lesson 9",  type: "PDF",  url: "#" },
    { id: 10, name: "Lesson 10", type: "HWP",  url: "#" },
    { id: 11, name: "Lesson 11", type: "PDF",  url: "#" },
    { id: 12, name: "Lesson 12", type: "PPTX", url: "#" },
    { id: 13, name: "Lesson 13", type: "PDF",  url: "#" },
    { id: 14, name: "Lesson 14", type: "HWP",  url: "#" },
    { id: 15, name: "Lesson 15", type: "PDF",  url: "#" }
  ]
};

// ========== 렌더링 로직 ==========

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
  const authorEl = document.getElementById("book-author");
  const pubDateEl = document.getElementById("book-pubdate");
  const isbnEl = document.getElementById("book-isbn");
  const updatedEl = document.getElementById("book-updated");
  const coverImg = document.getElementById("book-cover");
  const coverWrapper = coverImg.closest(".book-cover");

  if (titleEl) titleEl.textContent = data.title || "";

  if (authorEl) {
    authorEl.textContent = data.author
      ? `저자: ${data.author}`
      : "저자: -";
  }

  if (pubDateEl) {
    pubDateEl.textContent = data.pubDate
      ? `출간일: ${data.pubDate}`
      : "출간일: -";
  }

  if (isbnEl) {
    isbnEl.textContent = data.isbn
      ? `ISBN: ${data.isbn}`
      : "ISBN: -";
  }

  if (updatedEl) {
    updatedEl.textContent = data.updatedDate
      ? `자료 업데이트: ${data.updatedDate}`
      : "자료 업데이트: -";
  }

  if (data.coverImage) {
    coverImg.src = data.coverImage;
    coverImg.alt = `${data.title || "교재"} 표지 이미지`;
  } else {
    coverImg.style.display = "none";
    if (coverWrapper) {
      coverWrapper.classList.add("book-cover--empty");
      coverWrapper.textContent = "표지 이미지가 등록되지 않았습니다.";
    }
  }

  const fileCountEl = document.getElementById("file-count");
  if (fileCountEl && Array.isArray(data.files)) {
    fileCountEl.textContent = `${data.files.length}개 자료`;
  }
}

/**
 * 개별 다운로드 목록 렌더링
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
            <span class="file-item__type">관리자에게 문의해 주세요.</span>
          </div>
        </div>
      </li>
    `;
    return;
  }

  const itemsHtml = files.map(createFileItemHtml).join("");
  listEl.innerHTML = itemsHtml;
}

/**
 * 개별 파일 행 템플릿
 * - 이름 (Lesson 1 등)
 * - 파일 유형만 표시
 */
function createFileItemHtml(file) {
  const safeName = file.name || "자료";
  const safeType = file.type || "";
  const safeUrl = file.url || "#";

  return `
    <li class="file-item">
      <div class="file-item__left">
        <span class="file-item__name">${safeName}</span>
        <div class="file-item__meta">
          ${safeType ? `<span class="file-item__type">${safeType}</span>` : ""}
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
 * 전체 다운로드 버튼
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
