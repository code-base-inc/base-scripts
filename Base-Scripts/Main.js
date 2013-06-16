var home = {
    homeSetup : function (){
        var form = "<form id='register-form' class='form-signin'>"+
        +"<h2 class='form-signin-heading'>Please sign in</h2>"+
        +"<input type='text' class='input-block-level' placeholder='Correo electronico'>"+
        +"<input type='password' class='input-block-level' placeholder='Password'>"+
        +"<button class='btn btn-large btn-primary text-right' type='submit'>Sign in</button>"+
        +"</form>";
        $("body").append(form);
        $("#register-form").dialog({modal:true});
    }
};

$(function(){
    $(".link-register").click(home.homeSetup);
});
