class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            this.game.drawImage(e)
        }
    }
    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }

    }

    addElement(image) {
        this.elements.push(image)
    }
}
