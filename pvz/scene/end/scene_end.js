class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)

        this.setup()
        // land

    }


    setup() {
        var game = this.game

        this.textGameOver = GuaImage.new(game, 'game_over')
        this.textGameOver.x = 100
        this.textGameOver.y = 200


        this.bg = GuaImage.new(game, 'background')
        this.bg.x = 0
        this.bg.y = 0
        this.bg.w = 400
        this.bg.h = 600

        this.addElement(this.bg)

        this.addElement(this.textGameOver)

    }



    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        super.draw()

    }

    update() {

    }


}
