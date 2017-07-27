class SceneHero {
    constructor(game) {
        this.game = game

        this.image = GuaImage.new(game, 'hero')
        this.image.w = this.image.w / 2
        this.image.h = this.image.h / 2
        // 图片坐标
        this.x = 150
        this.y = 450
        this.speed = 10
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    moveLeft() {
        this.x <= 0 ? this.x = 0 : this.x -= this.speed
    }

    moveRight() {
        var w = this.image.w
        this.x >= 400 - w / 2 ? this.x = 400 - w / 2 : this.x += this.speed
    }

    moveUp() {
        var h = this.image.h
        this.y <= 0 / 2 ? this.y = 0 : this.y -= this.speed
    }

    moveDown() {
        var h = this.image.h
        this.y >= 600 - h / 2 ? this.y = 600 - h / 2 : this.y += this.speed

    }
}
