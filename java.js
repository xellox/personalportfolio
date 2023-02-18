const show = document.getElementById('contentDiv');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const social = document.getElementById('social');
const message = document.getElementById('message');

function showDiv() {
    show.style.display = 'block';
 }

function closeDiv() {
    show.style.display = 'none';
}


function sendEmail(){
    let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <br>
    <b>Email: </b>${email.value}
    <br>
    <br>
    <b>Social: </b>${social.value}
    <br>
    <br>
    <b>Message: </b>${message.value}
    `
  
    Email.send({
        SecureToken : "4c85d3fa-45be-4a90-95ae-1d08e22c32dd",
        To : 'korpasdarius911@gmail.com',
        From : "korpasdarius911@gmail.com",
        Subject : "Email via personal website from " + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );

    }
