class GuaScene {
    constructor(game, positionX) {
        this.game = game
        this.positionX = positionX

        this.elements = []

    }

    moveScene(step) {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.moveScene && e.moveScene(step)
        }
    }

    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }

    static new(...args) {
        return new this(...args)
    }

    addElement(element) {
        this.elements.push(element)
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.draw()
        }

    }
}
