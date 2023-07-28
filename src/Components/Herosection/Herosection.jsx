import img2 from './Hero-Images/SS.png';
import img3 from './Hero-Images/SS2.png';
import './Hero.css';

const Herosection = () => {
    return ( 
        <>
        <div className="Hero">
            <div className="Text">
                <div className='Content'>
                    <h1 className="Heading">
                    Volutpat eu sed tortor suspendisse.
                    </h1>
                    <p className="abstract">
                    Proin neque etiam tempor sit a maecenas hendrerit ac tempor. Tempor sed egestas aliquet fringilla quisque donec viverra.
                    </p>
                </div>
                <button className="Waitlist">
                Join the Waitlist
                </button>
            </div>
            <div className="Hero-Image">
                <img src={img2} alt='Background'/>
            </div>
        </div>
        </>
     );
}
 
export default Herosection;