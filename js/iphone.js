$(function(){
    var btn=$(".max-nav .nav .btn");
    var sousuo=$(".max-nav .nav .sousuo");
    var sbox=$(".search-box");
    var inputs=$(".inputs");
    var lis=$(".max-nav .search-box li ");
    var a=$(".max-nav .nav a").not(".logo");
    sousuo.click(function (){
        a.addClass('scale');
        btn.show(200);
        sbox.show();
        inputs.addClass('active');
        // lis.addClass('active');
    });
    btn.click(function (){
        sbox.hide();
        btn.hide();
        a.removeClass('scale');
    })
// xiaoping
    var min=$('.min-nav')
    var memu=$('.memu',min)
    var list=$('.nav-list')

console.log(memu)
    var ff=true;
    memu.click(function(){
        if(ff){
            list.show()
        }else if(!ff){
            list.hide()
        }
    })




 // banner
    var divs=$('.banner div')
    // var left=$('.')
    var index=0;
    var next=0;
    divs.css({left:'100%'}).eq(0).css({left:0})
    setInterval(move,1000);
        function move() {
        next++;
        if(next==divs.length){
            next=0;
        }
        divs.eq(index).css({
            transition:"all .6s",
            left:'-100%'
            // backgroundSize:parseInt($(this.css('backgroundSize')));
        }).end().eq(next).css({
            left:'0',
            transition:"left 700ms"
        })
        index=next;
    }



})

