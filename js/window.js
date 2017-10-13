window.onload = function (){
	var windows=document.getElementById("window");
	var top=document.getElementById("top");
	var close=document.getElementById("close");
	var buto=document.getElementsByTagName("input");
	var word=document.getElementById("word");
	var text=document.getElementById("text");
	var del=document.getElementById("del");
	var enter=document.getElementById("enter");

	windows.style.left="100px";
	windows.style.top="100px";

	//按下发布按键，弹出窗口——发布按钮;
	buto[0].onclick=function(){
		
		windows.style.display = "block";
	}
	//取消发布并关闭窗口——取消按钮;
	del.onclick=function(){
		dele();
	}
	//按下确认按钮发送文本并关闭窗口——确认按钮;
	enter.onclick=function(){
		send();
	}
	//ctrl+enter组合键发送文本并关闭窗口;
	window.onkeydown=function(evt){
		var evts=evt||event;
		if(evts.ctrlKey&&evts.keyCode == 13){
			send();
		}
	}
	//移动窗口，并有关闭按钮;
	top.onmousedown = function (evt){
		var _evts = evt || event;
		
		document.onmousemove = function (evt){
			var evts = evt || event;
			windows.style.left = evts.clientX - _evts.offsetX + "px";
			windows.style.top = evts.clientY - _evts.offsetY-50 + "px";
		}
		
		document.onmouseup = function (){
			document.onmousemove = null;
			document.onmouseup = null;
		}
		//关闭窗口按钮;
		close.onclick = function(){
			dele();
		}
	}				
	//发布输入框内容，关闭窗口并清窗口内文本内容;
	function send(){
		var reg=/^\w{1,150}$/;
		var words=text.value;
		//判断输入内容长度，超过150字弹出警告;
		if(reg.test(words)==true){
			word.innerHTML+=text.value+"<br/>";
			windows.style.display = "none";
			text.value="";
		}else {
			alert("请重新输入");
		}
	}
	//清除文本内容，关闭窗口;
	function dele(){
		text.value="";
		windows.style.display = "none";
	}
}