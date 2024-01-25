import React from 'react';
import './register.css';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    onNameChange = (event)=>{
    this.setState({name: event.target.value})
    }
    onEmailChange = (event)=>{
        this.setState({email: event.target.value})
    } 
    onPasswordChange = (event)=>{
        this.setState({password: event.target.value})
    } 
    dismissErrMsg=()=>{
        document.getElementById('error-msg').style.display= 'none';
    }

onButtonRegister = ()=>{
    fetch('http://localhost:3001/register', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(
            {
                name: this.state.name,
                email:this.state.email,
                password: this.state.password                
            }
        )})
        .then(response =>response.json())
        .then(user=> {if(!user.name || !user.email || !user.id)
        {
            let errorMsg = document.getElementById('error-msg');
            errorMsg.style.display= 'block';
            this.props.onRouteChange('Register')
        }
        else {
            this.props.loadUser(user);
            this.props.onRouteChange('home')}
        })                
}
    render(){ 
        return (
        <article className="br1 ba dark-gray b--black-12 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
           <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="name">Name
                            </label>
                            <input 
                            onChange= {this.onNameChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            onChange={this.onEmailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" />
                        </div>                   
                    </fieldset>
                    <div className="">
                    <input 
                    onClick= {this.onButtonRegister}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register" />    
                    <div id = 'error-msg' className="b--black f5 link dim red db fw6 ph0 mh0 pointer">
                        <p className=" pv2 bg-transparent grow pointer f6 di" >
                            Fill all the fields
                        </p>
                        <input 
                            onClick= {this.dismissErrMsg}
                            id= 'dismissBtn'
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

export default Register;