let buttoncreate = document.getElementById("buttoncreate");
let inputerror = document.getElementById("inputerror");
let password_condition_error = document.getElementById("password_condition_error")


function seifgg() {
    console.log("ser");
}

buttoncreate.addEventListener("click", function () {
    let prenom = document.getElementById("prenom");
    let nom = document.getElementById("nom");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let phonenumber = document.getElementById("phonenamber");
    let date = document.getElementById("date");
    let password = document.getElementById("password");
    let rpassword = document.getElementById("rpassword")
    
    if (prenom.value == "" || nom.value == "" || username.value == "" || email.value == "" || String(phonenumber.value) == "" || String(date.value) == "" || password.value == "" || rpassword.value == "") {
        if (prenom.value == "") {
            prenom.style.border = "2px solid rgb(255, 0, 0)"
        }

        prenom.addEventListener("focus", () => {
            prenom.style.border = "2px solid rgb(78, 68, 68)"
        })

        if (nom.value == "") {
            nom.style.border = "2px solid rgb(255, 0, 0)"
        }

        nom.addEventListener("focus", () => {
            nom.style.border = "2px solid rgb(78, 68, 68)"
        })

        if (username.value == "") {
            username.style.border = "2px solid rgb(255, 0, 0)"
        }

        username.addEventListener("focus", () => {
            username.style.border = "2px solid rgb(78, 68, 68)"
        })

        if (email.value == "") {
            email.style.border = "2px solid rgb(255, 0, 0)"
        }

        email.addEventListener("focus", () => {
            email.style.border = "2px solid rgb(78, 68, 68)"
        })

        if (String(phonenumber.value) == "") {
            phonenumber.style.border = "2px solid rgb(255, 0, 0)"
        }

        phonenumber.addEventListener("focus", () => {
            phonenumber.style.border = "2px solid rgb(78, 68, 68)"
        })

        if (String(date.value) == "") {
            date.style.border = "2px solid rgb(255, 0, 0)"
        }

        date.addEventListener("focus", () => {
            date.style.border = "2px solid rgb(78, 68, 68)"
        })

        if (password.value == "") {
            password.style.border = "2px solid rgb(255, 0, 0)"
        }

        password.addEventListener("focus", () => {
            password.style.border = "2px solid rgb(78, 68, 68)"
        })

        if (rpassword.value == "") {
            rpassword.style.border = "2px solid rgb(255, 0, 0)"
        }

        rpassword.addEventListener("focus", () => {
            rpassword.style.border = "2px solid rgb(78, 68, 68)"
        })
    } else {
        if (password.value == rpassword.value) {
            register()
        } else{ 
            rpassword.style.border = "2px solid rgb(255, 0, 0)"
        password.style.border = "2px solid rgb(255, 0, 0)"
        rpassword.addEventListener("focus", () => {
            rpassword.style.border = "2px solid rgb(78, 68, 68)"
        })
        password.addEventListener("focus", () => {
            password.style.border = "2px solid rgb(78, 68, 68)"
        })
    }
    }
})
let buttonseconnecter = document.getElementById("buttonseconnecter")


function register() {
            let prenomd = document.getElementById("prenom").value;
            let nomd = document.getElementById("nom").value;
            let username = document.getElementById("username").value;
            let emaild = document.getElementById("email").value;
            let phonenumber = document.getElementById("phonenamber");
            let date = document.getElementById("date").value;
            let password = document.getElementById("password").value;
            var id = Math.floor(parseFloat(Math.random()).toFixed(9) * 9000000000) + 1;
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.responseText.indexOf("pass") >= 0) {
                        window.location.href = 'http://192.168.1.9/my_first_site_web/login/index_login.html'
                    }
                }
            };

            xhr.open("POST", "data_php_createaccount.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(
                "prenom=" +
                prenomd +
                "&nom=" +
                nomd +
                "&username=" +
                username +
                "&id=" +
                id +
                "&email=" +
                emaild +
                "&phonenumber=" +
                phonenumber.value +
                "&date=" +
                date +
                "&password=" +
                password
            );
}

