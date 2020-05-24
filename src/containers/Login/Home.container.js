import Login from "./Login.container";
import React, { Component } from 'react';
import "./../../App.css"
import HomePageContainer from "./HomePage.container";
import PropTypes from 'prop-types';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : JSON.parse(sessionStorage.getItem('user')),//lay data sau khi dang nhap
      name:{}
    }
    // console.log(this.state.user)
  };
  onLogin (value) {
    console.log(value)
    if (value !==null) {
      this.setState({
        user:value
      });
    }
    // localStorage.setItem('user',JSON.stringify(this.state.user));//lưu user lên local storage
  }
  onLogout(){
    this.setState({
      user : null
    });
    sessionStorage.clear();
  }

  // onLoginPage = () => {
  //   this.context.router.push("/login")
  // }

  handleComponent () {
    if (this.state.user === null) {
      // this.onLoginPage()
      
      // this.onLoginPage()
      return (
      <div className="flexible-content">
      <main id="content" className="p-5">
      <Login onLogin = {this.onLogin.bind(this)}></Login>
      </main>
      </div>
      )
    }
    else{
      // this.context.router.push("/menu")
      return (
        <div className="flexible-content">
            <HomePageContainer />
        </div>
      )
    }
 
  };
  render() {
    // console.log(this.state.user)
    let Component=this.handleComponent();
    return (
      <div >
        {Component}
      </div>
    );
  }
}

HomePage.contextTypes = {
  router: PropTypes.object
}
export default HomePage;


