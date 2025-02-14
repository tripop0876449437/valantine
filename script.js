document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const previewImage = document.getElementById('preview-image');
    const previewVideo = document.getElementById('preview-video');

    // เคลียร์ค่า src ก่อนโหลดไฟล์ใหม่
    previewImage.src = "";
    previewVideo.src = "";

    if (file.type.startsWith('image/')) {
        // แสดงรูป
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
            previewVideo.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else if (file.type.startsWith('video/')) {
        // แสดงและเล่นวิดีโออัตโนมัติ
        const reader = new FileReader();
        reader.onload = function(e) {
            previewVideo.src = e.target.result;
            previewVideo.style.display = 'block';
            previewVideo.muted = true;
            previewVideo.autoplay = true;
            previewVideo.loop = true;
            previewImage.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('surprise-btn').addEventListener('click', function() {
    toggleMessage('secret-message', 'surprise-btn', "กดเพื่อดูข้อความพิเศษ", "ซ่อนข้อความ");
});

document.getElementById('second-btn').addEventListener('click', function() {
    toggleMessage('second-message', 'second-btn', "กดเพื่อดูเซอร์ไพรส์ที่สอง", "ซ่อนข้อความที่สอง");
});

function toggleMessage(messageId, buttonId, showText, hideText) {
    const message = document.getElementById(messageId);
    const button = document.getElementById(buttonId);

    if (!message || !button) {
        console.error(`❌ ไม่พบ ${messageId} หรือ ${buttonId}`);
        return;
    }

    console.log(`🛠️ ปุ่ม ${buttonId} ถูกกดแล้ว!`);

    if (message.classList.contains('show')) {
        message.classList.remove('show');
        message.classList.add('hidden');
        button.textContent = showText;
        console.log(`✅ ข้อความ ${messageId} ถูกซ่อนแล้ว!`);
    } else {
        message.classList.remove('hidden');
        message.classList.add('show');
        button.textContent = hideText;
        console.log(`✅ ข้อความ ${messageId} ถูกแสดงแล้ว!`);
    }
}

// ฟังก์ชันสร้างหัวใจลอยขึ้น
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // สุ่มตำแหน่งด้านล่างจอ
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-50px"; // เริ่มจากด้านล่างของหน้าจอ

    // สุ่มขนาดหัวใจ
    const size = Math.random() * 20 + 10; // 10px - 30px
    heart.style.fontSize = `${size}px`;

    // สุ่มสีหัวใจ (แดง, ชมพู, ม่วง)
    const colors = ["#ff0000", "#ff69b4", "#cc00ff"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    // สุ่มความเร็วลอย (2s - 5s)
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = `${duration}s`;

    document.body.appendChild(heart);

    // ลบหัวใจเมื่อออกจากหน้าจอ
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// สร้างหัวใจใหม่ทุก 200ms
setInterval(createHeart, 200);
