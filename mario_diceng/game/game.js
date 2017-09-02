class Game {
    constructor(fps, images, callback) {
        this.fps = fps
        this.images = images
        this.runCallback = callback

        this.canvas = e('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height

        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    textureByName(name) {
        let texture = this.images[name]

        return texture
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


    runloop() {
        let g = this
        let fps = this.fps

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
