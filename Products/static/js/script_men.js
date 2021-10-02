


var trial = function() {
	
	$.ajax({
		dataType: "JSON", 
		url: "https://fakestoreapi.com/products/category/men's clothing",
		type: "GET",
		"onload": showLoad(),
		success: function(response) {
			console.log(response);
			
			$("#loading").css("display", "none");
			$("#navigate").css("display", "block");
			$("#navigate-n").css("display", "block");
			$(".card").css("display", "block");

			$("#img-1").css("display", "block");
			$("#img-1").attr("src", response[0].image);
			$("#title-1").html(response[0].title);
			$("#price-1").html("Rs. " + response[0].price);
			$("#Cart-1").css("display", "block");

			$("#img-2").css("display", "block");
			$("#img-2").attr("src", response[1].image);
			$("#title-2").html(response[1].title)
			$("#price-2").html("Rs. " + response[1].price);
			$("#Cart-2").css("display", "block");
			
			$("#img-3").css("display", "block");
			$("#img-3").attr("src", response[2].image);
			$("#title-3").html(response[2].title)
			$("#price-3").html("Rs. " + response[2].price);
			$("#Cart-3").css("display", "block");
			
			$("#img-4").css("display", "block");
			$("#img-4").attr("src", response[3].image);
			$("#title-4").html(response[3].title)
			$("#price-4").html("Rs. " + response[3].price);
			$("#Cart-4").css("display", "block");
			
			$("#slide-1").attr("src", response[1].image);
			$("#slide-1-heading").html(response[1].title);
			
			$("#slide-2").attr("src", response[2].image);
			$("#slide-2-heading").html(response[2].title);
			
			$("#slide-3").attr("src", response[3].image);
			$("#slide-3-heading").html(response[3].title);
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
	$("#box-1").hover(function() {
		$("#Cart-1").css("visibility", "visible");
		$("#Cart-1").css("opacity", "1");
	}, function() {
		$("#Cart-1").css("visibility", "hidden");
		$("#Cart-1").css("opacity", "0");
	});

	$("#box-2").hover(function() {
		$("#Cart-2").css("visibility", "visible");
		$("#Cart-2").css("opacity", "1");
	}, function() {
		$("#Cart-2").css("visibility", "hidden");
		$("#Cart-2").css("opacity", "0");
	});

	$("#box-3").hover(function() {
		$("#Cart-3").css("visibility", "visible");
		$("#Cart-3").css("opacity", "1");
	}, function() {
		$("#Cart-3").css("visibility", "hidden");
		$("#Cart-3").css("opacity", "0");
	});

	$("#box-4").hover(function() {
		$("#Cart-4").css("visibility", "visible");
		$("#Cart-4").css("opacity", "1");
	}, function() {
		$("#Cart-4").css("visibility", "hidden");
		$("#Cart-4").css("opacity", "0");
	});

	$("#box-5").hover(function() {
		$("#Cart-5").css("visibility", "visible");
		$("#Cart-5").css("opacity", "1");
	}, function() {
		$("#Cart-5").css("visibility", "hidden");
		$("#Cart-5").css("opacity", "0");
	});

	$("#box-6").hover(function() {
		$("#Cart-6").css("visibility", "visible");
		$("#Cart-6").css("opacity", "1");
	}, function() {
		$("#Cart-6").css("visibility", "hidden");
		$("#Cart-6").css("opacity", "0");
	});
});