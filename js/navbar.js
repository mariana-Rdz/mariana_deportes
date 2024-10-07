const navEl = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navEl.classList.add('scrollDown');
            
        } else if (window.scrollY < 56) {
            navEl.classList.remove('scrollDown');
            
        }
});