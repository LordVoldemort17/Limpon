
$(document).ready(function(){
    $(".btn-leonel").click(function(){
        $(".btn-leonel").hide();
            $(".social-leonel").fadeIn(500);
    });
});

$(document).ready(function(){
    $(".btn-alberto").click(function(){
        $(".btn-alberto").hide();
            $(".social-alberto").fadeIn(500);
    });
});


$(document).ready(function(){
    $(".btn-sicilia").click(function(){
        $(".btn-sicilia").hide();
            $(".social-sicilia").fadeIn(500);
    });
    $(".btn-menu").click(function(){
        $(".modal").show()
    })
    $(".btn-close").click(function(){
        $(".modal").hide()
    })
});
      