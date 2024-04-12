document.getElementById("sginupForm").onsubmit = function(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Veuillez remplir tous les champs.");
    event.preventDefault(); // منع إرسال النموذج إذا كانت هناك حقول فارغة
  }
};