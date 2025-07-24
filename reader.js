function goBack() {
  window.location.href = "index.html";
}

const params = new URLSearchParams(window.location.search);
const chapterNumber = params.get("chapter");

if (chapterNumber) {
  document.getElementById("pdf-viewer").src = `pdf/chapter${chapterNumber}.pdf`;
  document.getElementById("chapter-title").innerText = `Reading Chapter ${chapterNumber}`;
}
