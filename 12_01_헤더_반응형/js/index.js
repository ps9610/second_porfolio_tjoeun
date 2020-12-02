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
        var menuWrap = $("#header .menu-wrap");
        var aside4Btn1AndSide1 = $("#header .aside4-btn1, #header .aside-side1");
        var asideSide1 = $("#header .aside-side1");
        var aside4Btn2 = $("#header .aside4-btn2");
        var asideSide2 = $("#header .aside-side2");
        var aside4Btn3 = $("#header .aside4-btn3");
        var asideSide3 = $("#header .aside-side3");
        var mobileMenuBar = $("#header .mobile");
        var mobileMenu = $("#header .mobile-menu")

        setTimeout(resizeFn,100);

        function resizeFn(){
            
            winW = $(window).innerWidth();
            simpleHeartMenu = $("#header .simple-menu li").eq(2);
            t=0;
            menuWrap = $("#header .menu-wrap");
            mobileMenuBar = $(".mobile");
            
            if (winW < 992){
                if(t==0){
                    t=1;
                    simpleHeartMenu.fadeOut(0);
                    menuWrap.fadeOut(0);
                    mobileMenuBar.show();
                }
            }
            else{
                t=0;
                simpleHeartMenu.fadeIn(0);
                menuWrap.fadeIn(0);
                mobileMenuBar.hide();

            }
        };

        win_dow.resize(function(){
            resizeFn();
        });



        mobileMenuBar.on({
            click:function(){
                mobileMenu.slideDown(500);
                $(this).addClass("addClose");
            }
        })
        




        aside4Btn1AndSide1.on({
            mouseenter:function(){
                asideSide1.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide1.stop().fadeIn(400);
            }
        })
        aside4Btn1AndSide1.on({
            mouseleave : function(){
                asideSide1.stop().fadeOut(400);
                
            }
        })       
        aside4Btn2.on({
            mouseenter:function(){
                asideSide2.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide2.stop().fadeIn(400);
            }
        })
        aside4Btn2.on({
            mouseleave : function(){
                asideSide2.stop().fadeOut(400);
            }
        })

        aside4Btn3.on({
            mouseenter:function(){
                asideSide3.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide3.stop().fadeIn(400);
            }
        })
        aside4Btn3.on({
            mouseleave : function(){
                asideSide3.stop().fadeOut(400);
            }
        })
        
         
        $(".li-wrap").on({
            mouseenter:function(){
                $(".aside").stop().slideUp(0);
                $(this).next().stop().slideDown(500);
                //❓ 여기서 왜 next()가 들어가는지 모르겠어요😭
                // $(this)는 console.log(this)를 입력해서, li-wrap의 a 링크라는 건 알았는데요,
                // $(this).next()면 해당 클래스의 다음 요소여야 하지 않나요..?
            },
            focusin:function(){
                $(".aside").stop().slideUp(0);
                $(this).next().stop().slideDown(500);
            }
        }) 
        $(".nav").on({
            mouseleave:function(){
                $(".aside").stop().slideUp(300);
            }
        })
    },

    /*
    modalFn : function(){

        var htmlRoot = $("html");
        var modal = $(".modal");
        var closeBtn = $(".modal .close-btn");

        setTimeout(countFn,5000);

        function countFn(){
            modal.stop().fadeIn(0);
            htmlRoot.addClass("addScroll");
        }

        closeBtn.on({
            click : function(){
                modal.stop().fadeOut(300);
                htmlRoot.removeClass("addScroll");
            }
        });
    }
    */



}

hongo.init();

})(window,document,jQuery);
