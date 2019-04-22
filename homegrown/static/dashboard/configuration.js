$(document).ready(function(){

	$("#ex2").slider({});
    
});

$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

