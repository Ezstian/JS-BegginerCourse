function icon(){
    let iconSrc = document.getElementById('likeIcon').getAttribute("src");
    console.log(iconSrc);
    if(iconSrc=="icon-off.png")
            document.getElementById('likeIcon').setAttribute("src","icon-on.png")
        else
            document.getElementById('likeIcon').setAttribute("src","icon-off.png")
    }
    function largeImage(url){
        document.getElementById("largeImage").setAttribute("src",url)
    }