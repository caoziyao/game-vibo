import SceneMain  from './scene/main/scene'
import Game       from './game/game'
/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    //   this.authorize()
      this.restart()
  }

  authorize() {
      wx.authorize({
      scope: 'scope.record'
    })
  }

  restart() {
      let game = Game.new((g) => {
          var s = SceneMain.new(g)
          g.runWithScene(s)
      })
  }
}
