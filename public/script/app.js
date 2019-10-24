
// Keys
// new Request(uri)
// new Request(uri, options)
// options - method, headers, body, mode
// methods: GET, POST, PUT, DELETE, options

// new Headers()
// headers.append(name, value)
// Content-TypeError, Content-length, Accept, Accept-Language,
// x-Requested-with, User-Agent 

// let h = new Headers();
// let req = new Request(uri)

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#users').addEventListener('click', sendReq);

//     // pretend to get a token after logging in
//     sessionStorage.setItem('myUserToken',
//     JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDliMzYzOTMyYmZjMjM2NDAzMGZhZjQiLCJpYXQiOjE1NzA0NTMwNDl9.syZ5Mg1OdigZjonm9eY-EXm3BmPYaeI3JRjQml7hlDU"))
// })

// function sendReq() {
//     let uri = "http://localhost:3000/users";
//     let token = JSON.parse(sessionStorage.getItem('myUserToken'));
    
//     let h = new Headers();

//     h.append('Authorization', `Bearer ${token}`);

//     let req = new Request(uri, {
//         method: 'GET',
//         mode: 'cors',
//         headers: h
//     });

//     fetch(req)
//         .then((resp) => resp.json())
//         .then(((data) => {
//             console.log(data)
//         }))
//         .catch((err) => {
//             console.log(err)
//         })

// }
