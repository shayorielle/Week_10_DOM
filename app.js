

///Get and assign variables to hold the contact form, its inputs, and then the table body (contact list) where they'll be appended.
const contactForm = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const contactList = document.getElementById('contactList');

/////staffContacts starts with pre-loaded data
const staffContacts = [
    { firstName: 'Shayna', lastName: 'Schaffer', email: 'shayna@email.com', phone: '267-222-0000' },

    { firstName: 'Brenna', lastName: 'Galespi', email: 'brenna@email.com', phone: '267-111-3333' },
]

////////rendering function to show the contact list aleady in the array, and then to re-render it with each new contact
function renderList(){
    contactList.innerHTML = "";
    staffContacts.forEach(contact => {addContactList(contact)});
}
////function to add a new row with data from form inputs by appending to the staffContacts list
const addContactList = (contact) => {

    const newRow = document.createElement('tr'); ////new row
    const num = document.createElement('td'); ////new row data
    const first = document.createElement('td'); ////new row data
    const last = document.createElement('td'); ////new row data
    const email = document.createElement('td'); ////new row data
    const phone = document.createElement('td'); ////new row data

    num.innerText = staffContacts.indexOf(contact) + 1; ///record number
    first.innerText = contact.firstName; ////adds the text input into the form field
    last.innerText = contact.lastName;
    email.innerText = contact.email;
    phone.innerText = contact.phone;

    newRow.append(num); ///append form's data first to the new row
    newRow.append(first);
    newRow.append(last);
    newRow.append(email);
    newRow.append(phone);
    contactList.append(newRow);////new row is then appended to the table body

}

//////start with existing contacts rendered on screen
renderList();

////event listener to add a new contact from the form inputs upon submit
contactForm.addEventListener('submit', event => {
    event.preventDefault()

    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value
    }
    staffContacts.push(contact);
    renderList();
    console.log(staffContacts);
    contactForm.reset()
})

