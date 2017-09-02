class SceneMain {
    constructor(game) {
        this.game = game
        this.bg = Background.new(game)
        this.sprite = NetSprite.new(game)

        this.setup()

        this.elements = []
        this.addElement(this.bg)
        this.addElement(this.sprite)
    }


    static new(...args) {
        return new this(...args)
    }

    setup() {
        let self = this
        this.game.registerAction('d', function (event) {
            self.sprite.moveRight()
        })
        this.game.registerAction('a', function (event) {
            self.sprite.moveLeft()
        })
        this.game.registerAction('w', function (event) {
            self.sprite.moveUp()
        })
        this.game.registerAction('s', function (event) {
            self.sprite.moveDown()
        })
    }

    addElement(element) {
        this.elements.push(element)
    }

    draw() {
        let g = this.game

        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.draw()
        }
    }

    update() {
        let g = this.game

        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
    }
}
