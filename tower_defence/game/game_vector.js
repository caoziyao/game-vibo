class Vector{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static new(...args) {
        return new this(...args)
    }

    distance(vector) {
        let v = vector
        let dx = Math.abs(v.x - this.x)
        let dy = Math.abs(v.y - this.y)

        return Math.sqrt(dx*dx + dy*dy)
    }

}