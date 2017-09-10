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

    // var img = element.image
    // this.context.drawImage(img.texture, element.x, element.y, element.w, element.h)

    draw() {
        let game = this.game
        game.drawImage(this)
    }



    update() {
    }
}
