const header = document.querySelector('header');
console.log(header);
window.onscroll = () => {
    if (document.body.scrollTop < 80) header.style.display = 'none';
};
