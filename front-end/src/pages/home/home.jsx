import './Home.css'
import * as React from 'react';
import { FillColorBtn } from '/src/tools/Button.jsx';
import { MyToolbar } from '/src/tools/Toolbar.jsx';
import { MyTextAria } from '/src/tools/TextField';
import { RatingControl } from '/src/tools/Rate';

export default function HomePage() {

    return <div className='home-container'>
        <div className='toolbar'><MyToolbar /></div>
        <div className='home-body-part'>
            <div className='home-text-view'>
                <div className='home-text-box'>
                    <div className='text1'>Bests is yours</div>
                    <div className='text2 font'>The first pizza resurant website, with different type of foods for you! Enjoy your time by ordering online, and hanging out with your family and friends! This is an example project  </div>
                    <div className='home-order-btn'> <FillColorBtn textValue="Order Now" clsName="fill-color-btn"/> </div>
                </div>
            </div>
            <div className='image-view'></div>
        </div>
        <div className='mid-bottom-part'>
            <div className='comments-box'>
                <div className='comments-view'></div>
                <div className='make-comment'>
                    <MyTextAria />
                    <RatingControl />
                    <FillColorBtn textValue="Post" clsName="rate-btn " />
                </div>
            </div>
        </div>
        <div></div>
    </div>
}

// export function MakeComment(){

// }
