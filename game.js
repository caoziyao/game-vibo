
var log = console.log.bind(console);




var __main = function () {
    var canvas = document.querySelector('#id-canvas');
    var context = canvas.getContext('2d');

    var x = 100;
    var y = 200;
    var speed = 5;

    var leftDown = false;
    var rightDown = false;

    var img = new Image();   // 创建一个<img>元素
    img.src = 'paddle.png'; // 设置图片源地址
    img.onload = function () {
        context.drawImage(img, x, y);
    }

    // events
    window.addEventListener('keydown', function(event) {
        var k = event.key;
        if (k == 'a') {
            leftDown = true;
        } else if (k == 'd') {
            rightDown = true;

        }
    })

    // events
    window.addEventListener('keyup', function(event) {
        var k = event.key;
        if (k == 'a') {
            leftDown = false;
        } else if (k == 'd') {
            rightDown = false;

        }
    })


    setInterval(function () {
        // update x
        if (leftDown) {
            x -= speed;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y);
        }

        // cleamp x
        

        if (rightDown) {
            x += speed;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y);
        }

        // draw

    }, 1000 / 30)
}

__main()
