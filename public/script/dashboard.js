const logout = document.querySelector('.logout');

logout.addEventListener('click', (e) => {
    window.location.replace = '/'
    sessionStorage.removeItem('userToken')
    e.preventDefault()
})
