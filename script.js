//your code here
let user = null;

    async function getUser() {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      user = data.results[0];
      displayUserInfo(user);
    }

    function displayUserInfo(user) {
      document.getElementById('additional-info').innerHTML = '';
      const attr = document.querySelector('button.active').dataset.attr;
      if (attr === 'age') {
        document.getElementById('additional-info').innerHTML = user.dob.age;
      } else if (attr === 'email') {
        document.getElementById('additional-info').innerHTML = user.email;
      } else if (attr === 'phone') {
        document.getElementById('additional-info').innerHTML = user.phone;
      }
    }
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
          document.querySelectorAll('button').forEach(button => button.classList.remove('active'));
          button.classList.add('active');
          if (user) {
            displayUserInfo(user);
          }
        });
      });
  
      document.getElementById('getUser').addEventListener('click', () => {
        getUser();
      });