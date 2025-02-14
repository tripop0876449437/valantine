document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const previewImage = document.getElementById('preview-image');
    const previewVideo = document.getElementById('preview-video');

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
        // แสดงวิดีโอ
        const reader = new FileReader();
        reader.onload = function(e) {
            previewVideo.src = e.target.result;
            previewVideo.style.display = 'block';
            previewImage.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

// แสดงข้อความเซอร์ไพรส์
document.getElementById('surprise-btn').addEventListener('click', function() {
    document.getElementById('secret-message').classList.toggle('hidden');
});
