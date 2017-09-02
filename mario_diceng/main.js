/*
    8 * 8 像素每个
    2bits 每个像素
    16 bytes 一个图块
    每页 80*80 个图块，就是高宽各 64 像素
*/

const actions = {
    change_offset(offset) {
        window.offset += offset
        e('h3').innerHTML = window.offset
        drawNes(window.bytes)
    },

    pause() {
        window.paused = !window.paused
    }
}

const binEvents = () => {
    e('.gw-controls').addEventListener('click', event => {
        let action = event.target.dataset.action
        let offset = Number(event.target.dataset.offset)
        actions[action] && actions[action](offset)

    })

    window.addEventListener('keydown', event => {
        if (event.key == 'p') {
            window.paused = !window.paused
        }
    })
}


//
const __main = () => {
    // 32784
    window.paused = false
    window.offset = 32784

    binEvents()


    let images = {
        bg: 'img/overworld_bg.png',
    }

    let game = Game.instance(30, images, (game) => {
        let s = SceneMain.new(game)

        game.runWithScene(s)
    })
}

__main()
