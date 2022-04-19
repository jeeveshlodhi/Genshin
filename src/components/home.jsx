import '../css/home.css'
import logo from '../assets/logo.png'
import ps4 from '../assets/ps4.png'
import windows from '../assets/windows.png';
import play from '../assets/play.png';
import apple from '../assets/apple.png'
import videoWrapper from '../assets/videoWrapper.png'
import playBtn from '../assets/playBtn.png';

const Home = () => {
  return (
    <div className="homeWrapper">
        <div className='headerWrapper'>
            <div className='logoWrapper'>
                <img src={logo} alt="" className='logo' />
            </div>
            <div className='optionWrapper'>
                <div>Home</div>
                <div>Banners</div>
                <div>Companions</div>
                <div>Maps</div>
                <div>Hoyolabs</div>
                <div>Interactive Map</div>
            </div>
            <div className='sideMenu'>
                <input type="button" value="Download" className='downloadBtn' />  
            </div>
        </div>
        <div className='downloadWrapper'>
            <div>
                <img src={videoWrapper} alt="" className='videoWrapper' />
                <input type="image" src={playBtn} value="" className='videoBtn' />
            </div>
            <div className='downloadLinks'>
                <img src={ps4} alt="" />
                <img src={play} alt="" />
                <img src={apple} alt="" />
                <img src={windows} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Home;
