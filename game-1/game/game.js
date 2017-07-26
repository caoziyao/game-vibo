// 瓜
class Game {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        // events
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function(event){
            self.keydowns[event.key] = false
        })
        this.init()
    }

    restart() {
        var g = this
        var s = Scene(g)
        this.replaceScene(s)
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }
    // update
    update() {
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    //
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        log(window.fps)
        // events
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }

    imageByName(name) {
        var g = this
        log('image by name', g.images)
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)
    }

    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                log('load images', loads.length, names.length)
                if (loads.length == names.length) {
                    log('load images', g.images)
                    g.__start()
                }
            }
        }
    }
}
//
//
// class Game {
//     constructor(fps, images, runCallback) {
//         window.fps = fps
//         var canvas = document.querySelector('#id-canvas');
//         var context = canvas.getContext('2d');
//
//         this.scene = null
//         this.canvas = canvas,
//         this.context = context,
//         this.actions = {},
//         this.keydowns = {},
//         this.images = images,
//         this.runCallback = runCallback,
//
//         window.addEventListener('keydown', function (event) {
//             g.keydowns[event.key] = true;
//         })
//
//         window.addEventListener('keyup', function (event) {
//             g.keydowns[event.key] = false;
//         })
//
//         this.init()
//
//     }
//
//     static instance(...args) {
//         this.i = this.i || new this(...args)
//         return this.i
//     }
//
//     init() {
//         var g = this;
//         var loads = []
//         var names = Object.keys(g.images);
//
//         for (var i = 0; i < names.length; i++) {
//             let name = names[i]
//             var path = gimages[name]
//             let img = new Image()
//             img.src = path
//             img.onload = function () {
//                 g.images[name] = img
//                 loads.push(1)
//                 if (loads.length == names.length) {
//                     log('load images', g.images)
//                     g.__start()
//                 }
//             }
//         }
//     }
//
//     drawImage(img) {
//         this.context.drawImage(img.image, img.x, img.y);
//
//     }
//
//     registerAction(key, callback) {
//         this.actions[key] = callback
//     }
//
//
//     restart(g) {
//         s = Scene(g)
//         this.replaceScene(s)
//     }
//
//
//     update() {
//         this.scene.update()
//     }
//
//
//     draw() {
//         this.scene.update()
//     }
//
//     replaceScene(scene) {
//         this.scene = scene
//     }
//
//
//     imageByName (name) {
//         var g = this
//         var img = g.images[name]
//         var image = {
//             w: img.width,
//             h: img.height,
//             image: img,
//         }
//         return image
//     }
//
//     __start(scene) {
//         var g = this
//         g.runCallback(g)
//     }
//
//
//     runloop() {
//         log(window.fps)
//         // events
//         var g = this
//         var actions = Object.keys(g.actions)
//         for (var i = 0; i < actions.length; i++) {
//             var key = actions[i]
//             if(g.keydowns[key]) {
//                 // 如果按键被按下, 调用注册的 action
//                 g.actions[key]()
//             }
//         }
//         // update
//         g.update()
//         // clear
//         g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
//         // draw
//         g.draw()
//         // next run loop
//         setTimeout(function(){
//             g.runloop()
//         }, 1000/window.fps)
//     }
//
//     runWithScene (scene) {
//         var g = this
//         g.scene = scene
//         // 开始运行程序
//         setTimeout(function(){
//             g.runloop()
//         }, 1000/window.fps)
//     }
//
//
// }
//
//
// var Game = function (fps, images, runCallback) {
//     // images 是一个对象, 里面是图片的引用名字和图片路径
//     // 程序会在所有图片载入成功后才运行
//
//     var canvas = document.querySelector('#id-canvas');
//     var context = canvas.getContext('2d');
//
//     var g = {
//         canvas: canvas,
//         context: context,
//         actions: {},
//         keydowns: {},
//         images: {},
//     }
//
//     g.drawImage = function (gwImage) {
//         g.context.drawImage(gwImage.image, gwImage.x, gwImage.y);
//     }
//
//     // events
//     window.addEventListener('keydown', function (event) {
//         g.keydowns[event.key] = true;
//     })
//
//     window.addEventListener('keyup', function (event) {
//         g.keydowns[event.key] = false;
//     })
//
//     g.registerAction = function (key, callback) {
//         g.actions[key] = callback
//     }
//
//     // 重新启动游戏
//     g.restart = function () {
//         s = Scene(g)
//         g.replaceScene(s)
//     }
//
//     // update
//     g.update = function() {
//         g.scene.update()
//     }
//     // draw
//     g.draw = function() {
//         g.scene.draw()
//     }
//
//     // timer
//     window.fps = 30
//     var runloop = function() {
//         // events
//         var actions = Object.keys(g.actions)
//         for (var i = 0; i < actions.length; i++) {
//             var key = actions[i]
//             if(g.keydowns[key]) {
//                 // 如果按键被按下, 调用注册的 action
//                 g.actions[key]()
//             }
//         }
//         // update
//         g.update()
//         // clear
//         context.clearRect(0, 0, canvas.width, canvas.height)
//         // draw
//         g.draw()
//         // next run loop
//         setTimeout(function(){
//             runloop()
//         }, 1000/window.fps)
//     }
//
//     //
//     var loads = []
//     var names = Object.keys(images)
//     for (var i = 0; i < names.length; i++) {
//         let name = names[i]
//         var path = images[name]
//         let img = new Image()
//         img.src = path
//         img.onload = function () {
//             g.images[name] = img
//             loads.push(1)
//             if (loads.length == names.length) {
//                 log('load images', g.images)
//                 g.__start()
//             }
//         }
//     }
//
//     g.runWithScene = function(scene) {
//         g.scene = scene
//         // 开始运行程序
//         setTimeout(function(){
//             runloop()
//         }, 1000/fps)
//     }
//
//     g.replaceScene = function(scene) {
//         g.scene = scene
//     }
//
//     g.imageByName = function(name) {
//         var img = g.images[name]
//         var image = {
//             w: img.width,
//             h: img.height,
//             image: img,
//         }
//         return image
//     }
//
//     g.__start = function() {
//         runCallback(g)
//     }
//     return g
// }
