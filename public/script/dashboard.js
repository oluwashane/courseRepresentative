const logout = document.querySelector('.logout');

logout.addEventListener('click', (e) => {
    window.location.replace = '../pages/login.html'
    sessionStorage.removeItem('userToken')
    e.preventDefault()
})
