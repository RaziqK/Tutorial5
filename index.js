var dispDiv = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,
    stInp = document.getElementById("stickerUrl"),
    stC = document.getElementById("cursor");

function HeightChg(newImg){
	var num = parseInt(stickerSize.value);
	console.log(num);
	newImg.style.height = num + "px";

}

function ImgChg(el){
	imgSrc = el.src;
}
document.getElementById("bgcolor").addEventListener("change", function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
    imgSrc = this.src;
    stC.src = imgSrc;
});

st2.addEventListener("click", function(){
    imgSrc = this.src;
    stC.src = imgSrc;
});

dispDiv.addEventListener("click", function(ev) {
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className = "displayStickers";
    dispDiv.appendChild(newImg);
    
    console.log(ev.pageX,ev.pageY);
    newImg.style.left = ev.pageX+"px";
    newImg.style.top = ev.pageY+"px";
    document.getElementById("stickerSize").addEventListener("keyup", function(ev){
	if (ev.keyCode == 13){
	HeightChg(newImg);
  		}
    });
});

stInp.addEventListener("keyup", function(ev) {
    if(ev.keyCode == 13) {
        var newSticker = document.createElement("img");
        newSticker.src = stInp.value;
        newSticker.className = "stickers";
        document.getElementById("stickers").appendChild(newSticker);
        stInp.value = "";
        newSticker.addEventListener("click", function() {
           // imgSrc = this.src;
            ImgChg(this);
            stC.src = imgSrc;
        });
        
    }
});

document.addEventListener("mousemove", function(ev) {
    stC.style.top = ev.pageY+"px";
    stC.style.left = ev.pageX+"px";
});


