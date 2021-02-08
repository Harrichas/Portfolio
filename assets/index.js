$(document).ready(function(){
    var phone = $("#phone");
    phone.click(function(){
        console.log("test");
        phone.html("<a href='tel:+15129619228'>5129619228</a>")
    })
})