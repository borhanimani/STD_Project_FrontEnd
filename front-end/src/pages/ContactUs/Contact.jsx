import './Contact.css'
import { MyToolbar } from '/src/tools/Toolbar.jsx'

export default function ContactPage() {
    return <div>
        <div className="contact-page-container">
            <div className="toolbar"><MyToolbar /></div>
            <div className='text-box'> This example site project designed by</div>
        </div>
    </div>
}