import React,{useState} from 'react'
import './Login.css'
import {auth,provider,providerfb} from '../firebase/firebase';


function Login(props) {
    
    const [nav, setnav] = useState('');
    const [loginPg,setloginpg]=useState('');
    const [resetPg,setresetPg]=useState('none');

    function hidelogin(params) {
        setloginpg('none');
        setresetPg('');
    }
    function showlogin(params) {
        setloginpg('');
        setresetPg('none');
    }
    

    
    function navSignup(){
        setnav('sign-up-mode')
    }
    
    function navSignin(){
        setnav('sign-in-mode')
    }

    // firebase auth
    
    const Signin=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result.user);
            props.setUser(result.user);
            localStorage.setItem("email",result.user.email)
            // props.setIsUser(result.user.email)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    const SigninFb=()=>{
        auth.signInWithPopup(providerfb).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            alert(error.message)
        })
    }


    return (
        <div className="form">
      <div className={`container ${nav}`} >
        <div class="forms-container">
            <div class="signin-signup">
                <form action="#" class="sign-in-form">
                    <div style={{display:'flex'}}>
                    <h2 class="title forgot_title" style={{display:`${loginPg}`}}>Sign in with </h2>
                    <a  id="s_with_gl" className="social-icon"  onClick={Signin}>
                            <i style={{color:'black'}} class="fab fa-google"></i>
                    </a>
                    
                    </div>
                    {/* <h2 class="title forgot_title2"style={{display: `${resetPg}`}}>Reset Password</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="email" placeholder="Email ID" id="user_email" required/>
                    </div>
                    <div class="input-field forgot_input-field" style={{display:`${loginPg}`}}>
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" id="user_password" required/>
                    </div>
                    <div class="login_btn" style={{paddingLeft:' 20px', display: 'inline-flex' }}>
                        <input type="button" value="Login" class="btn solid hide_btn" style={{display:`${loginPg}`}} />
                        <input type="button" value="Reset" class="btn solid" id="reset_btn" style={{display: `${resetPg}`}} />
                        <div class="loader-container">
                            <div class="loader" id="progress2" hidden></div>
                        </div>
                    </div> */}
                    {/* <div class="forgot_btn_hide" style={{margin: '0px 0px'}}>
                        <input type="button" value=" Forgot Password ?" class="btn solid " onClick={hidelogin} style={{display:`${loginPg}`,backgroundColor:'transparent',color:'#5995fd', marginRight: '30px'}} />
                    </div> */}
                        {/* <div class="login_page_btn_hide" style={{display: `${resetPg}`}}>
                        <input type="button" value=" <-  Go to login page " class="btn solid" onClick={showlogin} style={{backgroundColor:'transparent',color:'#5995fd', marginRight: '30px' }} />
                    </div>

                    <p id="messages2" style={{color: '#5995fd'}} hidden>account created succesfully !</p> */}
                    {/* <div class="social-media" style={{marginLeft:'-45px',marginTop:'20px'}}>
                        
                        <a id="s_with_fb" class="social-icon" onClick={SigninFb}>
                            <i class="fab fa-facebook-f"></i>
                        </a>

                       <a id="s_with_gl" class="social-icon" onClick={Signin}>
                            <i class="fab fa-google"></i>
                        </a>

                    </div> */}
                </form>
                <form action="#" class="sign-up-form">
                    <div style={{display:'flex'}}>
                    <h2 class="title">Admin Login</h2>
                    </div>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" id="user_name" required />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                       <input type="text" placeholder="Email" id="new_email" required />
                    </div>

                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" id="new_password" required />

                    </div>
                    <div>
                        <input type="button" class="btn" value="Login" id="signup_btn" />
                        <div class="loader-container" style={{display: 'inline-block'}}>
                            <div class="loader" id="progress1" hidden></div>
                        </div>
                    </div>

                    {/* <p id="messages1" style={{color: '#5995fd'}} hidden>account created succesfully !</p> */}
                    {/* <div class="social-media" style={{marginLeft:'-45px',marginTop:'20px'}}>
                        <a id="s_with_fb" class="social-icon" onClick={SigninFb}>
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a id="s_with_gl" class="social-icon" onClick={Signin}>
                            <i class="fab fa-google"></i>
                        </a>
                    </div> */}
                </form>

            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3 style={{marginTop: '0px'}}>Welcome To</h3>
                    <span style={{fontSize: '40px'}}>E-Library</span>
                    <p>
                        You are a Admin
                    </p>
                    <button class="btn transparent" id="sign-up-btn" onClick={navSignup}>
              Admin Login
            </button>
                </div>
                <img src="https://e-library-1602.web.app/img/log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3 style={{marginTop: '0px'}}>Welcome To</h3>
                    <span style={{fontSize:' 40px'}}>E-Library</span>
                    <p>
                        You are a User
                    </p>
                    <button class="btn transparent" id="sign-in-btn" onClick={navSignin}>
              User Login
            </button>
                </div>
                <img src="https://e-library-1602.web.app/img/register.svg" class="image" alt="" />
            </div>
        </div>
    </div>

        </div>
    )
}

export default Login;