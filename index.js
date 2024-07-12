document.querySelector(".menu-icon").addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('small-sidebar');
    document.querySelector('.container').classList.toggle('small-container');

});