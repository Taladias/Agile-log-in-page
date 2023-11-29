// Local array of the users and their passwords
const users = [{name: 'Ismin', key: 'Ismin01'}, {name: 'Bella', key: 'Bella01'}, {name: 'Rose', key: 'Rose01'}, {name: 'Jasmine', key: 'Jasmine01'}];

function validateLogin() {
  
  const username = document.getElementById('username_input').value
  const password = document.getElementById('password_input').value

  const isValidUser = users.some(user => user.name === username && user.key === password);

  if (isValidUser) {
      alert('Login successful!');
      //redirect to the friends page
  } else {
      alert('Invalid username or password. Please try again.');
  }
}
