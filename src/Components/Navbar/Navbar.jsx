import img1 from './Navbar-Images/logo.jpg'
import './Navbar.css';

const Navbar = () => {
    return ( 
        <>
        <div className="Navbar">
            <div className="Nav">
                <div className="Left-side">
                    <img src={img1} alt="logo"/>
                    <h1>
                        PencilHacker
                    </h1>
                </div>
                <div className="Centre">
                    <h1 className='why'>
                        Why PH Kit?
                    </h1>
                    <h1 className='price'>
                        Pricing
                    </h1>
                    <h1 className='faq'>
                        FAQs
                    </h1>
                </div>
                <div className="Right-Side">
                    <button className='join'>
                        Join the Waitlist
                    </button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;