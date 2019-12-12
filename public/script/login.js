
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {

    // User Input Vars
    const username = document.querySelector('#username_input').value;
    const password = document.querySelector('#password_input').value;
    
    console.log('Loading...')
    const data = {
        username,
        password
    }

    const url = "https://course-rep.herokuapp.com/users/login"
    validateUser(url, data)
    e.preventDefault()
})


const validateUser = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(body)
    });

    // show message if error in login
    if (!res.status === 200) {
        console.log('Bad Request')
    }

    const data = await res.json()
    storeToken(data)
    
    window.location.replace('../pages/dashboard.html')

}

const storeToken = (data) => {
    JSON.stringify(sessionStorage.setItem('userToken', data.token))
}
