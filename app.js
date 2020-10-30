const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //toggle nav
    burger.addEventListener('click', () => {
        navigation.classList.toggle('.nav-active');
        // console.log('ok');

        //animate list
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
            }
            // console.log(index / 7);
        });
        //🍔animation
        burger.classList.toggle('.toggle')
    })
    
    
};


navSlide();