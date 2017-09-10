class Game {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback

        //
        this.scene = null
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')

        this.mouseActions = []

        // 事件动作
        this.actions = {}
        // 是否按下键，如果按下则为 True
        this.keydowns = {}

        // events
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', event => {
            this.keydowns[event.key] = false
        })

        // mouse events
        let moving = false
        window.addEventListener('mousedown', event => {
            moving = true
            log(' this.mouseActions',  this.mouseActions)
            for (let a of this.mouseActions) {
                a(event, 'down')
            }

        })

        window.addEventListener('mousemove', event => {
            if (moving) {
                for (let a of this.mouseActions) {
                    a(event, 'move')
                }
            }
        })

        window.addEventListener('mouseup', event => {
            moving = false
            for (let a of this.mouseActions) {
                a(event, 'up')
            }

        })

        this.init()
    }

    //
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    // 注册点击事件
    registerMouse(callback) {
        this.mouseActions.push(callback)
    }

    runWithScene(scene) {
        var g = this;
        g.scene = scene;
        // 开始执行程序
        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
    }

    runloop() {
        //log(window.fps)
        var g = this;
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        //
        g.draw()
        // new run loop
        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
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

    __start(scene) {
    //    log('start game')
        this.runCallback(this)
    }

    replaceScene(scene) {
        this.scene = scene

    }

    // 加载图片
    imageByName(name) {
        var g = this
        var img = g.images[name]
        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img,
        // }
        return img
    }

    // 画图
    drawImage(element) {
        let ele = element
        this.context.drawImage(ele.texture, ele.x, ele.y, ele.w, ele.h)
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
                log('load images', g.images)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }
}
