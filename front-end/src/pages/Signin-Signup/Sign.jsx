import './Sign.css'
import { useState } from 'react'
import { MyToolbar } from '/src/tools/Toolbar.jsx'
import { BasicSwitches } from '/src/tools/Switch'
import { FillColorBtn } from '../../tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField } from '/src/tools/TextField'

export default function SignPage() {

    const [isSignin, setIsSignin] = useState('visible')
    const [isSignup, setSignup] = useState('hidden')

    function chagneVisibility() {
        (isSignin === 'visible') ? setIsSignin('hidden') : setIsSignin('visible');
        (isSignup === 'visible') ? setSignup('hidden') : setSignup('visible');
        console.log(isSignup);
    }

    return <div className="sign-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='sign-choice-toolbars'>
            <div className='text-box'>Sign In</div>
            <BasicSwitches changed={chagneVisibility} />
            <div className='text-box'>Sign Up</div>
        </div>
        <div className="sign-box" >
            <div className='sign-in-box ' style={{ visibility: isSignin }}>
                <div className='title-font'>Sign In</div>
                <SimpleTextField label={'Username'} />
                <PasswordTextField />
                <FillColorBtn textValue={"Sign In"} clsName={'sign-in-btn'} />
            </div>
            <div className='sign-up-box' style={{ visibility: isSignup }} >
                <div className='title-font'>Sign Up</div>
                <div className='sp-info-box' >
                    <SimpleTextField label={'Firstname'} />
                    <SimpleTextField label={'Lastname'} />
                    <NumberTextField />
                </div>
                <SimpleTextField label={'Username'} />
                <PasswordTextField />
                <FillColorBtn textValue={"Sign Up"} clsName={'sign-up-btn'} />
            </div>
        </div>
    </div>
}