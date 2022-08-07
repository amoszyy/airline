function disPS(){
    x= document.getElementById("testerS");
    if(x.style.display === 'none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
 }
 function disPme    (){
    x= document.getElementById("show");
    if(x.style.display === 'none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
 }
 function disPmanage(){
    x= document.getElementById("manageBookingH");
    y=document.getElementById("visitOur");
    z=document.getElementById("WhatsOnFlight");
    f=document.getElementById("FlightStatus");
    
    if(x.style.display === 'none'){
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
        f.style.display = 'none';

    } else{
        x.style.display = 'block';
        // y.style.display = 'block';
    }
 }
 function disPwhatsOn(){
    x= document.getElementById("WhatsOnFlight");
    y=document.getElementById("visitOur");
    c=document.getElementById("manageBookingH");
    f=document.getElementById("FlightStatus");
    
    if(x.style.display === 'none'){
        x.style.display = 'block';
        y.style.display = 'none';
        c.style.display = 'none';
        f.style.display = 'none';

    } else{
        x.style.display = 'block';
        // y.style.display = 'block';
    }
 }
 function disPflight(){
    x= document.getElementById("FlightStatus");
    y=document.getElementById("visitOur");
    c=document.getElementById("manageBookingH");
    h=document.getElementById("WhatsOnFlight");
    
    if(x.style.display === 'none'){
        x.style.display = 'block'; 
        y.style.display = 'none';
        c.style.display = 'none';
        h.style.display = 'none';

    } else{
        x.style.display = 'block';
        // y.style.display = 'block';
    }
 }
 function disPsearch(){
    // x= document.getElementById("backToSearch");
    y=document.getElementById("visitOur");
    c=document.getElementById("manageBookingH");
    h=document.getElementById("WhatsOnFlight");
    l= document.getElementById("FlightStatus");
    
    if(y.style.display === 'none'){
        y.style.display='block';
        l.style.display = 'none';
        // y.style.display = 'none';
        c.style.display = 'none';
        h.style.display = 'none';

    } else{
        y.style.display = 'block';
        // y.style.display='none';
        l.style.display = 'none';
        // y.style.display = 'none';
        c.style.display = 'none';
        h.style.display = 'none';
        // y.style.display = 'block';
    }
 }
 const paymentForm = document.getElementById('paymentForm');
 paymentForm.addEventListener("submit", payWithPaystack, false);
 function payWithPaystack(e) {
    if (flightClassd.value == "first-class") {
        amount.value = 70000
        
    } else if (flightClassd.value == "business-class"){
        amount.value = 40000
    } else if (flightClassd.value == "economy-class"){
        amount.value = 20000
    }
 e.preventDefault();
 let handler = PaystackPop.setup({
     key: 'pk_test_34f6e23bf6d7509295453bc6ad278d20a372d8ee', // Replace with your public key
     email: document.getElementById("email-address").value,
     amount: document.getElementById("amount").value * 100,
    
     ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
     // label: "Optional string that replaces customer email"
     onClose: function(){
     alert('Window closed.');
 
     },
     callback: function(response){
     let message = 'Payment complete! Reference: ' + response.reference;
     showMessage.innerHTML = message;
     showMessage.style.color = 'green'
     // alert(message);
     } 
 });
 handler.openIframe();
 }
function proceedP(){
    location.href = "payment.html"
}
//  function welcomeS(){
//     welcomeUser.innerTEXT = "WELCOME " + credential.user.email
//  }
//  function ticketer(){
//      var arrivals = arrival.value;
//      var departures = departure.value;
//      tickets = [];
//      tickets.push({"depart": departures, "arrive": arrivals})  
//      console.log(tickets)
//      disp = "<tr>"
//      for(i = 0; i<tickets.length; ){
//         disp += "<td>" + (i+3)+"</td>" + "<td>" + departures + "</td>" + "<td>" + arrivals + "</td>" + "<td>" + 'pending...'+ "</td>" +"</td></tr>" 
        
//         x = document.getElementById("ticketDisplay")
//         if (x.style.display === 'none'){
//             x.style.display = 'block';
//         } else{
//             x.style.display = 'block'
//         }
//         // break;
//         i++;
//         // continue;
         
        
        


//      }
     
//      displayTicketstatus.innerHTML = disp;
//     //  console.log(tickets)
//     // alert('show')
  

    
//  }