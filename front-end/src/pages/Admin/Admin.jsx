import './Admin.css'
import { useState, useEffect } from 'react'
import { MyToolbar } from '/src/tools/Toolbar.jsx'
import { BasicSwitches } from '/src/tools/Switch'
import { FillColorBtn, UploadBtn, OutLineBtn } from '/src/tools/Button'
import { SimpleTextField, PasswordTextField, NumberTextField, BorderTextAria, NumberTextField2 } from '/src/tools/TextField'
import { SelectLabel, SelectLabel2 } from '/src/tools/Select'
import { CircularColor } from '/src/tools/Progress'
import { postMenuItem, postMenuCategory, getCategories, getItems, deleteItem, deleteCategory, getOne, updateItem } from '/src/utils/Connection'

export default function AdminPage() {

    const [visibilityStatus, setVisibilityStatus] = useState('hidden')
    const [visibilityStatusR, setVisibilityStatusR] = useState('visible')
    const [showProgress, setShowProgress] = useState('hidden')
    const [imageFile, setImageFile] = useState('');
    const [imageShow, setImageShow] = useState('');
    const [tilte, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState(null);
    const [categoryName, setCategoryName] = useState('')
    const [categoryId, setCategoryId] = useState(-1);
    const [ItemId, setItemId] = useState('');

    useEffect(() => {
        getAllCategories();
    }, [])

    function clearTexts() {
        setImageFile('')
        setTitle('')
        setDetail('')
        setPrice('')
        setCategoryName('')
    }

    function fillTexts() {
        const item = JSON.parse(sessionStorage.getItem('updateItem'));
        setImageShow(`${item[0].photolink}`)
        setTitle(`${item[0].name}`)
        setDetail(`${item[0].detail}`)
        setPrice(`${item[0].price}`)
        // setCategoryName('') 
    }

    function makeChages() {
        if (tilte && detail && price) {
            if (categoryId != 0) {
                if (visibilityStatus === 'hidden') {
                    const parameters = { "name": tilte, "detail": detail, "price": Number.parseFloat(price), "categoryId": Number.parseInt(categoryId) }
                    try {
                        setShowProgress('visible')
                        const result = updateItem('/edit/update/item', parameters, ItemId).then(() => {
                            setShowProgress('hidden');
                            clearTexts();
                        })

                    } catch (error) {
                        setShowProgress('hidden')
                        alert(error)
                    }
                } else {
                    console.log("eeeeeee");
                    console.log('img', imageFile);
                    try {
                        const parameters = { "name": tilte, "detail": detail, "price": Number.parseFloat(price), "categoryId": Number.parseInt(categoryId), "imageName": imageFile.name }
                        setShowProgress('visible')
                        const result = postMenuItem('/edit/upload', imageFile, parameters).then(() => {
                            setShowProgress('hidden');
                            alert('Item added successful');
                            clearTexts();
                        })

                    } catch (error) {
                        setShowProgress('hidden')
                        alert(error)
                    }
                }
            } else {
                alert('please select a category first ')
            }
        } else {
            alert('Please fill items first')
        }
    }

    function addCategory() {
        if (categoryName) {
            const parameters = { "category": categoryName }
            try {
                setShowProgress('visible')
                const result = postMenuCategory('/edit/upload/category', parameters).then(() => {
                    setShowProgress('hidden');
                    alert('Categorie added successful');
                    clearTexts();
                    getCategories();
                })

            } catch (error) {
                setShowProgress('hidden')
                alert(error)

            }
        } else {
            alert('Please fill new category first')
        }
    }

    async function getAllCategories() {
        try {
            setShowProgress('visible');
            const result = await getCategories('/edit/category');
            console.log('res', result);
            sessionStorage.removeItem('catlist')
            sessionStorage.setItem('catList', JSON.stringify(result))
            setShowProgress('hidden')
        } catch (error) {
            setShowProgress('hidden')
            alert(error)
        }
    }

    async function getCategoryId(id) {
        setCategoryId(id)
        try {
            setShowProgress('visible')
            const result = await getItems('/edit/items/id', id);
            sessionStorage.removeItem('itemList')
            sessionStorage.setItem('itemList', JSON.stringify(result))
            console.log('res2', result);
            setShowProgress('hidden')
        } catch (error) {
            setShowProgress('hidden')
            alert(error)
        }
    }

    async function getItemId(id) {
        setItemId(id)
        try {
            setShowProgress('visible')
            const result = await getOne('/edit/update', id);
            sessionStorage.setItem('updateItem', JSON.stringify(result))
            setShowProgress('hidden')
            fillTexts()
            // setTitle("fdgd")
        } catch (error) {
            setShowProgress('hidden')
            alert(error)
        }
    }

    function deleteItemMenu() {
        if (ItemId != -1 && ItemId) {
            try {
                setShowProgress('visible')
                const result = deleteItem('/edit/delete/item', ItemId).then(() => {
                    setShowProgress('hidden');
                    alert('Item deleted successful');
                    getAllCategories();
                })

            } catch (error) {
                setShowProgress('hidden')
                alert(error)
            }
        } else {
            alert('Please select category and item first')
        }
    }

    function deleteCategoryMenu() {
        if ((categoryId != -1)) {
            try {
                setShowProgress('visible')
                const result = deleteCategory('/edit/delete/category', categoryId).then(() => {
                    setShowProgress('hidden');
                    alert('Category with its Items deleted successful');
                    getAllCategories();
                })
            } catch (error) {
                setShowProgress('hidden')
                alert(error)
            }
        } else {
            alert('Please select category first')
        }
    }

    function chagneVisibility() {
        (visibilityStatus === 'visible') ? setVisibilityStatus('hidden') : setVisibilityStatus('visible');
        (visibilityStatusR === 'visible') ? setVisibilityStatusR('hidden') : setVisibilityStatusR('visible');
    }

    function setImageFileCovert(img) {
        setImageFile(img)
        const convertedImg = URL.createObjectURL(img)
        setImageShow(convertedImg)
    }

    return <div className="admin-page-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className='admin-choice-toolbars'> <ChoiceBox onChange={chagneVisibility} showValue={showProgress} />
        </div>
        <div className="admin-edit-box" >
            {getAllCategories}
            <SelectBox showStatus={visibilityStatus} showStatusR={visibilityStatusR} callNewCategory={addCategory} callCatSet={setCategoryName} categoryValue={categoryName} callSelect={getCategoryId} callSelectItem={getItemId} deleteItm={deleteItemMenu} deleteCtg={deleteCategoryMenu} />
            < ItemView setiImageFile={setImageFileCovert} myImage={imageShow} callSetName={setTitle} callSetDetail={setDetail} callSetPrice={setPrice} nameValue={tilte} detailValue={detail} priceValue={price} callClickOk={makeChages} />
        </div>
    </div>
}

export function ChoiceBox({ onChange, showValue }) {
    return <div className='admin-progress-bar'>
        <div><CircularColor showValue={showValue} /></div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div className='admin-text-box'>Edit Menu</div>
            <BasicSwitches changed={onChange} />
            <div className='admin-text-box'>Add Menu</div>
        </div>
    </div>
}

export function SelectBox({ showStatus, showStatusR, callNewCategory, categoryValue, callCatSet, callSelect, callSelectItem, deleteItm, deleteCtg }) {
    return <><div className='admin-select-box '>
        <div className='admin-box-grid' style={{ visibility: 'visible' }}>
            <SelectLabel customLabel={"Category"} calledFunction={callSelect} />
        </div>
        <div className='admin-box-grid' style={{ visibility: showStatusR }}>
            <SelectLabel2 customLabel={'Item'} calledFunction={callSelectItem} />
        </div>
        <div className='admin-box-grid' style={{ visibility: showStatus }}>
            <SimpleTextField label={'New Category'} calledFunction={callCatSet} value={categoryValue} />
            <FillColorBtn textValue={"Add"} clsName={'admin-add-btn'} calledFunction={callNewCategory} />
        </div>
        <div className='admin-delete-btns' style={{ visibility: showStatusR }}>
            <OutLineBtn textValue={'Delete Category'} clsName={'admin-del-cat-btn'} calledFunction={deleteCtg} />
            <OutLineBtn textValue={'Delete Item'} clsName={'admin-del-itm-btn'} calledFunction={deleteItm} />
        </div>
    </div></>
}

export function ItemView({ showStatus, setiImageFile, myImage, callSetName, callSetDetail, callSetPrice, nameValue, detailValue, priceValue, callClickOk, callClickCancel }) {
    return <div className='admin-item-view'>
        <div className='admin-img-part'>
            {myImage ? <img src={myImage} alt="" className='admin-img-box' /> : <img src='/src/assets/symbol-3296656_1280.png' width={'20%'} style={{ border: 'solid', padding: '5px' }} />}
            {/* <img src={"https://res.cloudinary.com/dya4ginvl/image/upload/v1709297086/skbzg50mukout5mhuyjf.jpg"} alt="" /> */}
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