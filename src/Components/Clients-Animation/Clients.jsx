import img8 from './Clients-Images/Matchday 1.png';
import img9 from './Clients-Images/Locus 2.svg';
import img10 from './Clients-Images/Antriksh 3.png';
import img11 from './Clients-Images/jukisho 4.png';
import img12 from './Clients-Images/Antriksh 5.png';
import img13 from './Clients-Images/bradsol 6.png';
import './Clients.css';

const Clients = () => {
    return ( 
        <>
        <div className="Client">
            <div className="Component">
                <div className="Heading">
                    <h3 className="Trust">
                    Trusted by cool and established brand like yours:
                    </h3>
                </div>
                <div className="Client-Logos">
                    <div className='Matchday'>
                        <img src={img8} alt="Matchday"/>
                    </div>
                    <div className='Locus'>
                        <img src={img9} alt="Locus"/>
                    </div>
                    <div className='Antriksh1'>
                        <img src={img10} alt="Antriksh"/>
                    </div>
                    <div className='Jukisho'>
                        <img src={img11} alt="Jukisho"/>
                    </div>
                    <div className='Antriksh2'>
                        <img src={img12} alt="Antriksh"/>
                    </div>
                    <div className='Bradsol'>
                        <img src={img13} alt="Bradsol"/>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Clients;