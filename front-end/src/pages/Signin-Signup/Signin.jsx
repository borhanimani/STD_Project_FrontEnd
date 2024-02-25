import './Signin.css'
import { MyToolbar } from '/src/tools/Toolbar.jsx'
import { FillColorBtn } from '../../tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField } from '/src/tools/TextField'

export default function SignInPage() {

    return <div className="signin-page-container">
        <div className="toolbar"><MyToolbar /></div>
            <div className='signin-in-box '>
                <div className='signin-title-font'>Sign In</div>
                <div className='signin-user-box'>
                    <SimpleTextField label={'Username'} />
                    <PasswordTextField />
                </div>
                <FillColorBtn textValue={"Sign In"} clsName={'sign-in-btn'} />
            </div>
        </div>
}