
const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const bindAll = function (sel, eventName, callback) {
    var elements = es(sel)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.addEventListener(eventName, callback)
    }
}

const log = console.log.bind(console)


const randonBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}



// 碰撞检测
const rectIntersects = function(a, b) {
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

module.exports = {
	log: log,
	randonBetween: randonBetween,
    rectIntersects: rectIntersects,
}
