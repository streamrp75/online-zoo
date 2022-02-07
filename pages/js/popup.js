const popupsLinks=document.querySelectorAll('.popup-link')
const body=document.querySelector('body')
const popupCloseX=document.querySelectorAll('.popup__close')
const buttonClick=document.getElementById('input_value')



buttonClick.addEventListener("click", function(){
    document.getElementById('button__otherAmout').value=document.getElementById('button_value').value;
});

if(popupsLinks.length>0){
    for(let i=0;i<popupsLinks.length;i++){
        const popupsLink=popupsLinks[i];
        popupsLink.addEventListener("click", function(e){
        const popupName=popupsLink.getAttribute('action').replace('#','');
        const corectPopup=document.getElementById(popupName)
        popupOpen(corectPopup);
        e.preventDefault();
        });
    }
}
if(popupCloseX.length>0){
    for(let i=0; i<popupCloseX.length;i++){
        const elpopupClose=popupCloseX[i];
        elpopupClose.addEventListener('click', function(e){
            popupClosefun(elpopupClose.closest('.popup'));
            e.preventDefault();
        });
    }
}
    function popupOpen(corectPopup){
        if(corectPopup){
            const popupNowActive=document.querySelector('.popup.open');
            if(popupNowActive){
                popupClosefun(popupNowActive,false)
            }
            corectPopup.classList.add('open');
            corectPopup.addEventListener('click',function(e){
                if(!e.target.closest('.popup__content')){
                    popupClosefun(e.target.closest('.popup'));
                }
            });
        }
    }
    function popupClosefun(popupNowActive){
        
            popupNowActive.classList.remove('open');
            
            
        
    }

// Meet some our friends carousel
const carouselBtns=document.querySelectorAll(".pets__buttons");
const petsCards=document.querySelectorAll(".pets__card")
carouselBtns.forEach(btn => btn.addEventListener('click',scrollingCarousel));
let scrolling=0;
function scrollingCarousel(e){
    console.log(scrolling);
    console.log(e.target.classList)
    if (e.target.classList.contains('pets__btn-prev')){
        scrolling+=460
    }
    if (e.target.classList.contains('pets__btn-next')){
        scrolling-=460
    }
    petsCards.forEach(card => {
        if (scrolling > 0) { scrolling = 0 };
        if (scrolling < -2760) { scrolling = 0 };
        card.style.left = scrolling + "px";
      })
}
