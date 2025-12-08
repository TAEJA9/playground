// ============================================================
// 👇 [여기만 수정하세요] 교재별 데이터 입력 구간
// ============================================================

const bookData = {
    title: "지름길 영어회화 50일 완성",
    // 💡 Tip: 저장한 이미지 파일명으로 바꿔주세요 (예: bookcover.jpg)
    imageUrl: "https://kr.object.ncloudstorage.com/ybm-prd-std/YBM_MALL/THUMB/UPLOAD/2025/314/V19sbfcbQ0AXLLu", 
    allFileUrl: "https://example.com/download_all.zip" 
};

const fileList = [
    { name: "Course 1", url: "https://example.com/file1.mp3" },
    { name: "Course 2", url: "https://example.com/file2.mp3" },
    { name: "Course 3", url: "https://example.com/file3.mp3" },
    { name: "Course 4", url: "https://example.com/file4.mp3" },
    { name: "Course 5", url: "https://example.com/file5.mp3" },
    { name: "Special Course", url: "https://example.com/special.mp3" }
];

// ============================================================
// 👆 수정 끝!
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bookTitle').innerText = bookData.title;
    document.getElementById('bookImage').src = bookData.imageUrl;
    document.getElementById('downloadAllLink').href = bookData.allFileUrl;
    document.getElementById('totalCount').innerText = fileList.length;

    const listContainer = document.getElementById('fileListContainer');

    fileList.forEach(file => {
        const li = document.createElement('li');
        li.className = 'file-item';
        
        // 아이콘 변경: 심플한 다운로드 화살표로 교체
        li.innerHTML = `
            <span class="file-name">${file.name}</span>
            <a href="${file.url}" class="btn-icon-download" download target="_blank" title="새 창에서 다운로드">
                <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            </a>
        `;
        
        listContainer.appendChild(li);
    });
});