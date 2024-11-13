document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
})

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('active');
})