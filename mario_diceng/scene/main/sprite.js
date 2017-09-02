class Sprite {
    constructor(game) {
        this.game = game
        this.titleOffset = 32784
        this.elements = []
        this.onload = false
        this.frameSpace = 10
        this.step = 0

        this.colors = [
            'white',
            '#FE1000',
            '#FFB010',
            '#AA3030',
        ]

        this.bytes = this.nesBytes()

        // this.addElement()
    }


    static new(...args) {
        return new this(...args)
    }


    nesBytes() {
        // let titleOffset = 32784
        let self = this
        let g = this.game
        let request = {
            url: 'nes/mario.nes',
            callback(r) {
                // window.bytes = new Uint8Array(r)
                self.bytes = new Uint8Array(r)
                // let bytes = window.bytes
                self.onload = true
                log('bytes',self.bytes)

            },
        }
        ajax(request)
    }

    addElement(element) {
        this.elements.push(element)
    }

    drawSprite(data) {
        let canvas = e('#id-canvas-sprite')
        let context = canvas.getContext('2d')
        let pixelsPerBlock = 8
        let pixelWidth = 10
        let offset = 0
        let blockSize = pixelsPerBlock * pixelWidth
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 2; j++) {
                let x = j * blockSize
                let y = i * blockSize
                let pixels = data.slice(offset)
                this.drawBlock(context, pixels, x, y, pixelWidth)
                offset += 16
            }
        }
    }

    drawBlock(context, data, x, y, pixelWidth) {
        let colors = this.colors

        let w = pixelWidth
        let h = pixelWidth
        let blockSzie = 8   // 一个图块代表 8 各像素
        let pixelSize = 8   // 一个像素 8 bits

        for (let i = 0; i < blockSzie; i++) {
            let p1 = data[i]
            let p2 = data[i + 8]
            for (let j = 0; j < blockSzie; j++) {
                // 8 byte
                // 78 -> 1001110, 69 -> 1000101
                let c1 = (p1 >> (7 - j)) & 0b00000001
                let c2 = (p2 >> (7 - j)) & 0b00000001
                let pixel = (c2 << 1) + c1
                let color = colors[pixel]
                context.fillStyle = color
                let px = x + j * w
                let py = y + i * h

                context.fillRect(px, py, w, h)
            }
        }
    }

    draw() {
        let g = this.game
        let titleOffset = this.titleOffset

        // drawNes(bytes)
        let step = this.step
        let bytesPerBlock = 16
        let titlesPerSprite = 8
        let bytesPerSprite = bytesPerBlock * titlesPerSprite

        let offset = titleOffset + bytesPerSprite * step

        if (this.onload && this.frameSpace == 0) {
            // log('draw', step)
            let bytes = this.bytes
            this.drawSprite(bytes.slice(offset))
            this.step++
            this.step %= 4
        }


    }

    update() {
        this.frameSpace--
        if (this.frameSpace < 0) {
            this.frameSpace = 25
        }
    }
}
