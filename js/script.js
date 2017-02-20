$(document).ready(function () {
    $('#main').children('.container').addClass('hiddenA').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });
    $('img').addClass('hiddenA').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });
    $('.about-text').addClass('hiddenA').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
    $('.gallery')
        .on('click', 'img.arrow-right', function () {
            var current = $('.current');
            move('right', current);
        })
        .on('click','img.arrow-left',function () {
            var current = $('.current');
            move('left',current);
        });
    bindAnchors();
    var colorItem = $('.color');
    var sectionColor = $('section.current');
    $(colorItem).click(function () {
        var currentColor = $('.current-color');
        if($(currentColor).attr('id') !== $(this).attr('id')){
            $(currentColor).removeClass('current-color');
            switchColor(this, sectionColor);
            $(this).addClass('current-color');
        }
    });

});
function move(position, current) {
    var index = $(current).index();
    var height = $(current).width();
    if (index >= 0 && index <= 2) {
        $(current).removeClass('current');
        if (position == 'left') {
            if (index > 0) {
                index = index - 1;
                $('.slider').animate({
                    'margin-left': '-' + (index * height)
                }, 1000);
                text = $('section:eq(' + index + ')').attr('id');
                renameTitle(index);
            }
        } else {
            if (index < 2) {
                index = index + 1;
                $('.slider').animate({
                    'margin-left': '-' + (index * height)
                }, 1000);
                text = $('section:eq(' + index + ')').attr('id');
                renameTitle(index);
            }
        }
        $('section:eq(' + index + ')').addClass('current');
    }
}

function renameTitle(index) {
    text = $('section:eq(' + index + ')').attr('id');
    $('.gallery h2 b').fadeOut(
        300,
        function () {
            $(this).text(text).fadeIn(300)
        }
    );
}
function bindAnchors() {
    $('a[href*=\\#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
}
function switchColor(colorItem, sectionColor) {
    $(colorItem).click(function () {
        var src = $(sectionColor).css('background-image');
        var color = $(colorItem).attr('id');
        var url = 'url("img/gallery/'+color+'/'+src[src.length - 1];
        $(sectionColor).css('background-image',url);
        var sections = $('.slider section');
        sections.each(function (index) {
            var url = 'url("img/gallery/'+color+'/'+(index+1)+'.jpg';
            $(this).css('background-image',url);
        });
    });
}
function switchColor(colorItem, sectionColor) {
    var src = $(sectionColor).css('background-image');
    var color = $(colorItem).attr('id');
    var url = 'url("img/gallery/'+color+'/'+src[src.length - 1];
    $(sectionColor).css('background-image',url);
    var sections = $('.slider section');
    sections.each(function (index) {
        var url = 'url("img/gallery/'+color+'/'+(index+1)+'.jpg';
        $(this).css('background-image',url);
    });
}