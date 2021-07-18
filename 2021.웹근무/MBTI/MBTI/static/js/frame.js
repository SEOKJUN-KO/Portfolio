const icon = document.getElementsByClassName("tab-icon");
const tab = document.getElementsByClassName("below-tablet");


function icon_click(){
    icon[0].style.display = "none";
    tab[0].style.display = "block";
}

document.addEventListener('click', function (e){
    if(tab[0].style.display == "block"){
        if(e.target.className != "below-tablet"){
            icon[0].style.display = "block";
            tab[0].style.display = "none";
        }
    }
    else{
        if(e.target.className == "tab-icon"){
            icon_click();
        }
    }
});

$(window).resize(function(){
    var w =$(window).width();
    if(w>1200){
        $('.tab-icon').hide();
    }
    if(w<1200){
        $('.tab-icon').show();
    }
});
