import './Sign.css'
import { useState } from 'react'
import { MyToolbar } from '/src/tools/Toolbar.jsx'
import { BasicSwitches } from '/src/tools/Switch'
import { FillColorBtn } from '../../tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField } from '/src/tools/TextField'

export default function SignPage() {

    const [isSignin, setIsSignin] = useState('hidden')

    function chagneVisibility() {
        (isSignin === 'visible') ? setIsSignin('hidden') : setIsSignin('visible')
        console.log(isSignin);
    }

    return <div className="sign-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='sign-choice-toolbars'>
            <div className='text-box'>Sign In</div>
            <BasicSwitches changed={chagneVisibility} />
            <div className='text-box'>Sign Up</div>
        </div>
        <div className="sign-box">
            <div className='sign-in-box ' style={{ visibility: isSignin }}>
                <SimpleTextField label={'Username'} />
                <PasswordTextField />
                <FillColorBtn textValue={"Sign In"} clsName={'sign-in-btn'} />
            </div>
            <div className='sign-up'>
                <div className='sp-info-box'>
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