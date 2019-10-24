const logout = document.querySelector('.logout');

logout.addEventListener('click', (e) => {
    sessionStorage.removeItem('userToken');
    window.location.replace = '../pages/login.html'
    e.preventDefault()
})
