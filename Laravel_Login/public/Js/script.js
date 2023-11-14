// Valição Form

$(function () {

    var btn = $("#btn");

    btn.click((e) => {
        e.preventDefault();

        var nome = $("#nome").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var ConfirmPassWord = $("#ConfirmPassword").val();
        var mssg = $("#mssg");

        if (nome === "" || email === "" || password === "" || ConfirmPassWord === "") {
            mssg.html('Preencha os campos!')
            mssg.css('color', 'red')
            $("#nome").css('border', '1px solid red')
            $("#email").css('border', '1px solid red')
            $("#password").css('border', '1px solid red')
            $("#ConfirmPassword").css('border', '1px solid red')

            setTimeout(() => {
                mssg.html('');
                $("#nome").css('border', '1px solid #ccc')
                $("#email").css('border', '1px solid #ccc')
                $("#password").css('border', '1px solid #ccc')
                $("#ConfirmPassword").css('border', '1px solid #ccc')
            }, 2000)

            $("#nome").val("");
            $("#email").val("");
            $("#password").val("");
            $("#ConfirmPassword").val("");
        } else if (password === ConfirmPassWord) {
            mssg.html("Login Sucess")
            mssg.css('color', 'green');
            $("#nome").css('border', '1px solid green')
            $("#email").css('border', '1px solid green')
            $("#password").css('border', '1px solid green')
            $("#ConfirmPassword").css('border', '1px solid green')

            setTimeout(() => {
                mssg.html('');
                $("#nome").css('border', '1px solid #ccc')
                $("#email").css('border', '1px solid #ccc')
                $("#password").css('border', '1px solid #ccc')
                $("#ConfirmPassword").css('border', '1px solid #ccc')
            }, 2000)

            $("#nome").val("");
            $("#email").val("");
            $("#password").val("");
            $("#ConfirmPassword").val("");
        } else if (password != ConfirmPassWord) {
            mssg.html('Senhas Diferentes!')
            mssg.css('color', 'red')
            $("#password").css('border', '1px solid red')
            $("#ConfirmPassword").css('border', '1px solid red')

            setTimeout(() => {
                mssg.html('');
                $("#password").css('border', '1px solid #ccc')
                $("#ConfirmPassword").css('border', '1px solid #ccc')
            }, 2000)

            $("#nome").val("");
            $("#email").val("");
            $("#password").val("");
            $("#ConfirmPassword").val("");
        }
    })
})



