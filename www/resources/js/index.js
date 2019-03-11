$(document).ready(function () {
    var ua = navigator.userAgent;
    var lang = navigator.language || navigator.userLanguage;
    lang = lang.substr(0,2);
    if(lang === "zh"){
        $('.pc_phone_img').attr("src","resources/img/rainbow_background_phone_zh.png")
        $(".en_lang_btn").removeClass("change-color").addClass("default-color");
        $(".zh_lang_btn").addClass("change-color");
        $(".lang_en_btn").removeClass("change-color").addClass("default-color");
        $(".lang_zh_btn").addClass("change-color");
        $(".download_content").removeClass("en_style");
        $(".mobile_download_content").removeClass("en_style");
        $('.phone_img').attr("src","resources/img/rainbow_background_phone_zh.png")
        changLang("zh");
        localStorage.setItem('lang',lang)
    }else {
        $('.pc_phone_img').attr("src","resources/img/rainbow_background_phone_en.png")
        $(".en_lang_btn").addClass("change-color");
        $(".zh_lang_btn").removeClass("change-color").addClass("default-color");
        $(".lang_en_btn").addClass("change-color");
        $(".download_content").addClass("en_style");
        $(".mobile_download_content").addClass("en_style");
        $(".lang_zh_btn").removeClass("change-color").addClass("default-color");
        $('.phone_img').attr("src","resources/img/rainbow_background_phone_en.png")
        changLang("en");
        localStorage.setItem('lang',lang)
    }
    
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = ipad || ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    if (isIphone) {
        $('.mobile_google_play_content').css('display','none');
        $('.mobile_apk_download_content').css('display','none')
    }else {
        $('.mobile_android_ios_content').css('display','none');
    }
    if (isMobile) {
        $("div.pc").hide();
        $("div.phone").show();
        $("#all").show();
        
    } else {
        $("div.pc").show();
        $("div.phone").hide();
        $("#all").show();
    }
});
function changLang(currnetLang){
    $.i18n.properties({
        name:currnetLang,
        path:"./resources/i18n/",
        mode:"map",
        language:currnetLang,
        callback:function () {
            try {
                $('[data-i18n-text]').each(function () {
                    var html = $(this).html();
                    var reg = /<(.*)>/;
                    if(reg.test(html)){
                        var htmlValue = reg.exec(html)[0];
                        $(this).html(htmlValue + $.i18n.prop($(this).data('i18n-text')))
                    }else {
                        $(this).text($.i18n.prop($(this).data('i18n-text')));
                    }
                })
            }
            catch (e) {
            
            }
        }
    });
};

$('.android_content').hover(function () {
    if(window.innerWidth < 900){
        $('.ios_content').addClass("hide")
    }
},function () {
    $('.ios_content').removeClass("hide")
})

$(".zh_lang_btn").click(function () {
    $('.pc_phone_img').attr("src","resources/img/rainbow_background_phone_zh.png")
    $(".en_lang_btn").removeClass("change-color");
    $(".zh_lang_btn").addClass("change-color");
    $(".download_content").removeClass("en_style");
    $(".font-big").removeClass("hide-text");
    changLang("zh")
    localStorage.setItem('lang','zh')
});

$(".en_lang_btn").click(function () {
    $('.pc_phone_img').attr("src","resources/img/rainbow_background_phone_en.png")
    $(".zh_lang_btn").removeClass("change-color");
    $(".zh_lang_btn").addClass("default-color");
    $(".en_lang_btn").addClass("change-color");
    $(".download_content").addClass("en_style");
    $(".font-big").addClass("hide-text");
    changLang("en")
    localStorage.setItem('lang','en')
});

$(".lang_zh_btn").click(function () {
    $('.phone_img').attr("src","resources/img/rainbow_background_phone_zh.png")
    $(".lang_en_btn").removeClass("change-color");
    $(".lang_zh_btn").addClass("change-color");
    $(".mobile_download_content").removeClass("en_style");
    changLang("zh")
    localStorage.setItem('lang','zh')
});

$(".lang_en_btn").click(function () {
    $('.phone_img').attr("src","resources/img/rainbow_background_phone_en.png")
    $(".lang_zh_btn").removeClass("change-color");
    $(".lang_zh_btn").addClass("default-color");
    $(".lang_en_btn").addClass("change-color");
    $(".mobile_download_content").addClass("en_style");
    changLang("en")
    localStorage.setItem('lang','en')
})
$(".telegram_link_content").click(function () {
    if(localStorage.getItem('lang') === 'zh'){
        window.open('https://t.me/irisnetworkcn')
    }else {
        window.open('https://t.me/irisnetwork')
    }
})
$(".mobile_telegram_link_content").click(function () {
    if(localStorage.getItem('lang') === 'zh'){
        window.open('https://t.me/irisnetworkcn')
    }else {
        window.open('https://t.me/irisnetwork')
    }
})

$(".medium_link_content").click(function () {
    window.open('https://medium.com/irisnet-blog')
})
$(".mobile_medium_link_content").click(function () {
    window.open('https://medium.com/irisnet-blog')
})
$('.mobile_android_ios_content').click(function () {
    $('.mask').css('display',"block")
    $('.mobile_hint_window_content').css('display',"block")
})
$('.mobile_hint_window_content').click(function (e) {
    e.stopPropagation()
    $('.mask').css('display',"block")
    $('.mobile_hint_window_content').css('display',"block")
})
$('.mask').click(function () {
    $('.mask').css('display',"none")
    $('.mobile_hint_window_content').css('display',"none")
})
$('.google_play_btn').click(function () {
    window.open('https://play.google.com/store/apps/details?id=rainbow.wallet')
})
$('.mobile_google_play_content').click(function () {
    window.open('https://play.google.com/store/apps/details?id=rainbow.wallet')
})

$('.download_link_content').click(function () {
    window.open('http://rb-app.oss-cn-shanghai.aliyuncs.com/rainbow-latest.apk')
})
$('.download_link_content').click(function () {
    window.open('http://rb-app.oss-cn-shanghai.aliyuncs.com/rainbow-latest.apk')
})
$('.mask').on('touchmove',function(e){
    e.preventDefault();
})
$('.download_ios_btn').click(function () {
    window.open('itms-services://?action=download-manifest&url=https://rb-app.oss-cn-shanghai.aliyuncs.com/rainbow.plist')
})