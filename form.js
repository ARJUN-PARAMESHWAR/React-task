function userdetails() {
    var username = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;
    console.log(document.getElementById("input1").value);
    console.log(document.getElementById("input2").value);


    if (username.length >= 1 && password.length >= 1) {
        window.location.assign("../Form_html/form0_index.html");
        console.log(username);
    }

    else {
        alert("Please enter username and password correctly");
    }

}

function submit(){
    alert("Your response have been successfully submitted.");
}