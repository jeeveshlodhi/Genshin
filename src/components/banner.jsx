import { useState , useEffect} from 'react';
import '../css/banner.css'
import bannerImg1 from '../assets/b1.jpg'
import bannerImg2 from '../assets/b2.jpg'
import bannerImg3 from '../assets/b3.jpg'
import bannerImg4 from '../assets/b4.png'
import bannerImg5 from '../assets/b5.jpg'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

const images = [
    {
        key:1,
        img: bannerImg1
    },
    {
        key:2,
        img: bannerImg2
    },
    {
        key:3,
        img: bannerImg3
    },
    {
        key:4,
        img: bannerImg4
    },
    {
        key:5,
        img: bannerImg5
    }
]

const Banner = () => {
    
    const [sliderImg, setSliderImg] = useState(1)
    const [index, setIndex] = useState([4,0,1])
    
    const prevClick = async ()=>{
        let arr = index;
        let t = arr.pop();
        console.log(t)
        if(t == 2){
            arr.unshift(4)
        }else{
            arr.unshift(arr[0]-1);
        }
        setIndex(arr)
        console.log(arr)
        
    }

    const nextClick = ()=>{
        
    }
    
    return (
        <div className="bannerWrapper">
            <div className='bannerSlider'>
                <div className='mainSlider'>
                    <img src={images[index[1]].img} alt="" className='bannerImg' />
                </div>
                <div className='subSlider'>
                    <input type='image' src={leftArrow} className='arrow'  onClick={()=>prevClick()}/>
                    <img src={images[index[0]].img} alt="" className='prev' />
                    <img src={images[index[1]].img} alt="" className='curr' />
                    <img src={images[index[2]].img} alt="" className='next'/>
                    <input type='image' src={rightArrow}  className='arrow' onClick={()=>nextClick()} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
