class Enemy{
    constructor(game) {
        this.game = game

        this.texture = game.imageByName('enemy')
        this.setup()

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    // 初始化
    setup() {
        this.x = 100
        this.y = 100
        this.w = this.texture.width
        this.h = this.texture.height
        this.health = 3
        this.destination = 500
        this.speed = 2
        this.setupInput()
    }

    center() {
        let x = this.x + this.w / 2
        let y = this.y + this.h / 2
        return Vector.new(x, y)
    }


    setupInput() {

    }

    clone() {
        let c = Gun.new(this.game)

        return c

    }

    poinInFrame({x, y}) {
        let xIn = x >= this.x && x <= this.x + this.w
        let yIn = y >= this.y && y <= this.y + this.h
        return xIn && yIn
    }

    draw() {
        let game = this.game
        game.drawImage(this)
    }



    update() {

        if (this.x > this.destination) {
            // log('敌人已经到达')
        } else {
            this.x += this.speed
        }
    }
}