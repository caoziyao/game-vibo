class Tower{
    constructor(game) {
        this.game = game

        this.texture = game.imageByName('gun')
        this.setup()

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    // 初始化
    setup() {
        this.x = 300
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.attack = 1
        this.range = 100
        this.target = null

        this.setupInput()
    }


    setupInput() {

    }

    clone() {
        let c = Gun.new(this.game)

        return c

    }

    center() {
        let x = this.x + this.w / 2
        let y = this.y + this.h / 2
        return Vector.new(x, y)
    }

    canAttack(enemy) {
        let e = enemy
        let enemyExist = e !== null
        let enemyInRange = false
        if (enemyExist) {
            enemyInRange = this.center().distance(e.center()) < this.range
        } else {
            enemyInRange = false

        }
        // 当敌人远去，设置 target = null
        if (!enemyInRange) {
            this.target = null
        }
        return enemyInRange

        // log('dist', dist)

    }

    findTarget(enemies) {
        for (let e of enemies) {
            // do what, 不 do how
            if (this.canAttack(e) ) {
                this.target = e
                break
            }
        }
    }

    poinInFrame({x, y}) {
        let xIn = x >= this.x && x <= this.x + this.w
        let yIn = y >= this.y && y <= this.y + this.h
        return xIn && yIn
    }

    draw() {
        let game = this.game
        game.drawImage(this)
    }



    update() {
        if (this.canAttack(this.target)) {
            log('攻击敌人')
        }
    }
}