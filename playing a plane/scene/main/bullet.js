class SceneBullet {
    constructor(game) {
        this.game = game
        //this.background = game.imageByName('bg')
        this.image = GuaImage.new(game, 'bullet')
        this.w = 5
        this.h = 10
        // 图片坐标
        this.x = 165
        this.y = 410
        this.speed = config.bullet_speed.value
        // 发射子弹
        this.fired = false
        // 子弹消失
        this.alive = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }


    move() {
        //this.y -= this.speed
    }

    kill() {
        this.alive = false
    }

    update() {
        this.move()
    }

    debug() {
        this.speed = config.bullet_speed.value
    }

    collide(enemy) {
        // 子弹击中
        return  rectIntersects(this, enemy) || rectIntersects(enemy, this)
    }

    draw() {
        this.game.drawImage(this)
    }

}
