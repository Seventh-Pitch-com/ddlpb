const bp = 768;
var winW;
var pc;
var sp;

winW = window.innerWidth;
pc = winW >= bp;
sp = winW < bp;

$(function() {

    var $root = $('html, body');

    $('a[href^="#"]').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });

        return false;
    });

    $('.sd[data-s-a2ca26ca-10f6-4e92-a062-259191ed94ef]').removeClass("appear");
    
    $('.sd[data-s-a91f72d1-c298-495c-9c4e-abc891d17d94]').delay(500).queue(function() {
        $(this).removeClass("appear").dequeue();
        $(this).addClass("appear-active").dequeue();
    });
    $('.sd[data-s-2838754f-7be5-4854-a2ff-4a6944f6974a]').delay(1500).queue(function() {
        $(this).removeClass("appear").dequeue();
    });

    if(pc) {
        $('.sd[data-s-149e1d1d-d3d4-4e7e-a9bf-189912d4dad8], .sd[data-s-2d9c3d0f-9e0f-4914-866f-92d2a187b160]').delay(2000).queue(function() {
            $(this).removeClass("appear").dequeue();
            $('.sd[data-s-b7c7c409-b7a7-4311-9c86-cb1cf8561f89]').removeClass("appear").dequeue();
            $('.sd[data-s-1cce7c69-bf41-4093-8105-63fe9e29aa1e]').removeClass("appear").dequeue();
            $('.sd[data-s-f255a4bf-fce5-4647-9986-87f48a069021]').removeClass("appear").dequeue();
        });

        $('.sd[data-s-535cb51f-9f62-4b75-8800-daa370d05f03], .sd[data-s-21a07dfb-b1c7-4eec-bf50-d2f49960c12f], .sd[data-s-dc84cfa4-e18f-48f9-89db-d7749a4a341a]').delay(3000).queue(function() {
            $(this).removeClass("appear").dequeue();
        });

        $('.sd[data-s-91229986-6d78-42f7-9531-0105a95c14b4]').delay(4000).queue(function() {
            $(this).removeClass("appear").dequeue();
        });
    }

    if(sp) {
        $('.sd[data-s-5387b932-7fea-46dd-9f98-609aa7f0908c], .sd[data-s-c845dd1f-6bce-4dde-bf5e-8512de560f81]').delay(2000).queue(function() {
            $(this).removeClass("appear").dequeue();
        });

        $('.sd[data-s-bf91ca48-a952-4fa8-96ef-c9efc2de053e], .sd[data-s-39bc8ad9-9a9b-40e6-87cd-b63909fcaee0]').delay(3000).queue(function() {
            $(this).removeClass("appear").dequeue();
            $('.sd[data-s-0bbfedd1-0a46-4ff9-9149-315781a067f0]').removeClass("appear").dequeue();
            $('.sd[data-s-3fc337e0-e681-497f-9834-02f3b8fcae4b]').removeClass("appear").dequeue();
            $('.sd[data-s-f255a4bf-fce5-4647-9986-87f48a069021]').removeClass("appear").dequeue();
        });
    }

    $(window).scroll(function (){
        slideAnime();
    });

    function slideAnime(){
        $('.sd.appear').each(function(){
            var elemPos = $(this).offset().top + 200;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
                if($(this).hasClass("appear")===true && $(this).hasClass("noScroll") === false) {
                    $(this).removeClass("appear");
                }
            }
        });

    }

    $('.menu_open, .design-canvas__modal a').click(function(){
        $('.design-canvas__modal').toggleClass('isNone');
        $('.sd[data-s-a763429f-0755-45a8-af1d-d7ab832c2087]').toggleClass("appear");
        $('.sd[data-s-500dc9e3-5fa2-47b9-a7d9-0504dbec3ed4]').toggleClass("appear");
    });

    $('.wpcf7-submit').click(function () {

        let error = false;

        $('.wpcf7-validates-as-required').each(function(index) {
            if($(this).val() == ''){
                error = true;
            }
        });

        if(!error) {
            if(!$('.privacy_check').prop('checked')) {
                $('.wpcf7-not-valid-tip.check').show();
                return false;
            }else {
                return;
            }
        }
    });

    // 送信完了時にモーダルを表示する(*3)
    document.addEventListener('wpcf7mailsent', function(e) {
        console.log('お問い合わせ送信完了');
        $("#wpcf7-modal").addClass('active');
    });

    $("#wpcf7-modal").click(function(){
        $("#wpcf7-modal").toggleClass('active');
    });
});
