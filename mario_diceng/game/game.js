class Game {
    constructor(fps, images, callback) {
        this.fps = fps
        this.images = images
        this.runCallback = callback

        // 事件动作
        this.actions = {}
        // 是否按下键，如果按下则为 True
        this.keydowns = {}

        this.canvas = e('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height


        this.setup()

        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    setup() {
        window.addEventListener('keydown', event => {
            var d = {
                status: true,
                event: event,
            }
            this.keydowns[event.key] = d
        })

        window.addEventListener('keyup', event => {
            var d = {
                status: false,
                event: event,
            }
            this.keydowns[event.key] = d
        })
    }

    textureByName(name) {
        let img = {}
        let texture = this.images[name]
        img.texture = texture
        img.w = texture.width
        img.h = texture.height
        img.x = 0
        img.y = 0

        return img
    }

    init() {
        let g = this
        let loads = []
        // 载入图片
        let names = Object.keys(g.images)
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = g.images[name]
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

    __start() {
        let g = this

        g.runCallback(g)
    }


    runWithScene(scene) {
        let g = this
        this.scene = scene


        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    update() {
        this.scene.update()
    }

    draw() {

        this.scene.draw()

    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }


    runloop() {
        let g = this
        let fps = this.fps

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
}
