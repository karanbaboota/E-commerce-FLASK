


var trial = function() {
	
	$.ajax({
		dataType: "JSON", 
		url: "https://fakestoreapi.com/products",
		type: "GET",
		"onload": showLoad(),
		success: function(response) {
			console.log(response);
			var i = Math.floor(Math.random()*10);
			
			$("#loading").css("display", "none");
			$("#navigate").css("display", "block");
			$("#navigate-n").css("display", "block");
			$(".card").css("display", "block");

			$("#img-1").css("display", "block");
			$("#img-1").attr("src", response[i].image);
			$("#title-1").html(response[i].title);
			$("#price-1").html("Rs. " + response[i].price);
			$("#Cart-1").css("display", "block");
			
			$("#img-2").css("display", "block");
			$("#img-2").attr("src", response[i+1].image);
			$("#title-2").html(response[i+1].title)
			$("#price-2").html("Rs. " + response[i+1].price);
			$("#Cart-2").css("display", "block");
			
			$("#img-3").css("display", "block");
			$("#img-3").attr("src", response[i+2].image);
			$("#title-3").html(response[i+2].title)
			$("#price-3").html("Rs. " + response[i+2].price);
			$("#Cart-3").css("display", "block");
			
			$("#img-4").css("display", "block");
			$("#img-4").attr("src", response[i+3].image);
			$("#title-4").html(response[i+3].title)
			$("#price-4").html("Rs. " + response[i+3].price);
			$("#Cart-4").css("display", "block");
			
			$("#img-5").css("display", "block");
			$("#img-5").attr("src", response[i+4].image);
			$("#title-5").html(response[i+4].title)
			$("#price-5").html("Rs. " + response[i+4].price);
			$("#Cart-5").css("display", "block");
			
			$("#img-6").css("display", "block");
			$("#img-6").attr("src", response[i+5].image);
			$("#title-6").html(response[i+5].title)
			$("#price-6").html("Rs. " + response[i+5].price);
			$("#Cart-6").css("display", "block");

			$("#slide-1").attr("src", response[i+6].image);
			$("#slide-1-heading").html(response[i+6].title);
			
			$("#slide-2").attr("src", response[i+7].image);
			$("#slide-2-heading").html(response[i+7].title);
			
			$("#slide-3").attr("src", response[i+8].image);
			$("#slide-3-heading").html(response[i+8].title);
		}
		
	});
}

var getSearch = function() {
	
	var x = document.getElementById("search-text").value;
	console.log(x);
}

var showLoad = function() {
	$("#img-1").css("display", "none");
	$("#img-2").css("display", "none");
	$("#img-3").css("display", "none");
	$("#img-4").css("display", "none");
	$("#img-5").css("display", "none");
	$("#img-6").css("display", "none");
	$("#slide-1").css("display", "none");
	$("#Cart-1").css("display", "none");
	$("#Cart-2").css("display", "none");
	$("#Cart-3").css("display", "none");
	$("#Cart-4").css("display", "none");
	$("#Cart-5").css("display", "none");
	$("#Cart-6").css("display", "none");
	$("#loading").html("Loading");

	$("#navigate").css("display", "none");
	$("#navigate-n").css("display", "none");
	$(".card").css("display", "none");

}
	
$(document).ready(function() {
	trial();
});