import './Signup.css'
import { FillColorBtn } from '/src/tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField } from '/src/tools/TextField'
import { MyToolbar } from '/src/tools/Toolbar.jsx'

export default function SignUpPage() {

    return <div className="signup-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='signup-up-box'>
            <div className='signup-title-font'>Sign Up</div>
            <div className='sp-box-column' >
                <div className='sp-info-box'>
                    <SimpleTextField label={'Firstname'} />
                    <SimpleTextField label={'Lastname'} />
                    <NumberTextField />
                </div>
                <div className='sp-user-box'>
                    <SimpleTextField label={'Username'} />
                    <PasswordTextField />
                </div>
            </div>
            <FillColorBtn textValue={"Sign Up"} clsName={'signup-up-btn'} />
        </div>
    </div >
}