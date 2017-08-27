
class EditLocalStorage {
    constructor(game) {
        this.game = game
    }

    static new(...args) {
        this.i =  new this(...args)
        return this.i
    }

    loadLocalStorage() {
        var game = this.game
        // localStorage.removeItem('blocks')
        var ps = localStorage.getItem('blocks')
        var ps = ps != null ? JSON.parse(ps) : []

        var blocks = []
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i]
            var b = Block.new(game, p)
            b.x = b.x - b.w / 2
            b.y = b.y - b.h / 2
            blocks.push(b)
        }

        return blocks

    }

    loadPosition() {
        var ps = localStorage.getItem('blocks')
        var ps = ps != null ? JSON.parse(ps) : []

        return ps
    }


    add(position) {
        var ps = this.loadPosition()
        ps.push(position)
        var s = JSON.stringify(ps)
        localStorage.setItem('blocks', s)
    }

    save(position) {
        var s = JSON.stringify(position)
        localStorage.setItem('blocks', s)
    }

    clean() {
        var b = []
        var s = JSON.stringify(b)
        localStorage.setItem('blocks', s)
    }
}
