




var addressinfoid = document.getElementById('Locationidholder')

$(function() {

  var today = new Date();

var todayfour = today.setHours(today.getHours() + 1);


   $('#timepicker1').timepicker();
   $('#timepicker2').timepicker();
   $('#timepicker3').timepicker();
   $('#timepicker4').timepicker();
   $('#timepicker1').timepicker('setTime', new Date());
   $('#timepicker2').timepicker('setTime', todayfour);
 });

      
    // Get the tags and input elements from the DOM 
    const tags = document.getElementById('tags'); 
    const input = document.getElementById('input-tag'); 

    // Add an event listener for keydown on the input element 
    input.addEventListener('keydown', function (event) { 

        // Check if the key pressed is 'Enter' 
        if (event.key === 'Enter') { 
          
            // Prevent the default action of the keypress 
            // event (submitting the form) 
            event.preventDefault(); 
          
            // Create a new list item element for the tag 
            const tag = document.createElement('li'); 
          
            // Get the trimmed value of the input element 
            const tagContent = input.value.trim(); 
          
            // If the trimmed value is not an empty string 
            if (tagContent !== '') { 
          
                // Set the text content of the tag to  
                // the trimmed value 
                tag.innerText = tagContent; 

                // Add a delete button to the tag 
                tag.innerHTML += '<button class="delete-button">X</button>'; 
                  
                // Append the tag to the tags list 
                tags.appendChild(tag); 
                  
                // Clear the input element's value 
                input.value = ''; 
            } 
        } 
    }); 

    // Add an event listener for click on the tags list 
    tags.addEventListener('click', function (event) { 

        // If the clicked element has the class 'delete-button' 
        if (event.target.classList.contains('delete-button')) { 
          
            // Remove the parent element (the tag) 
            event.target.parentNode.remove(); 
        } 
    }); 




var checkboxes = document.querySelectorAll("input[type=radio][name=eventfreq]");

var checkboxesvenue = document.querySelectorAll("input[type=radio][name=venuetype]");


if($('input#Recurringid:checked').length>0) {



$('.timeholder').removeClass('showatr')

$('.timeholder').addClass('hideratr')

}



checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {



    if($('input#Recurringid:checked').length>0) {



      $('.timeholder').removeClass('showatr')

  $('.timeholder').addClass('hideratr')

} else if($('input#Singleid:checked').length>0){



  $('.timeholder').removeClass('hideratr')
  $('.timeholder').addClass('showatr')

}



  })
});















checkboxesvenue.forEach(function(checkboxesvenue) {
  checkboxesvenue.addEventListener('change', function() {



    if($('input#Onlineeventid:checked').length>0) {


      addressinfoid.style.display = "none"
      $('.Locationid').removeClass('showatr')

  $('.Locationid').addClass('hideratr')

} else if($('input#Venueid:checked').length>0){

  addressinfoid.style.display = "block"

  $('.Locationid').removeClass('hideratr')
  $('.Locationid').addClass('showatr')

}


else if($('input#tbaid:checked').length>0){

  addressinfoid.style.display = "none"

  $('.Locationid').removeClass('showatr')

$('.Locationid').addClass('hideratr')

}



  })
});







$(document).ready(function() {



// const firstTwoChars = localedata.slice(0, 2);
// console.log(firstTwoChars); 
//$('.flag-con').addClass('flag-country-'+firstTwoChars)



// $('.localedata').each(function(){


//     const firstTwoChars = $(this).val().slice(0, 2);
// console.log(firstTwoChars); 
// $('.flagcon').addClass('flag-country-'+firstTwoChars)





// });










$('.localedata').each(function(){

    const firstTwoChars = $(this).val().slice(0, 2);
console.log(firstTwoChars);

$(".tdlocale").text(firstTwoChars);

// if (firstTwoChars.length > 0) {


//   $(firstTwoChars).each(function( ){


//     $('.tdlocale').addClass('flag-country-'+firstTwoChars)
//   })

  
//     alert (firstTwoChars[0].value);
// }



});





});





