import React, { useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { loginUser, registerUser } from '../pages/api/server';
import { setUserState } from '../states/user';
import Router  from 'next/router';

function LoginForm() {
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [notAgreedTerms, setNotAgreedTerms] = useState(true);

    // const agreedTerms = ()=>{
    //     return document.getElementById('isAgreedTerms')
    // }

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const isValidData = data => {
        let validState = true
        for (const key in data) {
            console.log(validState)
            // console.log(key)
            // console.log(data[key])
            if (key != 'phoneNo')
                validState = Boolean(validState && data[key]);
        }
        return validState
    }

    const login = async e => {
        e.preventDefault()
        let userData = {
            email: e.target[0].value,
            password: e.target[1].value,
        }
        await loginUser(userData)
            .then(res => {
                // console.log(res.message)
                if (res.error) {
                    console.log(res.error)
                    alert(res.error)
                    return
                }
                else {
                    console.log(res)
                    alert(res.message)
                    // console.log(e.target)
                    // e.target.reset()
                    console.log(res)
                    console.log(res.user)
                    setUserState(res.user)
                    // Router.push('/')
                }
            })
        e.preventDefault()
    }

    const register = async (e) => {
        // console.log(e)
        e.preventDefault()
        let userData = {
            uname: e.target[0].value,
            email: e.target[1].value,
            phoneNo: e.target[2].value,
            password: e.target[3].value,
        }
        console.log(userData)
        if (isValidData(userData))
            await registerUser(userData)
                .then(res => {
                    // console.log(res.message)
                    if (res.error) {
                        console.log(res.error)
                        alert(res.error)
                    }
                    else {
                        console.log(res)
                        alert(res.message)
                        // console.log(e.target)

                        // reseting register form
                        e.target.reset()
                        
                        // resetting terms and conditions 
                        setNotAgreedTerms(true)
                        
                        // navigating to login form
                        document.getElementById("loginTab").click()
                    }
                })
        else
            alert("Please fill form, to register")
    }
    return (
        <MDBContainer className=" p-3 d-flex flex-column w-100">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink id='loginTab' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent className='mt-5'>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                    <form method='post' action="" onSubmit={login}>
                        <MDBInput wrapperClass='mb-4' name='uEmail' placeholder='Email address' id='form1' type='email' />
                        <MDBInput wrapperClass='mb-4' name='uPass' placeholder='Password' id='form2' type='password' />

                        <a href="!#" >Forgot password?</a>

                        <MDBBtn style={{ maxHeight: "40px" }} type='submit' className="mt-4 mb-4 w-100">Log in</MDBBtn>
                    </form>

                    <p className="text-center mt-3">or:</p>
                    <div className="d-flex text-center mb-3">
                        <p>Sign in with:</p>

                        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='twitter' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='google' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='github' size="sm" />
                            </MDBBtn>
                        </div>

                    </div>

                    <p className="text-center">Not a member?
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                            Register
                        </MDBTabsLink>
                    </p>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>

                    <form method='post' action="" onSubmit={register}>
                        <MDBInput wrapperClass='mb-4' name='registerName' placeholder='Name' id='form1' type='text' required />
                        <MDBInput wrapperClass='mb-4' name='registerEmail' placeholder='Email' id='form1' type='email' required />
                        <MDBInput wrapperClass='mb-4' name='registerPhone' placeholder='Phone number' id='form1' type='number' />
                        <MDBInput wrapperClass='mb-4' name='registerPass' placeholder='Password' id='form1' type='password' required />

                        <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault'
                                onClick={(e) => {
                                    // console.log(e.target.value)
                                    setNotAgreedTerms(!notAgreedTerms)
                                }} />
                            <span data-bs-toggle="modal" data-bs-target="#exampleModal">I have read and agree to the <a href=''
                                onClick={e => { e.preventDefault() }}>terms and conditions</a></span>
                        </div>

                        <MDBBtn type='submit' style={{ maxHeight: "40px" }} className="mb-4 w-100" disabled={notAgreedTerms}>Sign up</MDBBtn>
                    </form>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-secondary">Terms and Conditions</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p className='text-dark' style={{ textAlign: "justify" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>
    )
}

export default LoginForm