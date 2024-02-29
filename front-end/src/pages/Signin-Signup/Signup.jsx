import './Signup.css';
import { useState } from 'react';
import { FillColorBtn } from '/src/tools/Button';
import { SimpleTextField, PasswordTextField, NumberTextField } from '/src/tools/TextField';
import { MyToolbar } from '/src/tools/Toolbar.jsx';
import { post, get } from '/src/utils/Connection';
import { CircularColor } from '/src/tools/Progress';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showProgress, setShowProgress] = useState('hidden')
    let navigate = useNavigate();

    function signup() {
        setShowProgress('visible')
        if (firstname && lastname && phoneNumber && username && password) {
            const body = { "firstname": firstname, "lastname": lastname, "phoneNumber": Number.parseInt(phoneNumber), "username": username, "password": password };
            try {
                post('/signup', body).then((result) => {
                    if (result.length == 0) {
                        console.log(result);
                        setShowProgress('hidden');
                        alert("User Added Successfuly")
                        signin();
                    }
                })
            } catch (error) {
                alert(error);
                setShowProgress('hidden');
            }
        } else {
            alert('Please fill all items first')
        }
    }

    function signin() {
        const parameter = { "username": username, "password": password }
        try {
            get('/signin', parameter).then((result) => {
                if (result.length == 0) {
                    console.log('sin', result);
                    setShowProgress('hidden');
                    navigate('/')
                }
            })
        } catch (error) {
            alert(error);
            setShowProgress('hidden');
        }
    }


    return <div className="signup-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='signup-up-box'>
            <div className='signup-title-font'>Sign Up</div>
            <div className='sp-box-column' >
                <div className='sp-info-box'>
                    <SimpleTextField label={'Firstname'} value={firstname} calledFunction={setFirstname} />
                    <SimpleTextField label={'Lastname'} value={lastname} calledFunction={setLastname} />
                    <NumberTextField value={phoneNumber} calledFunction={setPhoneNumber} />
                </div>
                <div className='sp-user-box'>
                    <SimpleTextField label={'Username'} value={username} calledFunction={setUsername} />
                    <PasswordTextField value={password} calledFunction={setPassword} />
                </div>
            </div>
            <FillColorBtn textValue={"Sign Up"} clsName={'signup-up-btn'} calledFunction={signup} />
            <CircularColor showValue={showProgress} />
        </div>
    </div >
}