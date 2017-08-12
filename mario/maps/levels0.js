class Levels0 extends GuaScene{
    constructor(game, positionX) {
        super(game)
        this.bg = Background.new(game)
        // this.bricks = Bricks.new(game)
        this.enemys = Enemys.new(game)
        // this.bush = Bush.new(game)
        this.levelMoveStep = 0
        this.baseX = positionX

        this.elementType = {
            bg: Background,
            pipe: Pipe,
            clound: Clouds,
            bricks: Bricks,
            enemys: Enemys,
            bush: Bush,
        }


        this.bg.x = this.baseX
        this.bg.y = 0
        for (var i = 0; i < this.enemys.enemys.length; i++) {
            var b = this.enemys.enemys[i]
            // log('b', b)
            b.x =  this.baseX +  b.x
        }


        this.addElement(this.bg)
        // this.reduxFromCofig()



    }

    renderFromPostion(frame, element, item) {
        var game = this.game
        var cs = this.elementType[element]
        var e = cs.new(game)
        e.createElements && e.createElements(this.baseX, item)

        this.addElement(e)
    }

    renderFromItems(frame, items) {
        var es = Object.keys(items)
        for (var i = 0; i < es.length; i++) {
            var e = es[i]
            var item = items[e]
            // log('es', e)
            this.renderFromPostion(frame, e, item)
        }

        this.addElement(this.enemys)
    }


    moveScene(step) {

        super.moveScene(step)
        this.baseX -= step
        this.levelMoveStep = step

    }


    update() {
        super.update()
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        var g = this.game

        super.draw()
    }
}
