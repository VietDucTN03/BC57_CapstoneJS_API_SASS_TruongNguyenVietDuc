document.querySelector("#btn-submit").onclick = function (e) {
  e.preventDefault();
  var content = new User();
  content.email = document.querySelector("#email").value;
  content.password = document.querySelector("#password").value;
  content.name = document.querySelector("#name").value;
  var genderValue = document.querySelector('input[name="Gender"]:checked');
  if (genderValue) {
    content.gender = genderValue.value === "Male"; // true if Male, false otherwise
  }
  content.phone = document.querySelector("#phone").value;
  console.log(content);

  axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: content,
  })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (err) {
      console.error("Error:", err);
    });
};
