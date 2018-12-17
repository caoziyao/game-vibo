class Game {
    constructor(fps, images, callback) {
        window.fps = images
        this.fps = fps
        this.runCallback = callback
        this.images = images
        this.scene = null
        // 事件动作
        this.actions = {}
        // 是否按下键，如果按下则为 True
        this.keydowns = {}

        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height

        // events
        window.addEventListener('keydown', event => {
            // log('event down', event)
            var d = {
                status: true,
                event: event,
            }
            this.keydowns[event.key] = d
        })
        window.addEventListener('keyup', event => {
            log('event up', event)
            var d = {
                status: false,
                event: event,
            }
            this.keydowns[event.key] = d
        })

        this.init()


    }

    static instance(...args) {
        return new this(...args)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    textureByName(name) {
        var name = this.images[name]
        return name

    }

    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
    }

    runloop() {
        var g = this

        // 按键事件
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            // 按键事件
            var status = g.keydowns[key] && g.keydowns[key]['status']
            var event = g.keydowns[key] && g.keydowns[key]['event']
            if (status == true) {
                g.actions[key](event)
            } else if (status == false) {
                g.actions[key](event)
                // log('g', g)
                var d = {
                    status: null,
                    event: event,
                }
                g.keydowns[key] = d
            }
        }

        // 更新位置
        g.update()
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // 绘图
        g.draw()

        setTimeout(function() {
            g.runloop()
        }, 1000 / window.fps)
    }

    runWithScene(scene) {
        var g = this
        g.scene = scene

        setTimeout(function() {
            g.runloop()
        }, 1000 / window.fps)
    }

    __start() {
        log('start game')
        this.runCallback(this)
    }


    init() {
        var g = this
        var loads = []
        // 载入图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                g.images[name] = img
                loads.push(1)
                log('load images', g.images)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }
}
