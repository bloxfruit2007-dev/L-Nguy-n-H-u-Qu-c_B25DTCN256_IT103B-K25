const product=[
    
]
const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
// Chọn phần tử đầu tiên có class là "title"
const title = document.querySelector('.title');
// Thay đổi nội dung
title.textContent = 'Xin chào!';