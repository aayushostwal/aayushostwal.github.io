function getMediumStats()
{
	function convertToMSTime(date) {
		var x = new Date(date)
		return x.getTime()
	}

	function downloadFile(startTs, endTs){
		var url = document.URL + "/total/" + startTs +"/"+endTs +""
		console.log(url)
		fetch(url).then((res) => { return res.blob(); }).then((data) => {
			  var a = document.createElement("a");
			  a.href = window.URL.createObjectURL(data);
			  a.download = "medium-stats.json";
			  a.click();
			});
	}

	var startDate = prompt("Enter Start Date", "MM-DD-YYYY")
	var endDate = prompt("Enter End Date", "MM-DD-YYYY")
	// var startDate = "05-01-2021"
	// var endDate = "06-01-2021"
	startTs = convertToMSTime(startDate)
	endTs = convertToMSTime(endDate)
	if (!(startTs) || !(endTs)){
		window.alert("Date Format is Not Allowed. Try Again")
		// getMediumStats()
	}	
	console.log(startTs)
	console.log(endTs)
	downloadFile(startTs, endTs)
}
getMediumStats()
window.location.assign("https://sites.google.com/view/mediumstats/home");
