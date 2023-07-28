import img20 from './Who-Images/117.Leadership.svg';
import img21 from './Who-Images/123.Website-builder.svg';
import img22 from './Who-Images/147.Multitasking.svg';
import img23 from './Who-Images/84.Learning.svg';
import './Who.css'

const Who = () => {
    return ( 
        <>
        <div className='Who'>
            <div className='Who-Component'>
                <div className='Who-Heading'>
                    <h1>
                    Who is this for?
                    </h1>
                </div>
                <div className='Who-Options'>
                    <div className='Option1'>
                        <div className='Option1-img'>
                            <img src={img20} alt='Logo'/>
                        </div>
                        <div className='Option1-Content'>
                            <h1>
                            Design Teams
                            </h1>
                            <p>
                            Proin neque etiam tempor sit a maecenas hendrerit ac tempor.
                            </p>
                        </div>
                    </div>
                    <div className='Option2'>
                        <div className='Option2-img'>
                            <img src={img21} alt='logo'/>
                        </div>
                        <div className='Option2-Content'>
                            <h1>
                            Start Ups                            
                            </h1>
                            <p>
                            Proin neque etiam tempor sit a maecenas hendrerit ac tempor.                            
                            </p>
                        </div>
                    </div>
                    <div className='Option3'>
                        <div className='Option3-img'>
                            <img src={img22} alt='Logo'/>
                        </div>
                        <div className='Option3-Content'>
                            <h1>
                            Freelancers                            
                            </h1>
                            <p>
                            Proin neque etiam tempor sit a maecenas hendrerit ac tempor.                            
                            </p>
                        </div>
                    </div>
                    <div className='Option4'>
                        <div className='Option4-img'>
                            <img src={img23} alt='Logo'/>
                        </div>
                        <div className='Option4-Content'>
                            <h1>
                            Students
                            </h1>
                            <p>
                            Proin neque etiam tempor sit a maecenas hendrerit ac tempor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Who;