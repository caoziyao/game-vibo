class Background {
    constructor(game) {
        this.game = game

        this.elements = []

        this.bg = game.textureByName('bg')
        this.bg.w = game.width
        this.bg.h = game.height

        this.addElement(this.bg)
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
            g.context.drawImage(e.texture, e.x, e.y, e.w, e.h)

        }
    }

    update() {

    }
}
