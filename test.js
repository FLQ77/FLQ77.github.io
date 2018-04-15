/*window.onload=function() {
			getJson();
 }*/
function test() {
	alert('测试一下');
}
function getJson() {
	const url='test.json';
	return ajax(url);
	/*el.innerHTML=text;*/ 
}
function ajax(url) {
	const request = new XMLHttpRequest();
	request.open('GET',url,true);
	request.onreadystatechange=function() {
		if(request.readyState == 4 && request.status == 200) {
			console.log(request.responseText);
			return textHandle(request.responseText);
		}
	}
	request.send(null);  
}
function textHandle(res) {
	const el=document.getElementById('jsonData');
	let text='';
	console.log(res);
	const books=JSON.parse(res);
	for(let i in books) {
		text+=i+':'+books[i]+'<br>';
	}
	el.innerHTML=text; 
}


