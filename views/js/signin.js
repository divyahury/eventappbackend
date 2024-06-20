// var signinbtn = document.getElementById('login-standard-submit')

document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault()


  

    const dataholder = Object.fromEntries(new FormData(e.target).entries());
    console.log(dataholder)

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



//     if(email.match(validRegex) && data.password && email !== '')
// {









// }


$.ajax({
    type: 'POST',
    url: '/login-handler', 
    data: dataholder,
    dataType: "json",
    success: function(response) {  
      
      window.location.replace('/')
        
        
     
    
    
    } })


})