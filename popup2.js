var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let valueChange = 0
output.innerHTML = "High";
slider.oninput = function() {
	if(this.value == 20){
		output.innerHTML = "High";
	}
	if(this.value == 50){
		output.innerHTML = "Medium";
	}
	if(this.value == 80){
		output.innerHTML = "Low";
	}
}

$(function(){
    $('#keywordsubmit').click(function(){
		let url =""
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            url = tabs[0].url;
            document.getElementById("keyword").value = url
        });
		var search_topic = $('#keyword').val();
        var per = $('#myRange').val();
		// var algo = $("input[type='radio'][name='radio']:checked").val();
		chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            url = tabs[0].url;
        });
				
		if (search_topic){
                chrome.runtime.sendMessage(
					{topic: search_topic,percent: per},
					function(response) {
						result = response.farewell;
						// alert(result.summary);
						document.getElementById("sum").innerHTML = result.summary;
						document.getElementById("video_title").innerHTML = result.title;
						document.getElementById("like_view").innerHTML = "Likes:" + result.likes +"\nViews:" + result.views ;
						if(result.mod == "1"){
							var x = document.getElementById("mainForm");							  
							x.style.display = "none";
							var x = document.getElementById("result");							  
							x.style.display = "block";
							
						}
					});
		}	
		$('#keyword').val('');
		
    });
});
// let url=""
// document.getElementById("btn").addEventListener("click", func);
// function func(){
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
// 	url = tabs[0].url;
// document.getElementById("printurl").innerHTML = url;
// var newxmlhttp = new XMLHttpRequest();
//     var theUrl = "http://127.0.0.1:8000/form?";
//     newxmlhttp.open("GET", theUrl, true);

//     newxmlhttp.onreadystatechange = function() {
//         if (newxmlhttp.readyState == 4){
//             alert("entered");
//         }
//         else{
//             alert("not entered");
//         }

//     };
//     newxmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
//     newxmlhttp.send(url);
// });
// }


// $(function(){
//     $('#keywordsubmit').click(function(){
// 		let url =""
// 		var search_topic = $('#keyword').val();
// 		chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//             url = tabs[0].url;
//         });
				
// 		if (search_topic){
//                 chrome.runtime.sendMessage(
// 					{topic: search_topic},
// 					function(response) {
// 						result = response.farewell;
// 						alert(result.summary);
						
// 						var notifOptions = {
// 							type: "basic",
// 							iconUrl: "icon48.png",
// 							title: "WikiPedia Summary For Your Result",
// 							message: result.summary
// 						};
						
// 					});
// 		}	
// 		$('#keyword').val('');
		
//     });
// });