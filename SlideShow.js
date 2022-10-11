<script>
    let slideIndex = 0;
    showSlides();

function showSlides() {
    let i; 
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for(i = 0; i < slides.lenght; i++){
        slides[i].style.disply = "none";
    }
    slideIndex++;

    if(slideIndex > slides.lenght){
        slideIndex = 1;
    }

    for(i = 0; i < dots.lenght; i++)
    {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.disply = "block";
    dots[slideIndex-1].className += "active";
    setTimeout(showSlides, 2000);

</script>