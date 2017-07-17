var Block = function (game, position) {
    var p = position
    // var image = imageFromPath('block.png');
    var img = game.imageByName('block')
    var o = {
        x: p.x,
        y: p.y,
        alive: true,
    };
    o.image = img.image
    o.w = img.w
    o.h = img.h

    o.kill = function () {
          o.alive = false
    }



    o.collide = function (b) {
      //return false
        // log('block', o.alive, b)
      return o.alive && (rectIntersects(o, b) || rectIntersects(b, o));
    }

    return o;
}
