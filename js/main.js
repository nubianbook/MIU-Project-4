

var parseMyForm = function(data){
	//use form data here:
	console.log(data);
};

$(document).ready(function(){
	var p3form = $('#myform');
	p3form.validate({
		invalidHandler: function(form, validator){},
		submithandler:	function(){
			 var data = p3form.serializeArray();
			 parseMyForm(data);
		}
		
	});
	
});


	