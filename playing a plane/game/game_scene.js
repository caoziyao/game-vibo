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
            log('e', e)
            this.game.drawImage(e)
        }
    }
    update() {

    }

    addElement(image) {
        this.elements.push(image)
    }
}
