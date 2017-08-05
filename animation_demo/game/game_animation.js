class GuaAnimation extends GuaScene {
    constructor(game) {
        super(game)


        this.setup()

        this.addElement(this.bg)

        // this.addElement(this.hero)

        // 添加敌人
        // this.addElements()

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }


    // 初始化
    setup() {
    

    }

    draw() {
        super.draw()
    }

    update() {
        super.update()
        var game = this.game

    }

}
