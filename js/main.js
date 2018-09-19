$('.txt').each(function(){
    var cls = $(this).attr('placeholder').charAt(0);
    $(this).on('blur',function(){
        if($(this).val().trim() !=""){         
            $('.'+cls).addClass("written")
        } else {
            $('.'+cls).removeClass("written")
        }
    })
    $(this).focus(function(){
        $('.'+cls).addClass("written");
    })
})

