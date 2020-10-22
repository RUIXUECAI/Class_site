var asin = a*Math.sin(Math.atan((y2-y1)/(x2-x1)));
var acos = a*Math.cos(Math.atan((y2-y1)/(x2-x1)))
var x3 = x1+asin;
var y3 = y1-acos;
var x4 = x1-asin;
var y4 = y1+acos;
var x5 = x2+asin;
var y5 = y2-acos;
var x6 = x2-asin;
var y6 = y2+acos;
　　x1、y1和x2、y2就是两个端点，从而求出了四个端点的坐标。这样一来，剪辑区域就是圈加矩形，代码组织起来就是：

var hastouch = "ontouchstart" in window?true:false,//判断是否为移动设备
    tapstart = hastouch?"touchstart":"mousedown",
    tapmove = hastouch?"touchmove":"mousemove",
    tapend = hastouch?"touchend":"mouseup";

canvas.addEventListener(tapstart , function(e){
    e.preventDefault();

    x1 = hastouch?e.targetTouches[0].pageX:e.clientX-canvas.offsetLeft;
    y1 = hastouch?e.targetTouches[0].pageY:e.clientY-canvas.offsetTop;

　　//鼠标第一次点下的时候擦除一个圆形区域，同时记录第一个坐标点
    ctx.save()
    ctx.beginPath()
    ctx.arc(x1,y1,a,0,2*Math.PI);
    ctx.clip()
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.restore();

    canvas.addEventListener(tapmove , tapmoveHandler);
    canvas.addEventListener(tapend , function(){
        canvas.removeEventListener(tapmove , tapmoveHandler);
    });
　　//鼠标移动时触发该事件
    function tapmoveHandler(e){
        e.preventDefault()
        x2 = hastouch?e.targetTouches[0].pageX:e.clientX-canvas.offsetLeft;
        y2 = hastouch?e.targetTouches[0].pageY:e.clientY-canvas.offsetTop;

　　　　//获取两个点之间的剪辑区域四个端点
        var asin = a*Math.sin(Math.atan((y2-y1)/(x2-x1)));
        var acos = a*Math.cos(Math.atan((y2-y1)/(x2-x1)))
        var x3 = x1+asin;
        var y3 = y1-acos;
        var x4 = x1-asin;
        var y4 = y1+acos;
        var x5 = x2+asin;
        var y5 = y2-acos;
        var x6 = x2-asin;
        var y6 = y2+acos;

　　　　//保证线条的连贯，所以在矩形一端画圆
        ctx.save()
        ctx.beginPath()
        ctx.arc(x2,y2,a,0,2*Math.PI);
        ctx.clip()
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.restore();

　　　　//清除矩形剪辑区域里的像素
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(x3,y3);
        ctx.lineTo(x5,y5);
        ctx.lineTo(x6,y6);
        ctx.lineTo(x4,y4);
        ctx.closePath();
        ctx.clip()
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.restore();

　　　　//记录最后坐标
        x1 = x2;
        y1 = y2;
    }
})
