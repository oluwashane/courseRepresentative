
// get details
// post details to post request
// 

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
    const url = 'http://localhost:3000/users/login';

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

    // const data = await res.json()
    // console.log(res)

    console.log(res)
    if (res.status !== 200) {
        console.log('Please check your details!!')
    }

    const data = await res.json()
    storeToken(data)
    // Recall to use location.replace after working
    
    window.location.replace = '/public/pages/dashboard.html'

}

const storeToken = (data) => {
    JSON.stringify(sessionStorage.setItem('userToken', data.token))
}
