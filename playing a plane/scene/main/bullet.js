class SceneBullet {
    constructor(game) {
        this.game = game
        //this.background = game.imageByName('bg')
        this.image = GuaImage.new(game, 'bullet')
        this.image.w = 5
        this.image.h = 10
        // 图片坐标
        this.x = 165
        this.y = 410
        this.speed = 10
        // 发射子弹
        this.fired = false
        // 子弹消失
        this.killed = false
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    fire() {
        log('发射子弹')
        this.fired = true
    }

    move() {
        this.y -= this.speed
    }

    kill() {
        this.killed = true
    }


}
