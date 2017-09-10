class Gun{
    constructor(game) {
        this.game = game

        this.texture = game.imageByName('gun')
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.setup()

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    // 初始化
    setup() {
        this.setupInput()
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
    }
}
