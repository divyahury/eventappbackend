




  let options = {
    selector: '#adinfo',
    height: 300,
    menubar: false,
    statusbar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat',
    content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; -webkit-font-smoothing: antialiased; }'
  }
  if (localStorage.getItem("tablerTheme") === 'dark') {
    options.skin = 'oxide-dark';
    options.content_css = 'dark';
  }
  tinyMCE.init(options);




  





  tinyMCE.init({
    selector: '.shortdescription',
    
    height: 200,
    menubar: false,
    plugins: [
        'wordcount',
    ],
    toolbar: '',
    setup: function (editor) {


        function checkifword () {
            checkWordCount(editor);
        }

               // Change event listener
               editor.on('change', function () {
                checkifword()
            });
    
            // Keyup event listener
            editor.on('keyup', function (e) {
                // Your code for keyup event
                checkifword()
            });
    
            // Focus event listener
            editor.on('focus', function () {
                // Your code for focus event
                checkifword()
            });
    
            // Custom event listener
            editor.on('customEvent', function (param) {
                // Your code for custom event
                checkifword()
                console.log('Custom event received with parameter:', param);
            });
    
            // You can add more event listeners as needed
        

        }



  });

  function checkWordCount(editor) {
    const maxWords = 50; // Change this to your desired maximum word count
    const content = editor.getContent({ format: 'text' });
    const wordCount = content.split(/\s+/).length;

    if (wordCount > maxWords) {
        // Remove excess words
        const truncatedContent = content.split(/\s+/).slice(0, maxWords).join(' ');
        editor.setContent(truncatedContent);
    }
}








// var signinbtn = document.getElementById('login-standard-submit')

document.querySelector('#form').addEventListener('submit', function(e){

    e.preventDefault()


   
    var valueduoarray = [];
    const dataholder = Object.fromEntries(new FormData(e.target).entries());

    let listItems = document.getElementById('tags').getElementsByTagName('li');
    for(let i = 0; i < listItems.length; i++){
        

        var value = listItems[i].innerText

        var valueduo =  value.replace(/X/g, "")

        valueduoarray.push(valueduo);

        // $('.myList li').each(function(i, li) {
        //     array.push($(li));
        //   });
      
        

        
    }
    
   console.log(valueduoarray);
    
    console.log(dataholder)



    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



//     if(email.match(validRegex) && data.password && email !== '')
// {



var myContent = tinyMCE.get("adinfo").getContent();


var shortdescription = tinyMCE.get("shortdescription").getContent();


var eventstartdate = new Date(dataholder.eventstartdate).toDateString();

var eventenddate = new Date(dataholder.eventenddate).toDateString();

 






// }


$.ajax({
    type: 'POST',
    url: '/createevent', 
    data:{
        eventtitle : dataholder.eventtitle,
        eventorganizer : dataholder.eventorganizer,
        venuetype: dataholder.venuetype,
        eventaddress: dataholder.eventaddress,
        eventType: dataholder.eventType,
        eventcategory: dataholder.eventcategory,
        eventtags: dataholder.eventtags,
        eventfreq: dataholder.eventfreq,
        eventstartdate: eventstartdate,
        eventstarttime: dataholder.eventstarttime,
        eventenddate: eventenddate,
        eventendtime: dataholder.eventendtime,
        eventtimezone: dataholder.eventtimezone,
        eventlocale: dataholder.eventlocale,
        additional: myContent,
        displayeventendtime: dataholder.displayeventendtime,
        seatingstatus:dataholder.seatingstatus,
        canedit:dataholder.canedit,
        hashtags: JSON.stringify(valueduoarray),
        shortdescription: shortdescription,
        eventstatus: '<span class="badge bg-warning me-1"></span> Draft'
    },
    dataType: "json",
    success: function(response) {  
     

     
        // window.location.replace('/eventoverview')
     
    
    
    } })


})


var suggestbtnid = document.getElementById('suggestbtnid')

suggestbtnid.addEventListener('click', (e) => {

    e.preventDefault()


   var     eventtitle    =  $("input[name=eventtitle]").val();

   var  eventstarttime       =  $("input[name=eventstarttime]").val();

   var   eventenddate      =  $("input[name=eventenddate]").val();

   var    eventorganizer     =  $("input[name=eventorganizer]").val();

   var     eventstartdate    =  $("input[name=eventstartdate]").val();

   var    eventendtime  =  $("input[name=eventendtime]").val();




   console.log(eventstarttime + eventtitle + eventorganizer + eventstartdate + eventenddate  + eventendtime)
















    var eventtitleidvalue = document.getElementById('eventtitleid').value
    suggestbtnid.innerHTML = "Generating Event Description"
    tinyMCE.get('adinfo').setContent('');
    tinyMCE.get('shortdescription').setContent('');
    console.log(eventtitleidvalue)

    // eventtitle : 'create a description for this event title '+eventtitleidvalue+'do no add date,time,location or venue format as an HTML table'


    // 'create a detailed description for this event title '+eventtitleidvalue+' format as json',



  
        // Get the input field value
        // var inputValue = document.getElementById("inputField").value;

        // Check if the input field is not empty
        if (eventtitle.trim() === "") {
            // Display an error message
            suggestbtnid.innerHTML = "⚡Suggest write up"
            document.getElementById("errorMessage").innerHTML = "Enter Event Title";
            document.getElementById('eventtitleid').focus();
        } else {





            $.ajax({
                type: 'POST',
                url: '/use-ai', 
                data:{
                    eventtitle :  'create detailed event description for this event title '+eventtitleidvalue+ 'do not add date,time,location or venue return as an HTML table',
        
                    eventtitleduo :  'write a few lines summary about '+eventtitle+ 'return data as HTML table',
                  
                },
                dataType: "json",
                success: function(response) {  
        
            
            
            
        
        
        
                 
                    console.log(response.Success)
        
        
                    suggestbtnid.innerHTML = "⚡Suggest write up"
                    // document.getElementById('adinfo').value = response.Success
        
                    tinyMCE.get('adinfo').setContent(response.Success);
        
                    tinyMCE.get('shortdescription').setContent(response.short);
                 
                    // window.location.replace('/eventoverview')
                 
                
                
                } })














            // Clear the error message if input is valid
            document.getElementById("errorMessage").innerHTML = "";

            // Do something with the valid input, e.g., submit the form
           
        }
    
















})








