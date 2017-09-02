class SceneMain {
    constructor(game) {
        this.game = game
        this.bg = Background.new(game)
        this.sprite = Sprite.new(game)

        this.elements = []
        this.addElement(this.bg)
        this.addElement(this.sprite)
    }


    static new(...args) {
        return new this(...args)
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
