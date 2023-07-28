import img24 from './FAQ-Images/cancel.svg';
import img25 from './FAQ-Images/add_circle.svg';
import './FAQ.css';

const FAQ = () => {
    return ( 
        <>
        <div className="FAQ">
            <div className="FAQ-Component">
                <div className="FAQ-Text">
                    <h1>
                    Frequently Asked Questions
                    </h1>
                    <p>
                    Still have a question? Send an email to help@sharpdesign.com
                    </p>
                </div>
                <div className="Questions">
                    <div className="Q1">
                        <div className="QnA">
                            <div className="QnA-Text">
                                <h1>
                                What do I need to use Design System UI Kit?
                                </h1>
                                <p>
                                All you need is a free Figma account. If you're looking to utilize the Design System as a library in Figma, you'll need to enable the Team Library feature which is available on paid Figma plans.
                                </p>
                            </div>
                            <div className="Plus">
                                <img src={img24} alt='logo'/>
                            </div>
                        </div>
                    </div>
                    <div className="Q2">
                        <div className="QnA">
                            <div className="QnA-Text">
                                <h1>
                                What's the license agreement for the Design System UI Kit?
                                </h1>
                            
                            </div>
                            <div className="Plus">
                                <img src={img25} alt='logo'/>
                            </div>
                        </div>
                    </div>
                    <div className="Q3">
                        <div className="QnA">
                            <div className="QnA-Text">
                                <h1>
                                Can I get the Design System UI Kit for my entire team?
                                </h1>
                                
                            </div>
                            <div className="Plus">
                                <img src={img25} alt='logo'/>
                            </div>
                        </div>
                    </div>
                    <div className="Q4">
                        <div className="QnA">
                            <div className="QnA-Text">
                                <h1>
                                How do I import the design file into Figma?
                                </h1>
                                
                            </div>
                            <div className="Plus">
                                <img src={img25} alt='logo'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default FAQ;