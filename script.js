const totalChapters = 3; // Change this to however many chapters you have
const list = document.getElementById("chapter-list");

for (let i = 1; i <= totalChapters; i++) {
  const li = document.createElement("li");
  li.textContent = `Chapter ${i}`;
  li.onclick = () => {
    window.location.href = `reader.html?chapter=${i}`;
  };
  list.appendChild(li);
}
