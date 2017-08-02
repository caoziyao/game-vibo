class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.debugModeEnabled = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            if (e.alive) {
                this.game.drawImage(e)
            }

        }
    }
    update() {
        if (this.debugModeEnabled) {
            for (var i = 0; i < this.elements.length; i++) {
                var e = this.elements[i]
                e.debug && e.debug()
            }
        }

        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }

    }

    addElement(image) {
        this.elements.push(image)
    }
}
