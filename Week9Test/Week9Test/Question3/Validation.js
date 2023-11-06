function validate() {
    let x = document.forms["form"]["name"].value;
    if (x == "") {
      alert("Name cannot be Empty");
      return false;
    }

    let y = document.forms["form"]["email"].value;
    if (y == "") {
      alert("Email cannot be Empty");
      return false;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.value.match(mailformat)){
        alert("Email format is wrong");
        return false;
    }
  }