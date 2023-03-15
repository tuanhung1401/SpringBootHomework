//Bảng màu cho sẵn
let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

//Lấy button, box và score
const btn = document.getElementById("btn");
const boxes = document.querySelector(".boxes");
let score = document.querySelector(".points");
score.innerText = "5";

// Vòng lặp tạo 5 box ban đầu
for (let i = 0; i < 5; i++) {
    createBox();
}

// Hàm tạo box
function createBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    const randomColor = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[randomColor];
    boxes.appendChild(box);


    // Bắt sự kiện click vào box
    box.addEventListener("click", () => {
        boxes.removeChild(box);
        updateScore(-1);
    });
}

// Hàm cập nhật điểm
function updateScore(change) {
    let currentScore = Number(score.innerText);
    currentScore += change;
    score.innerText = currentScore;
}

// Bắt sự kiện click vào nút More boxes
btn.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        createBox();
    }
    updateScore(5);
})
