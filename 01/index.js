const images = document.querySelectorAll('img');

window.addEventListener('scroll', (e)=>{
    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        if(imageTop < window.innerHeight ) {
            const data_src = image.getAttribute('data-src');
            image.setAttribute('src', data_src);
        }
        console.log('scroll 触发')
    })
})