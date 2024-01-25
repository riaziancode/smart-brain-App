import React from 'react';
import './signin.css';



class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            SignInEmail: '',
            SignInPassword: ''         
        }
    }
    dismissErrMsg=()=>{
        document.getElementById('error-el').style.display= 'none'}

    onEmailChange= (event)=>{
    this.setState({SignInEmail: event.target.value})}
    
    onPasswordChange= (event)=>{
        this.setState({SignInPassword: event.target.value})}
    
        onSubmitSignin=()=>{   
            // this.props.loadUser(user);
            this.props.onRouteChange('home')

        //     fetch('http://localhost:3001/signin', {
        //     method: 'post',
        //     headers: {'Content-type': 'application/json'},
        //     body: JSON.stringify({
        //         email: this.state.SignInEmail,
        //         password: this.state.SignInPassword
        //     })
        // })
        // .then(response => response.json())
        // .then(user=> {if(!user.id || !user.name || !user.email)
        // {
        //     let errorMsg = document.getElementById('error-el');
        //     errorMsg.style.display= 'block';
        //     this.props.onRouteChange('SignIn')
        // }else {
        //     this.props.loadUser(user);
        //     this.props.onRouteChange('home')}
        // })
    }

    render(){
        const { onRouteChange}= this.props;
        return (
            <article className="br1 ba dark-gray b--black-12 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
            <main className="pa4 black-80">
                <div className=" measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                onChange={this.onEmailChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                required
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    required 
                                />
                            </div>              
                            </fieldset>
                            <div className="">
                            <input 
                            onClick= {this.onSubmitSignin}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in" />
                            </div>
                            <div className="lh-copy mt3">
                                <p onClick={()=>onRouteChange('Register')} className="f5 link dim black db fw6 ph0 mh0 pointer">Click SIGN IN to enter the App</p>
                        {/* <p onClick={()=>onRouteChange('Register')} className="f5 link dim black db fw6 ph0 mh0 pointer">Register</p> */}
                        <div id = 'error-el' className="b--black f5 link dim red db fw6 ph0 mh0 pointer">
                            <p className=" pv2 bg-transparent grow pointer f6 di" >
                                Fill all the fields
                            </p>
                            <input 
                                onClick= {this.dismissErrMsg}
                                id= 'dismiss-btn'
                                className="bg-transparent grow pointer " 
                                type="submit" 
                                value="x"/>
                        </div>

                    </div>
                </div>
            </main>
        </article>
        )
    }
}
export default SignIn;
