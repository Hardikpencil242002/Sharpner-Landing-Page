import img24 from './Pricing-Images/favorite.svg';
import './Pricing.css';

const Pricing = () => {
    return ( 
        <>
        <div className='Pricing'>
            <div className='Pricing-Cmponent'>
                <div className='Pricing-Heading'>
                    <h1>
                    Pricing
                    </h1>
                </div>
                <div className='Pricing-Palns'>
                    <div className='Plan1'>
                        <div className='Plan1-text'>
                            <h1 className='Head'>
                            Economy
                            </h1>
                            <h1 className='Price'>
                            99$
                            </h1>
                            <div className='List'>
                                <ul className='List1'>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Plan1-Buttons'>
                            <div className='Plan1-Button1'>
                                <button>
                                    <img src={img24} alt='heart'/>
                                    Figma Preview
                                </button>
                            </div>
                            <div className='Plan1-Button2'>
                                <button>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='Plan2'>
                        <div className='Plan2-text'>
                            <h1 className='Head'>
                            Pro
                            </h1>
                            <h1 className='Price'>
                            199$
                            </h1>
                            <div className='List'>
                                <ul className='List2'>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Plan2-Buttons'>
                            <div className='Plan2-Button1'>
                                <button>
                                    <img src={img24} alt='heart'/>
                                    Figma Preview
                                </button>
                            </div>
                            <div className='Plan2-Button2'>
                                <button>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='Plan3'>
                        <div className='Plan3-text'>
                            <h1 className='Head'>
                            Expert
                            </h1>
                            <h1 className='Price'>
                            399$
                            </h1>
                            <div className='List'>
                                <ul className='List3'>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                    <li>Proin neque etiam tempor.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Plan3-Buttons'>
                            <div className='Plan3-Button1'>
                                <button>
                                    <img src={img24} alt='heart'/>
                                    Figma Preview
                                </button>
                            </div>
                            <div className='Plan3-Button2'>
                                <button>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Pricing;