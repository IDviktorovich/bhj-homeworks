const banner = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
    const viewportHeight = window.innerHeight;
    console.log(viewportHeight);
    for (let i = 0; i < banner.length; i++) {
        const bannerTop = banner[i].getBoundingClientRect().top;
        const bannerBottom = banner[i].getBoundingClientRect().bottom;
        console.log(bannerTop);
        if (bannerTop < viewportHeight) {
            banner[i].classList.add('reveal_active');
        }
        if (bannerBottom < 0) {
            banner[i].classList.remove('reveal_active');
        }
    }
})