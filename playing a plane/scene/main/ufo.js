class UFO {
    constructor(game, name) {
        this.game = game
        //this.background = game.imageByName('bg')
        this.image = GuaImage.new(game, name)
        // 图片坐标
        this.w = this.image.w
        this.h = this.image.h
        this.x = randonBetween(0, 400)
        this.y = 1
        this.speed = 2
        this.alive = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }


    move() {
        this.y += this.speed
    }

    kill() {
        this.alive = false
    }

    update() {
        this.move()
        if (this.y >= 600) {
            this.y = 0
            this.x = randonBetween(0, 400)
            this.alive = true
        }
    }

    debug() {
        //this.speed = config.bullet_speed.value
    }

    collide(enemy) {
        // 子弹击中
        return  rectIntersects(this, enemy) || rectIntersects(enemy, this)

    }

    draw() {
        this.game.drawImage(this)
    }

}
