import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
    const nav = useNavigate();
    const [userData, setUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    });
    const [loggedUserData, setloggedUser] = useState({
        username: '',
        password: ''
    })
    const [active, setActive] = useState(false);


    const handleRegister = async (e) => {
        console.log(userData);
        e.preventDefault();
        if (active) {
            const result = await fetch('http://localhost:5050/register', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData)
            })
            console.log(result);

            nav('/login');
        }
        else {
            alert(`Passwords didn't match`);
        }
    }

    const handleChange = (e) => {
        setUser(() => ({
            ...userData,
            [e.target.id]: e.target.value
        }))
    }
    const handleloggeduser = (e) => {
        setloggedUser(() => ({
            ...loggedUserData,
            [e.target.id]: e.target.value
        }))
        console.log(loggedUserData);
    }

    const handleLogin = async () => {

        const res = await fetch('http://localhost:5050/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(loggedUserData)

        })
        // console.log(await res.json());
        let outputData = await res.json();

        if (outputData.msg === 'User not found') {
            alert('User not found, Kindly Register first');

        }
        else if (outputData.msg === 'Login Success') {
            alert('Login Success');
            nav('/')
        }
        else {
            alert('Check your credentials');
        }


    }
    const handleConfirm = (e) => {
        let prevPass = userData.password;
        if (e.target.value === prevPass) {
            console.log('Go ahead, pass matched..');
            setActive(true);
        }
        else {
            setActive(false)
        }
    }
    return (
        <>
            <h1 className='h1'>Ms_Cakeaholic</h1>
            <form className='form'>
                <label for="username"></label>
                <input className="first" type="text" id="username" onChange={handleloggeduser} placeholder="Username" />
                <br />
                <label for="password"></label>
                <input className="first gap" type="password" id="password" onChange={handleloggeduser} placeholder="Enter Password" />
                <br /><br />
                <input className="second" type="button" id="login" value="login" onClick={handleLogin} />
                <br /><br /><br />
                <label className='accountbox' for="account">Don't have an account?</label>
                <input class="btn btn third" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" id="Register" value="Register" />
                
            </form>

            <div class="modal fade" id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div className="modal-content registerbody">
                        <div class="modal-header">
                            <h5 class="modal-title"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body register">
                        <h1 className='h2'>REGISTER</h1>
                            <form>
                                <label for="Firstname"></label>
                                <input className="register" type="text" id="firstname" placeholder="First Name" onChange={handleChange} />
                                <br /><br />
                                <label for="lastname"></label>
                                <input className="register" type="text" id="lastname" placeholder="Last Name" onChange={handleChange} />
                                <br /><br />
                                <label for="username"></label>
                                <input className="register" type="text" id="username" placeholder="User Name" onChange={handleChange} />
                                <br /><br />
                                <label for="email"></label>
                                <input className="register" type="email" id='email' placeholder='example@gmail.com' onChange={handleChange} />
                                <br /><br />
                                <label for="password"></label>
                                <input className="register" type="password" id="password" placeholder="Password" onChange={handleChange} />
                                <br /><br />
                                <label for="Confirm password"></label>
                                <input className="register" type="password" id="cpass" placeholder=" Confirm Password" onChange={handleConfirm} />
                                <br /><br />
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn third" data-bs-dismiss="modal" onClick={handleRegister}>Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
