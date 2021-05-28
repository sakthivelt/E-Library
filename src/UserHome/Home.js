import React from 'react';
import './Home.css';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import './HomeContent.css'

function Home() {
    return (
            <div className="mainContent" style={{marginTop:'65px',height:'100vh'}} >
                <div className='overlayer' style={{padding:'50px 50px'}}>
                
                                
                <div className='content' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'60vh'}}>    
                    <div className="top__content">
                    <h1 style={{color:'white',fontSize:'2.5rem'}}><span style={{color:'white',fontSize:'3rem'}}>E</span>-Library<TurnedInNotIcon/></h1>
                    </div>
                    <div className="bottom__content">
                            <h5 className="tagline">Smart Learning on your Mobile</h5>
                            <h1 className="title">Every Ebooks on available here<span>.</span></h1>
                            <p className="message">You also Buy a book in here online, or with the app.</p>
                            <div className="icons">
                                <a className="social-icon">
                                <i id="l_with_fb" className="fab fa-facebook-f"></i>
                                </a>
                                <a id="l_with_t" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a id="l_with_gl" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a id="l_with_l" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                    </div>
                </div>

                </div>
            </div>
    )
}

export default Home;
