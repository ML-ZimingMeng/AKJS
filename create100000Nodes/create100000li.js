window.onload = function() {
    var ul = document.getElementsByTagName("ul");
    var arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push(i);
    }
    ul[0].innerHTML = '<li>' + arr.join('</li><li>') + '</li>'
}