$(document).ready(function(){
	
	//function to create grid given a set size by the user
	var createGrid = function(size) {
		for(var i = 0; i < size; i++) {
			$('table').append('<tr></tr>');

		};
		for (var j = 0; j <size; j++) {
			$('tr').append('<td></td>');
		}
	};
	
	//initialize page with a default grid
	var size = 16;
	createGrid(size);
	
	//reset the grid based on user input
		$('.button').click(function() {
		size = prompt("How large do you want your new grid?");
		$('tr').remove();
		createGrid(size);
	});
	

});

//mouseenter functions for the various effects
$(document).on("mouseenter", function(){
	$('td').mouseenter(function() {
		//check which radio box is checked and decide option using switch
		var option = $('input[name=option]:checked', '#options').val();
		
		switch(option) {
			case "randomcolor":
				$(this).css('opacity', 1.0);
				$(this).css('background-color', getRandomColor());
				break;
			case "hover10":
				var opacityCurrent = $(this).css('opacity');
				if (opacityCurrent >= 0.1) {
					$(this).css('background-color', '#000000');
					$(this).css('opacity', opacityCurrent - 0.1);
				} else {
					$(this).css('opacity', 0);
				}
				break;
			default:
				$(this).css('opacity', 1.0);
				$(this).css('background-color','#000000');
		}
		
		//function to randomize the color;
		function getRandomColor() {
			var r = Math.floor(Math.random()*255);
			var g = Math.floor(Math.random()*255);
			var b = Math.floor(Math.random()*255);
			return "rgb(" + r + "," + g + "," + b + ")";
		};
		
		
	});
	
});




