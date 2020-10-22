var img = document.getElementById('img');
document.onmousemove = function (e) {
    e = e || window.event;
    img.style.position = 'absolute';
    img.style.left = getPage(e).pageX + 'px';
    img.style.top = getPage(e).pageY + 'px';

}
function getScroll() {
    return {
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
    }
}
function getPage(e) {
    return {
        pageX: e.clientX + getScroll().scrollLeft,
        pageY: e.clientY + getScroll().scrollTop
    }
}
