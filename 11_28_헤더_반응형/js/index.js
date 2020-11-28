;(function(window,document,$,undefined){

var hongo = {

    init : function(){
        var that = this;
            that.headerFn();
            //that.modalFn();
    },
    headerFn : function(){  
        var win_dow = $(window);
        var winW = $(window).innerWidth();
        var simpleHeartMenu = $("#header .simple-menu li").eq(2);
        var t=0;

        setTimeout(resizeFn,100);

        function resizeFn(){
            
            winW = $(window).innerWidth();
            simpleHeartMenu = $("#header .simple-menu li").eq(2);
            t=0;
            
            if (winW < 992){
                if(t==0){
                    t=1;
                    simpleHeartMenu.fadeOut(0);
                    $("#header .menu-wrap").fadeOut(0);
                    $(".mobile-menu").show();
                }
            }
            else{
                t=0;
                simpleHeartMenu.fadeIn(0);
                $("#header .menu-wrap").fadeIn(0);
                $(".mobile-menu").hide();

            }
        };

        win_dow.resize(function(){
            resizeFn();
        });
    },

    /*
    modalFn : function(){

        var modal = $(".modal");
        var closeBtn = $(".modal .close-btn");

        setTimeout(countFn,5000);

        function countFn(){
            modal.stop().fadeIn(0);
        }

        closeBtn.on({
            click : function(){
                modal.stop().fadeOut(300);
            }
        });
    }
    */
        
}

hongo.init();

})(window,document,jQuery);
