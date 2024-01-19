const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // 기존 기능 차단 _ submit 새로고침 효과에 대해서 적용

  let useremail = event.target.eMail.value; // 현재 id가 기재된 위치는 html name 값이다.
  let username = event.target.nAme.value;
  let userpw1 = event.target.pw1.value;
  let userpw2 = event.target.pw2.value;
  let userph1 = event.target.ph1.value;
  let userph2 = event.target.ph2.value;
  let userph3 = event.target.ph3.value;

  console.log(useremail);
  console.log(username);
  console.log(userpw1);
  console.log(userpw2);
  console.log(userph1);
  console.log(userph2);
  console.log(userph3);
});
