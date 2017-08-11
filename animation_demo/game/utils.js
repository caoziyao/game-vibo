
var e = sel => document.querySelector(sel)

var log = console.log.bind(console)


const randonBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}


// 碰撞检测
var rectIntersects = function(a, b) {
    var o = a;
    if (b.y > o.y && b.y < o.y + o.image.h) {
        if (b.x > o.x && b.x < o.x + o.image.w) {
            return true
        }
    }
    return false
}
