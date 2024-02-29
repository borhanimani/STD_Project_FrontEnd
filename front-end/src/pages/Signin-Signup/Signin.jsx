import './Signin.css'
import { useState } from 'react'
import { MyToolbar } from '/src/tools/Toolbar.jsx'
import { FillColorBtn } from '/src/tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField } from '/src/tools/TextField'
import { get } from '/src/utils/Connection'
import { CircularColor } from '/src/tools/Progress'
import { useNavigate } from 'react-router-dom'

export default function SignInPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showProgress, setShowProgress] = useState('hidden')
    let navigate = useNavigate();

    function signin() {
        if (username && password) {
            setShowProgress('visible')
            const param = { "username": username, "password": password }
            try {
                get('/signin',param).then((result) => {
                    if (result.length != 0) {
                        setShowProgress('hidden');
                        localStorage.setItem('user', JSON.stringify(result));
                        navigate('/')
                    } else {
                        alert('No user found')
                        setShowProgress('hidden');
                    }
                })
                // get(param)
            } catch (error) {
                setShowProgress('hidden');
                alert(error);
            }
        } else {
            alert('Please fill items first')
        }
    }

    return <div className="signin-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='signin-in-box '>
            <div className='signin-title-font'>Sign In</div>
            <div className='signin-user-box'>
                <SimpleTextField label={'Username'} value={username} calledFunction={setUsername} />
                <PasswordTextField value={password} calledFunction={setPassword} />
            </div>
            <FillColorBtn textValue={"Sign In"} clsName={'sign-in-btn'} calledFunction={signin} />
            <CircularColor showValue={showProgress} />
        </div>
    </div>
}