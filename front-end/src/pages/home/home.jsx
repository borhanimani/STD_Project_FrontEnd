import './Home.css'
import * as React from 'react';
import { FillColorBtn } from '/src/tools/Button.jsx';
import { MyToolbar } from '/src/tools/Toolbar.jsx';
import { MyTextAria } from '/src/tools/TextField';
import { RatingControl } from '/src/tools/Rate';
import { Link } from 'react-router-dom';
import { CommentCard } from '/src/tools/Card';

export default function HomePage() {

    const commentList = [{ name: 'Harry', detail: 'This fastfood has a great pizza, specially the pepperony pizza is best. The tomato sause has a great taste and you can smell the onion with tomato and pepperony that mixed together and made it tasty! ', rate: "1" }]
    const [list, setList] = React.useState(commentList);

    function makeComment(commentParams) {
        const newList = [...list, commentParams];
        setList(newList);
    }

    return <div className='home-container'>
        <div className='toolbar'><MyToolbar /></div>
        <div className='home-body-part'>
            <div className='home-text-view'>
                <div className='home-text-box'>
                    <div className='text1'>Bests is yours</div>
                    <div className='text2 font'>The first pizza resurant website, with different type of foods for you! Enjoy your time by ordering online, and hanging out with your family and friends! This is an example project  </div>
                    <div className='home-order-btn'><Link to={"/menu"}><FillColorBtn textValue="Order Now" clsName="fill-color-btn" /></Link>  </div>
                </div>
            </div>
            <div className='home-image-view'></div>
        </div>
        <div className='mid-bottom-part'>
            <div className='comments-box'>
                <ShowComments list={list} />
                <CommentBox called={makeComment} />
            </div>
        </div>
        <div></div>
    </div>
}

export function CommentBox({ called }) {

    const [textAriaValue, setTextAValue] = React.useState('');
    const [rateValue, setRateValue] = React.useState(0);

    function makeInformation() {
        const comment = { name: "Admin", detail: textAriaValue, rate: rateValue };
        setTextAValue('')
        setRateValue(0)
        called(comment);
    }



    return <div className='make-comment'>
        <MyTextAria value={textAriaValue} calledFunction={(event) => setTextAValue(event.target.value)} />
        <RatingControl value={rateValue} calledFunction={setRateValue} />
        <FillColorBtn textValue="Post" clsName="rate-btn " calledFunction={makeInformation} />
    </div>
}

export function ShowComments({ list }) {

    return <div className='comments-view'>
        {
            list.map((item) => {
                console.log(list.length);
                return <CommentCard clsName={'cmt-cart'} info={item} />
            })
        }
    </div>

}
