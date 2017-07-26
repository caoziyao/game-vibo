var log = console.log.bind(console);


var imageFromPath = function (path) {
    var img = new Image();   // 创建一个<img>元素
    img.src = path; // 设置图片源地址

    return img
}


var rectIntersects = function(a, b) {
    var o = a;
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}
