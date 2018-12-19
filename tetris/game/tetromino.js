class GameTetromino {
    constructor(game, type) {
        this.game = game
		this.size = 20
		this.width = this.size
		this.heigh = this.size
		this.types = ['S', 'Z', 'L', 'J', 'I', 'O', 'T']
		this.type = type
		this.x = 0
		this.y = 0

		this.setup()
    }

	static new(...args) {
		this.i = new this(...args)
		return this.i
	}

	setup() {
		this.m =  {
			S: this.drawBlockS,
			Z: this.drawBlockZ,
			L: this.drawBlockL,
			J: this.drawBlockJ,
			I: this.drawBlockI,
			O: this.drawBlockO,
			T: this.drawBlockT,
		}
	}

	update() {

	}

	draw() {
		var type = this.type
		var _draw = this.m[type]
		// log('draw', _draw)
		// _draw(this.x, this.y)
		this.drawBlockS(this.x, this.y)
	}

	drawBlockI(x, y) {
		var color = 'rgba(0,153,255,0.4)'
		var [w, h] = [this.width, this.heigh]

		this.drawBlock(x, y+h*0, w, h, color)
		this.drawBlock(x, y+h*1, w, h, color)
		this.drawBlock(x, y+h*2, w, h, color)
		this.drawBlock(x, y+h*3, w, h, color)
	}

	drawBlockL(x, y) {
		var color = 'rgba(0,153,255,0.4)'
		var [w, h] = [this.width, this.heigh]

		this.drawBlock(x, y+h*0, w, h, color)
		this.drawBlock(x, y+h*1, w, h, color)
		this.drawBlock(x, y+h*2, w, h, color)
		this.drawBlock(x+w, y+h*2, w, h, color)
	}

	drawBlockJ(x, y) {
		var color = 'rgba(0,153,255,0.4)'
		var [w, h] = [this.width, this.heigh]

		this.drawBlock(x+w, y+h*0, w, h, color)
		this.drawBlock(x+w, y+h*1, w, h, color)
		this.drawBlock(x+w, y+h*2, w, h, color)
		this.drawBlock(x, y+h*2, w, h, color)
	}

	drawBlockZ(x, y) {
		var color = 'rgba(0,153,255,0.4)'
		var [w, h] = [this.width, this.heigh]

		this.drawBlock(x, y, w, h, color)
		this.drawBlock(x+w, y, w, h, color)
		this.drawBlock(x+w, y+h, w, h, color)
		this.drawBlock(x+2*w, y+h, w, h, color)
	}

	drawBlockS(x, y) {
		var color = 'rgba(0,153,255,0.4)'
		var [w, h] = [this.width, this.heigh]

		this.drawBlock(x+w, y, w, h, color)
		this.drawBlock(x+2*w, y, w, h, color)
		this.drawBlock(x, y+h, w, h, color)
		this.drawBlock(x+w, y+h, w, h, color)

	}

	drawBlockO(x, y) {
		var color = 'rgba(0,153,255,0.4)'
		var [w, h] = [this.width, this.heigh]

		this.drawBlock(x, y, w, h, color)
		this.drawBlock(x+w, y, w, h, color)
		this.drawBlock(x, y+h, w, h, color)
		this.drawBlock(x+w, y+h, w, h, color)

	}

	drawBlockT(x, y) {
		var color = 'rgba(0,153,255,0.4)'
		var [w, h] = [this.width, this.heigh]

		this.drawBlock(x, y, w, h, color)
		this.drawBlock(x+w, y, w, h, color)
		this.drawBlock(x+2*w, y, w, h, color)
		this.drawBlock(x+w, y+h, w, h, color)
	}

	drawBlock(x, y, w, h, color) {
		var ctx = this.game.context;
		ctx.fillStyle = color;
		ctx.strokeStyle = 'white'

		ctx.fillRect(x, y, w, h, color)
		ctx.strokeRect(x, y, w, h, color)

	}
}
