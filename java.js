const show = document.getElementById('firstContentDiv');
const show2 = document.getElementById('secondContentDiv')
const show3 = document.getElementById('thirdContentDiv')
const show4 = document.getElementById('fourthContentDiv')
const show5 = document.getElementById('fifthContentDiv')
const show6 = document.getElementById('sixthContentDiv')
const fname = document.getElementById('name');
const email = document.getElementById('email');
const social = document.getElementById('social');
const message = document.getElementById('message');

function showDiv() {
    show.style.display = 'flex';
 }

function closeDiv() {
    show.style.display = 'none';
}

function showDiv2() {
    show2.style.display = 'flex';
 }

 function closeDiv2() {
    show2.style.display = 'none';
}

function showDiv3() {
    show3.style.display = 'flex';
 }

 function closeDiv3() {
    show3.style.display = 'none';
}

function showDiv4() {
    show4.style.display = 'flex'
}

function closeDiv4() {
    show4.style.display = 'none'
}

function showDiv5() {
    show5.style.display = 'flex'
}

function closeDiv5() {
    show5.style.display = 'none'
}

function showDiv6() {
    show6.style.display = 'flex'
}

function closeDiv6() {
    show6.style.display = 'none'
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
      message => alert('It worked! i have to change this alert tho...')
    );

    }
