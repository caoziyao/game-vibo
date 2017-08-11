class Levels0 extends GuaScene{
    constructor(game, positionX) {
        super(game)
        this.bg = Background.new(game)
        this.bricks = Bricks.new(game)
        this.clouds = Clouds.new(game)
        this.enemys = Enemys.new(game)
        this.levelMoveStep = 0

        this.baseX = positionX


        this.bg.x = this.baseX
        this.bg.y = 0

        this.clouds.x = this.baseX + this.clouds.x

        for (var i = 0; i < this.enemys.enemys.length; i++) {
            var b = this.enemys.enemys[i]
            // log('b', b)
            b.x =  this.baseX +  b.x
        }


        for (var i = 0; i < this.bricks.bricks.length; i++) {
            var b = this.bricks.bricks[i]
            // log('b', b)
            b.x =  this.baseX + b.x

        }

        this.addElement(this.bg)
        this.addElement(this.bricks)
        this.addElement(this.clouds)
        this.addElement(this.enemys)


    }

    move(step) {
        // this.bg.move(step)
        this.baseX -= step
        this.levelMoveStep = step


        this.bg.x = this.baseX
        this.clouds.x -= step

        // log('basex', this.bg.x)
        for (var i = 0; i < this.bricks.bricks.length; i++) {
            var b = this.bricks.bricks[i]
            // log('b', b)
            // log('b.x', b.x)
            b.x -= step 
        }


        for (var i = 0; i < this.enemys.enemys.length; i++) {
            var e = this.enemys.enemys[i]
            // log('b', b)
            e.x -= step
        }
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
