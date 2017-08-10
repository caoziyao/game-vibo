
const log = console.log.bind(console)

var downloadFile = function (path, fileName) {
     let a = document.createElement('a');
     //var url = window.URL.createObjectURL(path);
     a.href = path;
     a.download = fileName;
     a.click();
     //window.URL.revokeObjectURL(url);
 }

var filenameFromSrc = function (src) {
    return  src.split('/').pop()
}


 var imagsFromPage = function (elements) {
     var imags = document.querySelectorAll(elements)
     return imags
 }

var downImages = function () {
    var imags = imagsFromPage('#content img')
    for (var i = 0; i < imags.length; i++) {
        var imag = imags[i]
        var currentSrc = imag.currentSrc
        var name = filenameFromSrc(currentSrc)
        console.log(imag, name)

        downloadFile(currentSrc, name)
    }
}
