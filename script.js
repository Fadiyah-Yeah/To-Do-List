const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const saveBtn = document.getElementById("saveBtn");

/* Tambah Task */
function addTask(text = null, completed = false) {
    const taskText = text ?? input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    if (completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
   checkbox.onclick = (e) => {
    li.classList.toggle("completed");

    if (checkbox.checked) {
        const rect = checkbox.getBoundingClientRect();
        launchConfetti(rect.left + rect.width / 2, rect.top);
    }
};


    const span = document.createElement("span");
    span.textContent = taskText;

    const del = document.createElement("button");
    del.className = "delete";
    del.innerHTML = "✕";
    del.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);

    list.appendChild(li);
    input.value = "";
}

/* Simpan ke localStorage */
function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });

    console.log("Saved To Do List:", tasks);

    localStorage.setItem("todoList", JSON.stringify(tasks));
}

/* Load dari localStorage */
function loadTasks() {
    const saved = localStorage.getItem("todoList");
    if (!saved) return;

    const tasks = JSON.parse(saved);
    console.log("Loaded To Do List:", tasks);

    tasks.forEach(task => {
        addTask(task.text, task.completed);
    });
}

/* Event */
saveBtn.addEventListener("click", saveTasks);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

/* Load saat halaman dibuka */
loadTasks();

function launchConfetti() {
    const total = 80; // jumlah bintang

    for (let i = 0; i < total; i++) {
        const star = document.createElement("div");
        star.className = "confetti";

        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = "-20px";
        star.style.animationDelay = Math.random() * 0.5 + "s";
        star.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2300);
    }
    const size = 14 + Math.random() * 10;
star.style.width = size + "px";
star.style.height = size + "px";

}
