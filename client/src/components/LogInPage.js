import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import '../css/login.css';
import '../css/rosslogincss.css';


export default class LogInPage extends Component {
  state = {
    username: '',
    password:'',
    availableUser: [],
    fireRedirect:false,
    fireCreateAccount: false
  }

 // componentDidMount(){
 //    const auth = localStorage.getItem('username')
 //    if (auth){
 //      window.location.replace('/main')
 //    }
 //  }

  handleInputChangeUsername(e){
    const value= e.target.value
    this.setState(prevState => ({
        username: value,
        fireCreateAccount: false
    }))
  }

  handleInputChange(e){
    const value= e.target.value
    this.setState(prevState => ({
        password: value,
        fireCreateAccount: false
    }))
  }


  // the event for a form is...onSubmit
  handleFormSubmit(e){
    e.preventDefault()
    axios.post('/userauth', {
       username: this.state.username,
       password: this.state.password,
    }).then(res => {
      if(res.data.data === 'good pass'){
        localStorage.setItem('username', res.data.user)
        localStorage.setItem('user_id', res.data.user_id)
      this.setState({
        fireRedirect:true,
      })} else {
       this.setState({
        fireCreateAccount:true,
      })
      }console.log('this is user_id:',res.data)
    })
  }



  render() {
  return(
    <div className="login">
        <img className="loginLogo" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541561444/Screen_Shot_2018-11-06_at_10.29.04_PM.png" alt="Instagram"/>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            <input
              className='input1'
              type="text"
              placeholder="Username"
              username="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChangeUsername(e)}
            />
          </label>
          <label>
            <input
              className='input'
              type="password"
              placeholder="Password"
              username="password"
              value={this.state.password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input className="submit" type="submit" value="Login" />
        </form>

        {this.state.fireRedirect
          ? <Redirect push to={'/Main'} />
          : ''}
        <Link to='/CreateAccount' className='createAccount'>Create User Account</Link>
        {this.state.fireCreateAccount
          ?
          <div className= 'fullBackground'>
            <div className= 'customAlert'>
                 <span><p> Incorrect Username</p></span>
                 <p>The username you entered doesn't appear to belong to an account. Please check your username and try again.</p>
                 <br></br>
                  <Link to='/' className ='tryAgain' onClick = 'window.location.reload()'> Try Again </Link>
             </div>
           </div>
          : ''}
      </div>
    )
  }
}
