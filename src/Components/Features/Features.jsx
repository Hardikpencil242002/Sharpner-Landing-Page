import img14 from './Features-images/256.Exploring-The-Globe.svg';
import img15 from './Features-images/150.Cubes.svg';
import img16 from './Features-images/191.Focus.svg';
import img17 from './Features-images/79.Login.svg';
import img18 from './Features-images/106.Tools.svg';
import img19 from './Features-images/221.Googling.svg';
import './Features.css';

const Features = () => {
    return ( 
        <>
        <div className="Features">
            <div className="Features-Column">
                <div className="Features-Heading">
                    <h1>
                        What makes it the Ultimate UI Kit
                    </h1>
                </div>
                <div className="Features-Cubes">
                    <div className="Cube1">
                        <div className="Cube1-image">
                            <img src={img14} alt='logo'/>
                        </div>
                        <div className="Cube1-content">
                            <h1>
                            Fully Accessible
                            </h1>
                            <p>
                            100% compliant with WCAG 2.1 accessibility contrast ratios
                            </p>
                        </div>
                    </div>
                    <div className="Cube2">
                        <div className="Cube2-image">
                            <img src={img15} alt='logo'/>
                        </div>
                        <div className="Cube2-content">
                            <h1>
                            Atomic Design
                            </h1>
                            <p>
                            Components built with nested atoms and molecules for consistency
                            </p>
                        </div>
                    </div>
                    <div className="Cube3">
                        <div className="Cube3-image">
                            <img src={img16} alt='logo'/>
                        </div>
                        <div className="Cube3-content">
                            <h1>
                            8pt Grid System
                            </h1>
                            <p>
                            All spacing & sizing is measured in increments of an 8pt base unit
                            </p>
                        </div>
                    </div>
                    <div className="Cube4">
                        <div className="Cube4-image">
                            <img src={img17} alt='logo'/>
                        </div>
                        <div className="Cube4-content">
                            <h1>
                            Clear Documentation
                            </h1>
                            <p>
                            Automatic documentation for consistent use and easy team comms
                            </p>
                        </div>
                    </div>
                    <div className="Cube5">
                        <div className="Cube5-image">
                            <img src={img18} alt='logo'/>
                        </div>
                        <div className="Cube5-content">
                            <h1>
                            Light & Dark Themes
                            </h1>
                            <p>
                            Light and dark themes are supported to fit any type of project
                            </p>
                        </div>
                    </div>
                    <div className="Cube6">
                        <div className="Cube6-image">
                            <img src={img19} alt='logo'/>
                        </div>
                        <div className="Cube6-content">
                            <h1>
                            Mobile Design Friendly
                            </h1>
                            <p>
                            Build with Auto Layout, constraints, layouts & grids
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Features
