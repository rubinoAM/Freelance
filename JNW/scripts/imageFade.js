function imageFade(){
    setTimeout(()=>{ 
        $('#exImg1').css('animation','fadeOut 1s ease 1s 1');
        setTimeout(()=>{$('#exImg1').css('opacity','0')},1000); 
    },1000);
    setTimeout(()=>{ 
        $('#exImg2').css('animation','fadeOut 1s ease 1s 1'); 
        setTimeout(()=>{$('#exImg2').css('opacity','0')},1000); 
    },4000);
    setTimeout(()=>{ 
        $('#exImg3').css('animation','fadeOut 1s ease 1s 1'); 
        setTimeout(()=>{$('#exImg3').css('opacity','0')},1000); 
    },7000);
    setTimeout(()=>{ 
        $('#exImg4').css('animation','fadeOut 1s ease 1s 1'); 
        setTimeout(()=>{$('#exImg4').css('opacity','0')},1000); 
    },10000);
    setTimeout(()=>{ 
        $('#exImg5').css('animation','fadeOut 1s ease 1s 1'); 
        $('#exImg1').css('animation','fadeIn 1s ease 1s 1'); 
        setTimeout(()=>{
            $('#exImg1').css('opacity','1');
            $('#exImg1').css('animation','none');
            $('#exImg2').css('opacity','1');
            $('#exImg2').css('animation','none');
            $('#exImg3').css('opacity','1');
            $('#exImg3').css('animation','none');
            $('#exImg4').css('opacity','1');
            $('#exImg4').css('animation','none');
        },1000);
    },13000);
    
    setInterval(()=>{
        setTimeout(()=>{ 
            $('#exImg1').css('animation','fadeOut 1s ease 1s 1');
            setTimeout(()=>{$('#exImg1').css('opacity','0')},1000); 
        },1000);
        setTimeout(()=>{ 
            $('#exImg2').css('animation','fadeOut 1s ease 1s 1'); 
            setTimeout(()=>{$('#exImg2').css('opacity','0')},1000); 
        },4000);
        setTimeout(()=>{ 
            $('#exImg3').css('animation','fadeOut 1s ease 1s 1'); 
            setTimeout(()=>{$('#exImg3').css('opacity','0')},1000); 
        },7000);
        setTimeout(()=>{ 
            $('#exImg4').css('animation','fadeOut 1s ease 1s 1'); 
            setTimeout(()=>{$('#exImg4').css('opacity','0')},1000); 
        },10000);
        setTimeout(()=>{ 
            $('#exImg1').css('animation','fadeIn 1s ease 1s 1'); 
            setTimeout(()=>{
                $('#exImg1').css('opacity','1');
                $('#exImg1').css('animation','none');
                $('#exImg2').css('opacity','1');
                $('#exImg2').css('animation','none');
                $('#exImg3').css('opacity','1');
                $('#exImg3').css('animation','none');
                $('#exImg4').css('opacity','1');
                $('#exImg4').css('animation','none');
            },1000);
        },13000);
    },16000);
}