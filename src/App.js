import React, { Component } from "react";
import Nav from "./components/Navigation/Nav.js";
import Logo from "./components/Logo.js";
import ImageLinkform from "./components/ImageLinkform.js";
import FaceRecognition from "./components/FaceRecognition.js";
// import Rank from "./components/Rank.js";
import Particlebackground from "./components/particles/Particlesbackground.js";
import "./App.css";
import SignIn from "./components/SignIn.js";
import Register from './components/Register/register.js';

const initialState={
  input: "",
  imageUrl: '',
  box: {},
  route: 'SignIn',
  isSignedIn: true,
  user: 
  {
    id: '',
    name: '',
    email: '',
    entries: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState; 
  
  }
loadUser = (data=>{
  this.setState({user:{
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined,
  }})
  })

  calculateFaceLocation = (data)=>{
    const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementById('inputimage');
    const width= Number(image.width);
    const height= Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box)=>{
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  
  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });  
    
    fetch('http://localhost:3001/imageurl', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(
          {
              imageurl: this.state.input
          }
          )})
          .then((response) => response.text())          
          .then((result) => {if(result)
        { 
                fetch('http://localhost:3001/image', {
                method: 'put',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: this.state.user.id
                    }
                )})
                .then(response => response.json())
                .then(count=>{
                    this.setState(Object.assign(this.state.user, {entries: count}) )
                  })
              }
    //==================updating entry count end=====================

        this.displayFaceBox(this.calculateFaceLocation(JSON.parse(result)))
      })
       .catch((error) => console.log("error", error));

  };
  
  onRouteChange = (route) => {
  
    if (route === 'home'){
      this.setState ({isSignedIn: true})
      }
      else {
        this.setState (initialState)
      }
    
    this.setState({route: route})
  }
  
  render() {
    return (
      <div className="App" >
            <Particlebackground />
            
                { this.state.route === 'SignIn' ?
                    <div>
                    {/* <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/> */}
                    <SignIn imageUrl={this.state.imageUrl} loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
                    </div>
                    :
                    
                    this.state.route === 'Register' ?
                    <div>
                    <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
                    <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
                    </div>
                    :
                    <div>
                    <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
                    <Logo />
                    {/* <Rank name={this.state.user.name} entries={this.state.user.entries}/> */}
                    <ImageLinkform
                      onInputChange={this.onInputChange}
                      onPictureSubmit={this.onPictureSubmit}
                    />
                    <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
                </div>
                } 
      </div>
    )
  }
}
export default App;