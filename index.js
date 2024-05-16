
// // Function to navigate to different pages
// $(document).on('click',function(){ 
//     $('.navbar .collapse').collapse('hide');})
    
// function navigateTo(page) {
//     const contentDiv = document.getElementById("content");
//     // Fetch the content from the HTML file based on the page
//     fetch(page + ".html")
//         .then(response => response.text())
//         .then(html => {
//             // Set the fetched HTML content to the contentDiv
//             contentDiv.innerHTML = html;
//         })
//         .catch(error => {
//             console.error('Error fetching HTML:', error);
//         });
// }
// navigateTo("home");
// const name=document.getElementById("name")
// const phno=document.getElementById("phno")
// const email=document.getElementById("email")
// const msg=document.getElementById("msg")
// const submit=document.getElementsByClassName("form-contact")[0]

// submit.addEventListener("submit",(e)=>{
// e.preventDefault()

// let ebody = "<b>Name: </b>" + name.value + "<br><b>Phone Number:</b>" + phno.value + "<br>";

// if (email.value !== '') {
//     ebody += "<b>Email:</b>" + email.value + "<br>";
// }

// if (msg.value !== '') {
//     ebody += "<b>msg:</b>" + msg.value + "<br>";
// }

// //email code

// console.log(ebody);
// Email.send({
//     SecureToken : "69f16e3a-f3ca-4a3d-9e4b-6c242964ab5e",
//     To : 'vsakethreddy12345@gmail.com',
//     From : "vsakethreddy12345@gmail.com",
//     Subject : "Customer details",
//     Body : ebody
//     }).then(
//     message => alert(message)
//     );
// })
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  const name=document.getElementById("name")
  const phno=document.getElementById("phno")
  const email=document.getElementById("email")
  const msg=document.getElementById("msg")
  const submit=document.getElementsByClassName("form-contact")[0]
  
  submit.addEventListener("submit",(e)=>{
    e.preventDefault()

    let ebody = "<b>Name: </b>" + name.value + "<br><b>Phone Number:</b>" + phno.value + "<br>";

    if (email.value !== '') {
        ebody += "<b>Email:</b>" + email.value + "<br>";
    }

    if (msg.value !== '') {
        ebody += "<b>msg:</b>" + msg.value + "<br>";
    }

    //email code
    
    console.log(ebody);
    Email.send({
        SecureToken : "e24cff64-fa76-4086-98a7-9ba79f0055b4",
        To : 'rivainadevelopers@gmail.com',
        From : "rivainadevelopers@gmail.com",
        Subject : "Customer details",
        Body : ebody
      }).then(
        message =>{
            // alert(message)
            alert("You will be contacted by our team shortly.")
            name.value='';
            msg.value='';
            phno.value='';
            email.value='';
          }
      );
    })