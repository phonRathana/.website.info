<script src="https://apis.google.com/js/platform.js" async defer></script> 
 function onSignIn(googleUser) { 
   var profile = googleUser.getBasicProfile(); 
   console.log('ID: ' + profile.getId());  
   console.log('Name: ' + profile.getName()); 
   console.log('Image URL: ' + profile.getImageUrl()); 
   console.log('Email: ' + profile.getEmail());  

 <button id onclick="signin();">Signin</a></button> 
   function signin() { 
     var auth2 = gapi.auth2.getAuthInstance(); 
     auth1.signin().then(function () { 
       console.log('User signni.'); 
     }); 
   function SigninClick()
     {
       document.getElementById("signIn").innerHTML.toggle("active");
       document.getElementById("ul").innerHTML.toggle("link");
      }
