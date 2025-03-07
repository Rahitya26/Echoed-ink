
$(document).ready(function(){

    $(".view").on("click",function(){
        let btn = $(this);
        let blog = btn.siblings(".content");
        if(btn.text()=="View more"){
            blog.text(blog.data("entire"));
            btn.text("View less");
        }
        else{
            let shorter = blog.data("entire").substring(0,400);
            blog.text(shorter);
            btn.text("View more");
        }
    });
});


