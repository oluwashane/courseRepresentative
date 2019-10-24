// import storeToken from './store.js'
const signUp = document.querySelector('#formContent')

signUp.addEventListener('submit', (e) => {

    // User Input Vars
    const data = {
        fullname: document.querySelector('#fullname').value,
        username: document.querySelector('#username').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        department: document.querySelector('#department').value,
        password: document.querySelector('#pass').value,
    };

    regUser(data)
    
    e.preventDefault();
})

const regUser = async (data) => {
    fetch('https://course-rep.herokuapp.com/users', {
        method: 'POST' ,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body:  JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.errors);
        window.location.replace('../pages/dashboard.html')
    })
    .catch((err) => {
        console.log(err)
    })
}

