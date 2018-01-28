import Player     from './player/index'
import Enemy      from './npc/enemy'
import BackGround from './runtime/background'
import GameInfo   from './runtime/gameinfo'
import Music      from './runtime/music'
import DataBus    from './databus'


let ctx   = canvas.getContext('2d')
let databus = new DataBus()


export default class Game {
    constructor(runCallback) {
        this.runCallback = runCallback
        this.setup()
        this.restart()
    }

    setup() {
        this.images = {
            background:   'images/img/bg_day.png',
            bird0:        'images/img/bird0_0.png',
            bird1:        'images/img/bird0_1.png',
            bird2:        'images/img/bird0_2.png',
            land:         'images/img/land.png',
            pipe_down:    'images/img/pipe_down.png',
            pipe_up:      'images/img/pipe_up.png',
            game_over:    'images/img/text_game_over.png',
            restart:      'images/img/button_ok.png',
            share:        'images/img/button_share.png',
            font_0:       'images/img/font/font_0.png',
            font_1:       'images/img/font/font_1.png',
            font_2:       'images/img/font/font_2.png',
            font_3:       'images/img/font/font_3.png',
            font_4:       'images/img/font/font_4.png',
            font_5:       'images/img/font/font_5.png',
            font_6:       'images/img/font/font_6.png',
            font_7:       'images/img/font/font_7.png',
            font_8:       'images/img/font/font_8.png',
            font_9:       'images/img/font/font_9.png',
            tutorial:     'images/img/tutorial.png',
        }

        this.canvas = canvas
        this.context = this.canvas.getContext('2d')

    }

    runWithScene(scene) {
        this.scene = scene
    }

    __start() {
        let g = this
        this.runCallback(g)
        window.requestAnimationFrame(
          g.loop.bind(g),
          canvas
        )

    }

    restart() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                //log('load images', g.images)
                if (loads.length == names.length) {
                    console.log('restart')
                    g.__start()
                }
            }
        }
    }

    drawImage(element) {
        let img = element
        let w = this.canvas.width
        let h = this.canvas.height
      //   console.log('img', img, element)
        this.context.drawImage(img, 0, 0, w, h)
    }
     //
     // draw() {
     //     let img = this.images
     //     this.drawImage(img['background'])
     //
     // }

     // update
     update() {
         this.scene.update()
     }

     // draw
     draw() {
         this.scene.draw()
     }

     render() {

      }

      cleanRect() {
          let canvas = this.canvas
          this.context.clearRect(0, 0, canvas.width, canvas.height)
      }

      // 实现游戏帧循环
      loop() {
        databus.frame++

        this.update()
        this.cleanRect()
        this.draw()

        window.requestAnimationFrame(
          this.loop.bind(this),
          canvas
        )
      }
}

// export default class Game {
//     constructor(canvas, fps, images, runCallback) {
//         window.fps = fps
//         this.images = images
//         this.runCallback = runCallback
//
//         //
//         this.scene = null
//         this.canvas = canvas
//         this.context = this.canvas.getContext('2d')
//
//         // 事件动作
//         this.actions = {}
//         // 是否按下键，如果按下则为 True
//         this.keydowns = {}
//
//         // events
//         // window.addEventListener('keydown', event => {
//         //     log('event.key', event.key)
//         //     this.keydowns[event.key] = true
//         // })
//         // window.addEventListener('keyup', event => {
//         //     this.keydowns[event.key] = false
//         // })
//
//         this.init()
//     }
//
//     //
//     static instance(...args) {
//         this.i = this.i || new this(...args)
//         return this.i
//     }
//
//     runWithScene(scene) {
//         var g = this
//         g.scene = scene
//         // 开始执行程序
//         setTimeout(function() {
//             g.runloop()
//         }, 1000/window.fps)
//     }
//
//     runloop() {
//         //log(window.fps)
//         var g = this
//         // var actions = Object.keys(g.actions)
//         // for (var i = 0; i < actions.length; i++) {
//         //     var key = actions[i]
//         //     if (g.keydowns[key]) {
//         //         g.actions[key]()
//         //     }
//         // }
//         // update
//         g.update()
//         // clear
//         g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
//         //
//         g.draw()
//         // new run loop
//         setTimeout(function() {
//             g.runloop()
//         }, 1000/window.fps)
//     }
//
//     // update
//     update() {
//         this.scene.update()
//     }
//
//     // draw
//     draw() {
//         this.scene.draw()
//     }
//
//     //
//     registerAction(key, callback) {
//         this.actions[key] = callback
//     }
//
//     __start(scene) {
//     //    log('start game')
//         this.runCallback(this)
//     }
//
//     replaceScene(scene) {
//         this.scene = scene
//
//     }
//
//     // 加载图片
//     imageByName(name) {
//         var g = this
//         var img = g.images[name]
//         // var image = {
//         //     w: img.width,
//         //     h: img.height,
//         //     image: img,
//         // }
//         return img
//     }
//
//     // 画图
//     drawImage(element) {
//         var img = element.image
//         this.context.drawImage(img.texture, element.x, element.y, element.w, element.h)
//     }
//
//     init() {
//         var g = this
//         var loads = []
//         // 预先载入所有图片
//         var names = Object.keys(g.images)
//         for (var i = 0; i < names.length; i++) {
//             let name = names[i]
//             var path = g.images[name]
//             let img = new Image()
//             img.src = path
//             img.onload = function() {
//                 // 存入 g.images 中
//                 g.images[name] = img
//                 // 所有图片都成功载入之后, 调用 run
//                 loads.push(1)
//                 //log('load images', g.images)
//                 if (loads.length == names.length) {
//                     g.__start()
//                 }
//             }
//         }
//     }
// }
