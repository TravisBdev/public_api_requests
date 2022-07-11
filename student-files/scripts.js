// ----------------
// Global Selectors
// ----------------

const gallery = document.querySelector('#gallery');
const cardImg = document.querySelector('.card-img');
const userData = 'https://randomuser.me/api/?results=12&inc=name,picture,email,phone,dob,location&nat=us';


// ----------------
// Fetch Data
// ----------------
fetch(userData)
.then(response => response.json())
.then(data => {
  users = data.results
  generateCard(users);
})




// ----------------
// Helper Functions
// ----------------
function generateCard(users){
  users.forEach(user => {
    let cardHtml = 
    `<div class="card">
      <div class="card-img-container">
          <img class="card-img" src="${user.picture.large}" alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
          <p class="card-text">${user.email}</p>
          <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
      </div>
    </div>`;
    gallery.insertAdjacentHTML('beforeend', cardHtml);
  });
}





// ----------------
// HTML Templates
// ----------------
// let modalHtml = 
// `<div class="modal">
//   <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//   <div class="modal-info-container">
//       <img class="modal-img" src="${user.picture.medium}" alt="profile picture">
//       <h3 id="name" class="modal-name cap">${user.name}</h3>
//       <p class="modal-text">${user.email}</p>
//       <p class="modal-text cap">${user.location.city}</p>
//       <hr>
//       <p class="modal-text">${user.phone}</p>
//       <p class="modal-text">${user.location.street.number} ${user.location.street.name}., ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
//       <p class="modal-text">Birthday: ${user.dob.date.slice(0, 9)}</p>
//   </div>
// </div>`








