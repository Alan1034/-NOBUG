/**
 * Created by Administrator on 2017/10/10.
 */
var y=4;
var i=0;
var x=1;
function right() {
    i++;
    y++;
    x++;
    if(y>4){
        y=0
    };
    if(i>4){
        i=0
    };
    if(x>4){
        x=0
    };
    $(".picture").eq(y).addClass("out").siblings().removeClass("out");
    $(".picture").eq(i).addClass("appre").siblings().removeClass("appre");
    $("ul li div").eq(i).addClass("list_on").parent().siblings().children().removeClass("list_on");
    // console.log(i);
    // clearInterval(time2);
};
function left() {
    x--;
    i--;
    y--;
    if(y<0){
        y=4;
    };
    if(x<0){
        x=4;
    };
    if(i<0){
        i=4;
    };

    $(".picture").eq(x).addClass("out").siblings().removeClass("out");
    $(".picture").eq(i).addClass("appre").siblings().removeClass("appre");
    $("ul li div").eq(i).addClass("list_on").parent().siblings().children().removeClass("list_on");
    // console.log(i);
    // clearInterval(time2);
}

