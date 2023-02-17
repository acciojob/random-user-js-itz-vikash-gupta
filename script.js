//your code here
const person = document.getElementById("person");
const btn = document.getElementById("getUser");


btn.addEventListener("click", getAnotherUser);

async function fetchData() {
  const url = "https://randomuser.me/api/";
  const res = await fetch(url, {
    method: "get",
  });
  const data = await res.json();
  return data;
}

async function renderData() {
  const data = await fetchData();
  const personData = data.results[0];
  console.log(personData);
  const full_name = personData.name.first + " " + personData.name.last;
  const imgSrc = personData.picture.large;

  person.innerHTML = `
    <img src=${imgSrc} />
    <h2>${full_name}</h2>
    <p id="age" style='display: none'>${personData.dob.age}</p>
    <p id="email" style='display:none'>${personData.email}</p>
    <p id="phone" style='display:none'>${personData.phone}</p>
   
  `;
}

function getAnotherUser() {
  renderData();
}

function showAge() {
  document.getElementById("age").style.display = "block";
}
function showEmail(){
    document.getElementById("email").style.display="block";
}
function showPhone(){
    document.getElementById("phone").style.display="block";
}

renderData();