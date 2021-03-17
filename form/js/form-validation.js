// show popup if the user is sure to submit
// function submit(event){
//     event.preventDefault();
//     alert("Are you sure to submit?");
//     return false;
// }

// var submitBtn = document.getElementById("submit");
// submitBtn.addEventListener("click", submit);

// check if all required field is filled 
var Validate = function() {
	var validate = this;
	validate.element = document.getElementById("contactForm");

	validate.element.addEventListener("submit", function(event) {
		
		var error = false; // default: no error
		var fieldGroups = document.getElementsByClassName("required"); 
		
		for(var i=0; i<fieldGroups.length; i++)
		{	
            // if all field is filled
			if(error)
			{
				event.preventDefault();
			} 
			
			var field = fieldGroups[i].querySelector("input, textarea");
			// console.log(field);
			var fieldValue = field.value;

            // if any field is blank, add class "error"
			if (fieldValue == "")
			{
				fieldGroups[i].classList.add("error");
				error = true;
			} else {
                // if filled, remove class "error"
				fieldGroups[i].classList.remove("error");
			}
		}
	}) 
} 

new Validate();