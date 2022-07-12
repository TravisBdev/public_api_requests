// ----------------
// Global Selectors
// ----------------
const gallery = document.querySelector('#gallery');
const userData = 'https://randomuser.me/api/?results=12&inc=name,picture,email,phone,dob,location&nat=us';



// ----------------
// Fetch Data
// ----------------

fetch(userData)
.then(response => response.json())
.then(data => generateCard(data.results))
.then(error => console.log(error));




// ----------------
// Helper Functions
// ----------------

// generates each card, then appends it to the page
function generateCard(usersList){
  users = usersList
  usersList.forEach((user, index) => {
    let cardHtml = 
    `<div class="card" data-index=${index}>
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





// generates modal data to be passed to the event listener
function makeModal(index){
  const {name, dob, phone, email, location :{city, street, state, postcode}, picture} = users[index];
  let birthday = new Date(dob.date)
  let modalHtml = 
    `<div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
          <img class="modal-img" src="${picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${name.first}</h3>
          <p class="modal-text">${email}</p>
          <p class="modal-text cap">${city}</p>
          <hr>
          <p class="modal-text">${phone}</p>
          <p class="modal-text">${street.number} ${street.name}., ${city}, ${state} ${postcode}</p>
          <p class="modal-text">Birthday: ${birthday.getMonth()+1}/${birthday.getDate()}/${birthday.getFullYear()}</p>
      </div>
    </div>`
  document.body.insertAdjacentHTML("beforeend", modalHtml);




  
  
  // removes the modal when the X is clicked
  const closebtn = document.querySelector('#modal-close-btn');
  closebtn.addEventListener('click', (e) => {
    document.body.removeChild(document.body.lastElementChild)
  })

}

// listens for a click on a card, then generates a modal for the page
gallery.addEventListener('click', (e) => {
  let card = e.target.closest('.card');
  let cardIndex = card.getAttribute('data-index');
  currentIndex = cardIndex;
  makeModal(currentIndex);
})










