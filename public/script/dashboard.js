// Variables
const logout = document.querySelector('.logout');
const profile = document.querySelector('#profile');
const userProfile = document.querySelector('#user_profile');
const profilemodal = document.querySelector('.popUp');
const modalBtn = document.querySelector('.close');
const clientProfile = document.querySelector('.clientDetails');


window.onload = (e) => {
    loadData();
}

// Events Section
logout.addEventListener('click', signout);
profile.addEventListener('click', connectUser);
modalBtn.addEventListener('click', close);

// rough
function loadData() {
    // const jsonData = await fetch('http://localhost:3000/users');
    // const data = await jsonData.json();
    fetch('https://course-rep.herokuapp.com/users')
    .then(n => n.json())
    .then((data) => {
        const ui_Structure = document.querySelector('#profile');

        data.forEach((user) => {
            const html = `
            <div class="profile-structure">
                <div id="user_profile">
                    <div class="profile-image">
                        <img src="../images/avatarimg1.jpg" alt="">
                    </div>
                    <p>FullName <span>${user.fullname}</span></p>
                    <p>Email <span>${user.email}</span></p>
                    <span id='hidden'>${user._id}</span>
                    <div class="btn_father">
                        <button class="connect">connect</button>
                    </div>
                </div>  
            </div>`
            ui_Structure.innerHTML += html;
        })
    })
    .catch((e) => {
        console.log(e)
    })
}

function signout(e) {
    sessionStorage.removeItem('userToken');
    window.location.replace('../pages/login.html');
    e.preventDefault();
}


async function connectUser(e) {
    if(e.target.classList.value === 'connect'){
        profilemodal.style.display = "block";
        const cliID = e.target.parentElement.previousElementSibling.textContent;
        await loadClientData(cliID);
        disableConnectBtn();       
    }
}

async function loadClientData(_id) {
    // clientProfile.innerHTML = "<h1>Hello World</h1>"
    console.log(_id)
    
    const clientData = await fetch(`https://course-rep.herokuapp.com/users/${_id}`);
    const rawData = await clientData.json();
    console.log(rawData);
    const userDetailsInModal = `
    <div class="clientDetails">
        <div id="profileImg">
            <img src="../images/avatarimg1.jpg" alt="Client-Profile Pics" class="cliImage">
        </div>
        <div id="clientInfo">
            <ul>
                <li>
                    <span>FullName:</span>
                    ${rawData.fullname}
                </li>
                <li>
                    <span>Department:</span>
                    computer Science
                </li>
                <li>
                    <span>Level:</span>
                    200L
                </li>
                <li>
                    <span>Phone:</span>
                    +234-8-888-888
                </li>
                <li>
                    <span>Email:</span>
                    ${rawData.email}
                </li>
                <li>
                    <span>Bio:</span>
                    Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Hic
                    sint ipsum fugit ratione dignissimos. 
                    Aspernatur eos reprehenderit voluptates
                    necessitatibus veniam?
                </li>
            </ul>
        </div>
    </div>
    `
    const render = document.querySelector('.render');
    render.innerHTML = userDetailsInModal
}

// close modal
function close(e) {
    e.preventDefault();
    profilemodal.style.display = "none";
    enableConnectBtn();
}

function enableConnectBtn() {
    const connectBtn = document.querySelectorAll('.connect');
    connectBtn.forEach((x) => {
        x.disabled = false;
        x.style.backgroundColor = "rgb(19, 92, 202)"            
    }) 
}

function disableConnectBtn() {
    const connectBtn = document.querySelectorAll('.connect');
    connectBtn.forEach((x) => {
        x.disabled = true;
        x.style.backgroundColor = "#333 "            
    })
}