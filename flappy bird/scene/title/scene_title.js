class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        // bg
        this.bg = GuaImage.new(game, 'background')
        this.bg.x = 0
        this.bg.y = 0
        this.bg.w = 400
        this.bg.h = 600

        this.bird = Bird.new(game)
        this.bird.x = 100
        this.bird.y = 200



        this.land = GuaImage.new(game, 'land')
        this.land.x = 0
        this.land.y = 500
        this.land.w = 700
        this.land.h = 100
        this.skipCount = 10

        this.pipes = Pipes.new(game)
        // land
        this.addElement(this.bg)

        this.addElement(this.pipes)

        this.addElement(this.land)


        this.addElement(this.bird)



        this.init()
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        super.draw()
        // this.game.context.drawImage(this.background, 0, 0, 400, 600)
        // this.game.context.fillText('按 k 开始游戏', 100, 190)
    }

    update() {
        super.update()

        // land scrop
        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 10
            offset = 45
        }

        this.land.x += offset
    }

    init() {

    }

}
