import './Admin.css'
import { useState } from 'react'
import { MyToolbar } from '/src/tools/Toolbar.jsx'
import { BasicSwitches } from '/src/tools/Switch'
import { FillColorBtn, UploadBtn, OutLineBtn } from '/src/tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField, BorderTextAria } from '/src/tools/TextField'
import { SelectLabel } from '/src/tools/Select'

export default function AdminPage() {

    const [visibilityStatus, setVisibilityStatus] = useState('hidden')
    const [visibilityStatusR, setVisibilityStatusR] = useState('visible')

    function chagneVisibility() {
        (visibilityStatus === 'visible') ? setVisibilityStatus('hidden') : setVisibilityStatus('visible');
        (visibilityStatusR === 'visible') ? setVisibilityStatusR('hidden') : setVisibilityStatusR('visible');

        // console.log(isSignup);
    }
    return <div className="sign-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='admin-choice-toolbars'> <ChoiceBox onChange={chagneVisibility} /> </div>
        <div className="edit-box" >
            <SelectBox showStatus={visibilityStatus} showStatusR={visibilityStatusR} />
            <ItemView />
        </div>
    </div>
}

export function ChoiceBox({ onChange }) {
    return <>
        <div className='text-box'>Edit Menu</div>
        <BasicSwitches changed={onChange} />
        <div className='text-box'>Add Item</div>
    </>
}

export function SelectBox({ showStatus, showStatusR }) {
    return <><div className='select-box '>
        <div className='box-grid' style={{ visibility: showStatusR }}>
            <SelectLabel customLabel={"Category"} />
            <SelectLabel customLabel={'Item'} />
        </div>
        <div className='box-grid' style={{ visibility: showStatus }}>
            <SimpleTextField label={'New Category'} />
            <FillColorBtn textValue={"Add"} clsName={'add-btn'} />
        </div>
        <div className='box-grid' style={{ visibility: showStatus }}>
            <SimpleTextField label={'New Item'} />
            <FillColorBtn textValue={"Add"} clsName={'add-btn'} />
        </div>
        <div className='delete-btns' style={{ visibility: showStatusR }}>
            <OutLineBtn  textValue={'Delete Category'} clsName={'del-cat-btn'}/>
            <OutLineBtn textValue={'Delete Item'} clsName={'del-itm-btn'} />            
        </div>
    </div></>
}

export function ItemView({ showStatus }) {
    return <div className='item-view'>
        <div className='img-part'>
            <img src="/src/assets/pizza-halopino.jpg" alt="" className='img-box' />
            <UploadBtn clsName={'upload-btn'} />
        </div>
        <div className='detail-part'>
            <div className='detail-text-boxes'>
                <div className='detail-info-boxes'>
                    <div className='detail-item'>
                        Title
                        <SimpleTextField label={''} />
                    </div>
                    <div className='detail-item'>
                        Price
                        <SimpleTextField label={''} />
                    </div>
                </div>
                <div>

                </div>
                <div className='detail-item'>
                    Details
                    <BorderTextAria />
                </div>
            </div>
            <div className='action-part'>
                <FillColorBtn textValue={'Confirm'} clsName={'change-btn'} />
                <OutLineBtn textValue={'Cancel'} clsName={'outline-btn'} />

            </div>
        </div>

    </div>
}