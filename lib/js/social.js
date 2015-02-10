$(document).ready(function() { 
    $(".social-button-item").on( "click", function() {
        
        var id = $(this).attr('id');
        console.log(id);
        var bg = $(this).css("background-image");
        
        console.log(bg);
        
        switch(id){
                
        case "button-flick":
        //toggle div state content-social
        
        //switch pin social-pin
        $("#social-pin").css({'background-image':'url(./image/pin-twitter.png)','width': '153px','height':'38px','float':'left','margin': '-54px 0 0 136px'}); 
        $("#button-flick").css("background-image","url(./image/social-button-twitter.png)"); 
       
        
        
        break ;
        
        case "button-fac":
       
         $("#social-pin").css({'background-image':'url(./image/pin-face.png)','width': '147px','height':'60px','float':'left','margin': '-54px 0 0 131px'}); 
        $("#button-flick").css("background-image", "url(./image/social-button-twitter.png)"); 
        break ;
        
        case "button-youtube":
        $("#content-social").css("background-color","blue")
        $("#social-pin").css({'background-image':'url(./image/pin-youtube.png)','width': '127px','height':'67px','float':'left','margin': '-54px 0 0 159px'});  
        $("#button-flick").css("background-image", "url(./image/social-button-twitter.png)"); 
        break ;                
        
        case "button-twitter":
        
         $("#social-pin").css({'background-image':'url(./image/pin-twitter.png)','width': '153px','height':'38px','float':'left','margin': '-54px 0 0 136px'}); 
        $("#button-flick").css("background-image", "url(./image/social-button-flikr.png)"); 
        break ;
        }
    });
});