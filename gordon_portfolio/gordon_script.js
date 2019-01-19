// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
	//load images
	var sharkBankOne = "https://images.unsplash.com/photo-1496044918751-3656750755c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f973a666401c9fe9863066c0c89244f8&auto=format&fit=crop&w=1952&q=80";
	var sharkBankTwo = "https://images.unsplash.com/photo-1469626964161-9f46ed97b7cf?ixlib=rb-0.3.5&s=89293180a17e7f1bd6e192f5b58b341d&auto=format&fit=crop&w=1950&q=80";
	var sharkBankThree = "https://images.unsplash.com/photo-1502487596243-8fb46dfa40bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f4feafc887d8e919ac0492daefebd1b&auto=format&fit=crop&w=2101&q=80";
	var jakePaul = "https://pbs.twimg.com/media/DEvnGjEVYAEkA7B.jpg";
	var photography = "https://i0.wp.com/kpopchart.net/wp-content/uploads/2018/03/Junoflo-Jay-Park.jpg?fit=1920%2C1080&ssl=1";
	var soundboard = "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9589007/Ableton_Live_10_Announcement_3_web.jpg";
	var guesswho = "https://images.unsplash.com/photo-1507566218255-bfdc14d2ccf1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1cac946b57cf5b910e9bd5a8dca16d&auto=format&fit=crop&w=1950&q=80";
	var wordpress = "https://www.themelines.com/wp-content/uploads/2017/12/wordpress.png";
	var sushi = "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f5eb556f3568763f2bc580b107f2a16&auto=format&fit=crop&w=1950&q=80";
	
	//in formate link, name
	var imageName = [[sharkBankOne, "shark<br/>bank one", "../gordon_proposal_websites/gordon_website1/gordon_template_one.html"], [sharkBankTwo, "shark<br/>bank two", "../gordon_proposal_websites/gordon_website2/gordon_template_two.html"], [sharkBankThree, "shark<br/>bank three", "../gordon_proposal_websites/gordon_website3/gordon_template_three.html"], [sushi, "sushi", "../gordon_responsive_site/gordon_sushi.html"], [jakePaul, "jake<br/>paul", "../gordon_new_jake_paul/gordon_jake_index.html"], [photography, "photography", "../gordon_photography_website/gordon_index.html"], [soundboard, "soundboard", "../gordon_soundboard/gordon_soundboard.html"], [guesswho, "guess<br>who", "../gordon_guesswho/gordon_guesswho.html"], [wordpress, "wordpress", "../gordon_wordpress/gordon_wordpress.html"]];
	
	//preload images
	for(var i = 0; i < imageName.length; i++) {
		document.getElementById("preload").style.background = "url('" + imageName[i][0] + "')";
	}

	var globalCounter = -1;
	function changeBack(backGrnd) {
		document.getElementById("background").style.backgroundRepeat = "no-repeat";
		document.getElementById("background").style.backgroundImage = "url(" + backGrnd + ")";
	}
	function changeName(name) {
		var headerText = document.getElementById("headerText");

		headerText.style.transition = "opacity 0.4s ease-in";
		headerText.style.opacity = "0";
		//let transition occur
		setTimeout(function() {
			headerText.innerHTML = name;
			headerText.style.opacity = "1";
		}, 500);
	}
	function changeLink(newLink) {
		document.getElementById("projectLink").href = newLink;
	}
	// goes to last project
	function previousProject(counter) {
		counter -= 1;
		if(counter < 0) {
			counter = imageName.length - 1;
			changeBack(imageName[counter][0]);
			changeName(imageName[counter][1]);
			changeLink(imageName[counter][2]);
		} else {
			changeBack(imageName[counter][0]);
			changeName(imageName[counter][1]);
			changeLink(imageName[counter][2]);
		}
		return counter;
	}
	//increments to next slide, and checks to see if over length
	function nextProject(counter) {
		counter += 1;
		if(imageName.length === counter) {
			counter = 0;
			changeBack(imageName[counter][0]);
			changeName(imageName[counter][1]);
			changeLink(imageName[counter][2]);
		} else {
			changeBack(imageName[counter][0]);
			changeName(imageName[counter][1]);
			changeLink(imageName[counter][2]);
		}
		return counter;
	}

	document.getElementById("lastProj").addEventListener("click", function() {
		globalCounter = previousProject(globalCounter);
	});
	document.getElementById("nextProj").addEventListener("click", function() {
		globalCounter = nextProject(globalCounter);
	});
});