const images = document.querySelectorAll('img');  

const callback = entries => {
    // console.log(entries)
    entries.forEach( entry => {
        // entry.isInersecting 判断图片是否加载显示
        if (entry.isIntersecting) {
            const image = entry.target;
            const data_src = image.getAttribute('data-src');
            image.setAttribute('src', data_src);
            // 如果加载完就不用在监听图片防止浪费资源
            observer.unobserve(image);
            console.log('触发')
        }
    })
}
const observer = new IntersectionObserver(callback);

images.forEach(image => {
    observer.observe(image);
})