import './Admin.css'
import { useState } from 'react'
import { MyToolbar } from '/src/tools/Toolbar.jsx'
import { BasicSwitches } from '/src/tools/Switch'
import { FillColorBtn, UploadBtn, OutLineBtn } from '/src/tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField, BorderTextAria, NumberTextField2 } from '/src/tools/TextField'
import { SelectLabel } from '/src/tools/Select'
import { CircularColor } from '/src/tools/Progress'
import { postMenuItem } from '/src/utils/Connection'

export default function AdminPage() {

    const [visibilityStatus, setVisibilityStatus] = useState('hidden')
    const [visibilityStatusR, setVisibilityStatusR] = useState('visible')
    const [showProgress, setShowProgress] = useState('hidden')
    const [imageFile, setImageFile] = useState('');
    const [tilte, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState(null);
    const [categoryId, setCategoryId] = useState(0);

    console.log('image', imageFile);

    function makeChages() {
        console.log('ff');
        if (tilte && detail && price) {
            const parameters = { "name": tilte, "detail": detail, "price": Number.parseFloat(price), "Categoryid": categoryId, "imageName": imageFile.name }
            if (visibilityStatus === 'hidden') {
                //use update
            } else {
                try {
                    console.log('nssss', imageFile.name);
                    setShowProgress('visible')
                    const a = postMenuItem('/edit/upload', imageFile, parameters).then(() => {
                        setShowProgress('hidden');
                        alert('Item added successful');
                    })

                } catch (error) {
                    setShowProgress('hidden')
                    alert(error)
                }

            }
        } else {
            alert('Please fill items first')
        }
    }

    function chagneVisibility() {
        (visibilityStatus === 'visible') ? setVisibilityStatus('hidden') : setVisibilityStatus('visible');
        (visibilityStatusR === 'visible') ? setVisibilityStatusR('hidden') : setVisibilityStatusR('visible');

        // console.log(isSignup);
    }

    return <div className="admin-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='admin-choice-toolbars'> <ChoiceBox onChange={chagneVisibility} showValue={showProgress} />
        </div>
        <div className="admin-edit-box" >
            <SelectBox showStatus={visibilityStatus} showStatusR={visibilityStatusR} />
            <ItemView setiImageFile={setImageFile} myImage={imageFile} callSetName={setTitle} callSetDetail={setDetail} callSetPrice={setPrice} nameValue={tilte} detailValue={detail} priceValue={price} callClickOk={makeChages} />
        </div>
    </div>
}

export function ChoiceBox({ onChange, showValue }) {
    return <>
        <div className='admin-progress-bar'>
            <div><CircularColor showValue={showValue} /></div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className='admin-text-box'>Edit Menu</div>
                <BasicSwitches changed={onChange} />
                <div className='admin-text-box'>Add Item</div>
            </div>
        </div>
    </>
}

export function SelectBox({ showStatus, showStatusR }) {
    return <><div className='admin-select-box '>
        <div className='admin-box-grid' style={{ visibility: showStatusR }}>
            <SelectLabel customLabel={"Category"} />
            <SelectLabel customLabel={'Item'} />
        </div>
        <div className='admin-box-grid' style={{ visibility: showStatus }}>
            <SimpleTextField label={'New Category'} />
            <FillColorBtn textValue={"Add"} clsName={'admin-add-btn'} />
        </div>
        <div className='admin-box-grid' style={{ visibility: showStatus }}>
            <SimpleTextField label={'New Item'} />
            <FillColorBtn textValue={"Add"} clsName={'admin-add-btn'} />
        </div>
        <div className='admin-delete-btns' style={{ visibility: showStatusR }}>
            <OutLineBtn textValue={'Delete Category'} clsName={'admin-del-cat-btn'} />
            <OutLineBtn textValue={'Delete Item'} clsName={'admin-del-itm-btn'} />
        </div>
    </div></>
}

export function ItemView({ showStatus, setiImageFile, myImage, callSetName, callSetDetail, callSetPrice, nameValue, detailValue, priceValue, callClickOk, callClickCancel }) {
    return <div className='admin-item-view'>
        <div className='admin-img-part'>
            {myImage ? <img src={URL.createObjectURL(myImage)} alt="" className='admin-img-box' /> : <img src='/src/assets/symbol-3296656_1280.png' width={'20%'} style={{ border: 'solid', padding: '5px' }} />}
            <UploadBtn clsName={'admin-upload-btn'} calledFunction={setiImageFile} />
        </div>
        <div className='admin-detail-part'>
            <div className='admin-detail-text-boxes'>
                <div className='admin-detail-info-boxes'>
                    <div className='admin-detail-item'>
                        Title
                        <SimpleTextField label={''} calledFunction={callSetName} value={nameValue} />
                    </div>
                    <div className='admin-detail-item'>
                        Price
                        <NumberTextField2 calledFunction={callSetPrice} value={priceValue} />
                    </div>
                </div>
                <div>

                </div>
                <div className='admin-detail-item'>
                    Details
                    <BorderTextAria calledFunction={callSetDetail} value={detailValue} />
                </div>
            </div>
            <div className='admin-action-part'>
                <FillColorBtn textValue={'Confirm'} clsName={'admin-change-btn'} calledFunction={callClickOk} />
                <OutLineBtn textValue={'Cancel'} clsName={'admin-outline-btn'} calledFunction={callClickCancel} />

            </div>
        </div>

    </div>
}