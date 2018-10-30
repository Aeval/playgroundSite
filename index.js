$('#color').on('click', function(){
    if($('#main').attr("style")){
        $('#main').removeAttr("style");
    }else{
    $('#main').attr("style", "background-color: black;");
    }
});