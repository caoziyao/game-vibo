export default  class GuaAnimation  {
    constructor(game) {
        this.game = game
        this.alive = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    frames() {
        return this.animations[this.animationName]
    }

    draw() {
    }

    changeAnimation(name) {
        this.animationName = name
    }

    update() {
    }

}
