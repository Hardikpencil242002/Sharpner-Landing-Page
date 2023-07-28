import img14 from './Kit-images/Background.png';
import './Kit.css'

const Kit = () => {
    return ( 
        <>
        <div className="Kit">
            <div className="Kit-Text-Box">
                <div className='Kit-Text-Heading'>
                    <h1 className='Kit-Heading'>
                    5000+ Components & Variants in the kit!
                    </h1>
                    <p className='Kit-Para'>
                    All elements are consistent and 100% compatible with each other. Text, color and shadow styles included as well.
                    </p>
                </div>
                <div className='Kit-Metrics'>
                    <div className='Metric1'>
                        <h1 className='Metric1h'>
                            500+
                        </h1>
                        <p className='Metric1p'>
                            Style Guides
                        </p>
                    </div>
                    <div className='Metric2'>
                        <h1 className='Metric2h'>
                            80+
                        </h1>
                        <p className='Metric2p'>
                            Templates
                        </p>
                    </div>
                </div>
                <div className='Kit-Button'>
                    <button>
                        Join The Waitlist
                    </button>
                </div>
            </div>
            <div className="Kit-Background">
                <img src={img14} alt='BG'/>
            </div>
        </div>
        </>
     );
}
 
export default Kit;