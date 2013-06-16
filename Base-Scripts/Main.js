var home = {
    homeSetup : function (){
        var form = "<form id='register-form' title='Registro' class='form-signin'>\n\
        <h2 class='form-signin-heading'>Registra tu empresa</h2>\n\
        <input id='reg-company-name' type='text' class='input-block-level' placeholder='Nombre de la empresa'>\n\
        <input id='reg-email' type='text' class='input-block-level' placeholder='Correo electronico'>\n\
        <input id='reg-pass' type='password' class='input-block-level' placeholder='Contraseña'>\n\
        <button id="reg-btn" class='btn btn-large btn-primary text-right' type='submit'>Registrar</button>\n\
        </form>";
        $("body").append(form);
        $("#register-form").dialog({modal:true});
        $("#reg-btn").click(home.register);
    },
            
    register : function(){
        var args = {
                action:"put",
                name:$("#reg-email").val(),
                lastName:$("#reg-company-name").val(),
                password:$("#reg-pass").val()
        };
        
        $.ajax({ 
            url:"test-aplications/profile/user",
            dataType:"json",type:"POST", 
            data: args, 
            success:function(data){
                console.log(JSON.stringify(data));
            }, 
            error:function(data){
                console.log(JSON.stringify(data));
            }
        });
    }
};

$(function(){
    $(".link-register").click(home.homeSetup);
});
