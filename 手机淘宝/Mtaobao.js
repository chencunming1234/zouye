window.onload=function () {
	var chouWrap=document.getElementsByClassName("chou-wrap")[0]
	var oUl=chouWrap.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var aImg=oUl.getElementsByTagName('img')
	var next=document.getElementById('next');
	var chouNav=document.getElementsByClassName('chou-nav')[0];
	var aSpan=chouNav.getElementsByTagName('span')
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	var ava=oUl.getElementsByClassName('haiyous');
	var num=0;
	for (var i = 0; i < aSpan.length; i++) {
		aSpan[i].index=i;
		aSpan[i].onclick=function () {
			num=this.index;
			for (var i = 0; i < aSpan.length; i++) {
				aSpan[i].style.background='';
			}
			oUl.style.left=-aLi[0].offsetWidth*3*num+'px';
			aSpan[num].style.background='#534c4c';
		}
	}
	next.onclick=function () {
		num++;
		if (num>1) {
			num=0;
		}
		oUl.style.left=-aLi[0].offsetWidth*3*num+'px';
	}
	for (var i = 0; i < ava.length; i++) {
		ava[i].index=99
		ava[i].innerHTML= ava[i].index
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i

		aLi[i].onclick=function(){
			var th=this.index;
			clearTimeout(aImg[th].timer)
			ava[th].index-=1;
			var that=aImg[th].getAttribute('src')
			aImg[th].src=aImg[th].getAttribute('dy-src')
			ava[th].innerHTML=ava[th].index
			aImg[th].timer=setTimeout(function () {
				aImg[th].src=aImg[th].getAttribute('re-src')
			},1500)
			
		}
	}

}