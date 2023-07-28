import img4 from './Benefits-Images/illustration.svg';
import img5 from './Benefits-Images/Group 13885.svg';
import img6 from './Benefits-Images/166.Painting.svg';
import img7 from './Benefits-Images/Illustration.jpg';
import './Benefits.css';

const Benefits = () => {
    return ( 
        <>
        <div className="Section">
            <div className="Benefits">
                <h1 className="Title">
                The only design source you’ll ever need
                </h1>
                <div className="First">
                    <div className='Written1'>
                        <img src={img4} alt='Logo'/>
                        <h2 className='Heading'>
                            Easy Customizability in seconds
                        </h2>
                        <p className='Para'>
                            Extensive customization options allowing designers to tailor components to match their unique design visions. Component Variants and Properties make maintaining and using components intuitive. Change a component’s state, type, size, or icon with a single click.
                        </p>
                    </div>
                    <div className='Blank'>
                        <img src={img7} alt='Blank'/>
                    </div>
                </div>
                <div className="Second">
                    <div className='Blank'>
                        <img src={img7} alt='Blank'/>
                    </div>
                    <div className='Written2'>
                        <img src={img5} alt='Logo'/>
                        <h2 className='Heading'>
                            Easily Switch between Light and Dark Modes                    
                        </h2>
                        <p className='Para'>
                            Extensive customization options allowing designers to tailor components to match their unique design visions. Customize the components and switch between light and dark modes.                    
                        </p>
                    </div>
                </div>
                <div className="Third">
                    <div className='Written3'>
                        <img src={img6} alt='Logo'/>
                        <h2 className='Heading'>
                            Extensive Style Guide Library                    
                        </h2>
                        <p className='Para'>
                            Extensive customization options allowing designers to tailor components to match their unique design visions. Customize the components and switch between light and dark modes.
                        </p>
                    </div>
                    <div className='Blank'>
                        <img src={img7} alt='Blank'/>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Benefits;