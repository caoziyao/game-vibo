
const log = console.log.bind(console)

const randonBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

// 碰撞检测
var rectIntersects = function(a, b) {
    // var o = a;
    // if (b.y > o.y && b.y < o.y + o.h) {
    //     if (b.x > o.x && b.x < o.x + o.w) {
    //         return true
    //     }
    // }
    // return false
    var rect1 = a;
    var rect2 = b;
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
            return true
        }
    return false
}


var downloadFile = function (path, fileName) {
     let a = document.createElement('a');
     //var url = window.URL.createObjectURL(path);
     a.href = path;
     a.download = fileName;
     a.click();
     //window.URL.revokeObjectURL(url);
 }

var filenameFromSrc = function (src) {
    return  src.split('/').pop()
}


 var imagsFromPage = function (elements) {
     var imags = document.querySelectorAll(elements)
     return imags
 }

var downImages = function () {
    var imags = imagsFromPage('#content img')
    for (var i = 0; i < imags.length; i++) {
        var imag = imags[i]
        var currentSrc = imag.currentSrc
        var name = filenameFromSrc(currentSrc)
        console.log(imag, name)

        downloadFile(currentSrc, name)
    }
}
