$(document).ready(()=>{
    const curDate = new Date();
    $('#footerYear').html(curDate.getFullYear());

    $('#navToggle').click(()=>{
        if($('#navList').css('display') === 'none'){
            $('#navList').css('display','flex');
        } else {
            $('#navList').css('display','none');
        }
    });

    $(window).resize(()=>{
        if($(window).width() >= 700){
            $('#navList').css('display','flex');
        } else if($(window).width() < 700){
            $('#navList').css('display','none');
        }
    });

    imageFade();
    contactForm();
});