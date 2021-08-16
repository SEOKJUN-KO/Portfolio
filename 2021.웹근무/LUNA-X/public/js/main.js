var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

window.onload = function() {

    $("header").load("common/header.html");
    $("footer").load("common/footer.html");



    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    // course : tab menu
    $("#course .tab-depth-01 ul li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .tab-depth-01 ul li").removeClass("on");
        $("#course .gnb-tab .tab-content").removeClass("current");

        $(this).addClass("on");
        $("." + tab_active).addClass("current");

    });



    $("#course .courseV .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseV .tab-depth-02 li").removeClass("on");
        $("#course .courseV .le-area .cur-info").removeClass("tab-active");
        $("#course .courseV .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");

    });

    $("#course .courseA .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseA .tab-depth-02 li").removeClass("on");
        $("#course .courseA .le-area .cur-info").removeClass("tab-active");
        $("#course .courseA .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");

    });

    $("#course .courseB .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseB .tab-depth-02 li").removeClass("on");
        $("#course .courseB .le-area .cur-info").removeClass("tab-active");
        $("#course .courseB .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");


    });

    $("#course .courseC .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseC .tab-depth-02 li").removeClass("on");
        $("#course .courseC .le-area .cur-info").removeClass("tab-active");
        $("#course .courseC .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");

    });

    // index 
    $(".reservation-zone .tab-menu li").on("click", function() {

        var active_tab = $(this).attr("data-tab");

        $(".reservation-zone .tab-menu li").removeClass("on");
        $(this).addClass("on")

        $(".calendar-area .calendar").removeClass("on");
        $("." + active_tab).addClass("on");

    });


    // reservation_main 

    $("#reservation .fixed-bar .tab-menu li").click(function() {
        var cal_inp = $(this).attr("data-tab");

        $("#reservation .fixed-bar .tab-menu li").removeClass("on");
        $(this).addClass("on");

        $("#reservation .fixed-bar .datepicker .cm-inner").removeClass("show");
        $("." + cal_inp).addClass("show");
        $("#reservation .hole-list .holeArea").hide();

    });

    $("#reservation .fixed-bar .tab-list .depth01 li").on("click", function() {
        $("#reservation .fixed-bar .tab-list .depth01 li").removeClass("on");
        $(this).addClass("on");
    });

    $("#reservation .fixed-bar .tab-list .depth02 li").on("click", function() {
        $("#reservation .fixed-bar .tab-list .depth02 li").removeClass("on");
        $(this).addClass("on");
    });

    /* reservation_step 01 */

    $("#reservation .step-01 .checkList h2").on("click", function() {
        $(this).toggleClass("on");
        $(this).next().slideToggle(300);

    });

    $("#reservation .step-01 input+label").on("click", function() {
        $(this).parents(".sec-ct").slideUp(300);
    });

    $("#reservation .step-01 .rule-box p").on("click", function() {
        $(this).toggleClass("on")
        $("#reservation .step-01 .rule-box ul").toggleClass("show");
    });

    /* reservation_step 02 */

    $("#reservation .step-02 .pay-result .pm-sel .tp-box").click(function() {
        $("#reservation .step-02 .pay-result .pm-sel .tp-box").removeClass("on");
        $(this).addClass("on");
    });

    /* reservation_half_step & reservation_quarter_step */

    $('#reservation .step-03 .companion-inp input[type="text"]').on('input', checkInput);
    $('#reservation .step-03 .companion-inp input[type="tel"]').on('input', checkInput);

    function checkInput() {
        var payName_chk = $('#reservation .step-03 .companion-inp input[type="text"]').val(); // idCheck 변수
        var payTel_chk = $('#reservation .step-03 .companion-inp input[type="tel"]').val(); // idCheck 변수
        var send_active = $('#reservation .common-fr .btn-area .send-btn');

        if (payName_chk === '' || payTel_chk === '') {
            send_active.removeClass('on');
        } else {
            send_active.addClass('on');
        }
    }


    // popup 
    $("#reservation .step-03 .btn-area .next-btn").on("click", function() {
        $(".success").show();
    });
    $("#reservation .step-03 .btn-area .send-btn").on("click", function() {
        $(".warning").show();
    });
    $("#reservation .step-03 .companion-inp .add-btn").on("click", function() {
        $(".ph-book").show();
    });
    $(".popup .popFoot input").on("click", function() {
        $(".popBg").hide();
    });
    $(".popup .popHead .hide-btn").on("click", function() {
        $(".popBg").hide();
    });

    // popup mypage 
    $("#mypage .my-status .payer-status .req-btn .cancelBtn").on("click", function() {
        $(".cancelPop").show();
        // $(".blockPop").show();
    });
    $("#mypage .my-status .payer-status .req-btn .payReq").on("click", function() {
        $(".requestPop").show();

    });
    $("#mypage .my-status .payer-status .req-btn .changePayer").on("click", function() {
        $(".changePop").show();

    });
    $("#mypage .my-status .player-status .reg-btn").on("click", function() {
        $(".changePop").show();

    });

    var this_pg = $("aside .menu-bar li.on");
    $(this_pg).children().append("<i class='fas fa-arrow-right'></i>");




    // pay_type href 
    $("#reservation .step-02 .pay-result .pm-sel .all-pay").click(function() {
        $("#reservation .common-fr .btn-area .next-btn").attr("href", "/reservation_all_step03");
    });
    $("#reservation .step-02 .pay-result .pm-sel .half-pay").click(function() {
        $("#reservation .common-fr .btn-area .next-btn").attr("href", "/reservation_half_step03");
    });
    $("#reservation .step-02 .pay-result .pm-sel .third-pay").click(function() {
        $("#reservation .common-fr .btn-area .next-btn").attr("href", "/reservation_third_step03");
    });
    $("#reservation .step-02 .pay-result .pm-sel .quarter-pay").click(function() {
        $("#reservation .common-fr .btn-area .next-btn").attr("href", "/reservation_quarter_step03");
    });




    // reservation_payment
    $("#payment .pay-inp .tab-menu label").click(function() {

        var inp_active = $(this).attr("data-tab");
        $("#payment .pay-inp .pay-form .cm-inner").removeClass("show");
        $("." + inp_active).addClass("show");
    });



    // pc 감지
    if (!isMobile) {

    };

    // mobile 감지
    if (isMobile) {

        $(document).on("click", "header .m-menu", function() {
            $("header .open-menu").show();
        })

        $(document).on("click", "header .open-menu .head .close-btn", function() {
            $("header .open-menu").hide();
        });

        var slide_btn_show = 700;
        $(window).scroll(function() {
            var window = $(this).scrollTop();
            if (slide_btn_show <= window) {
                $("footer.scrollBtn").addClass("on");
            } else {
                $("footer.scrollBtn").removeClass("on");
            }
        })

    };


};

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}