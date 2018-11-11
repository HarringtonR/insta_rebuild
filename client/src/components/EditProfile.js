import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


export default class EditProfile extends Component {
  state = {
    id: '',
    username: '',
    password:'',
    full_name: '',
    phone: '',
    bio: '',
    profpic_url: '',
    fireRedirect: false
  }

  componentDidMount() {
  let username = localStorage.getItem('username')

  axios.get(`/editprofile/${username}`)
    .then((res) => {
      // console.log('this is res: ', res.data.data);
      const obj = res.data.data;
      this.setState({
        username: obj.username,
        password: obj.password,
        full_name: obj.full_name,
        phone: obj.phone,
        bio: obj.bio,
        profpic_url: obj.profpic_url,
        id: obj.id
      })
    })
      .catch(err => console.log(err));
  }


  async handleInputChange(e){
    const name = e.target.name
    const value = e.target.value
    await this.setState(prevState => ({
       [name]: value
    }));
    // console.log("this is state: ", this.state)
  }


  // the event for a form is...onSubmit
  handleFormSubmit(e){
    e.preventDefault()
    console.log('SATATE', this.state)
    const username = localStorage.getItem('username')
    axios.put(`/editprofile/${username}`, {
       username: this.state.username,
       password: this.state.password,
       full_name: this.state.full_name,
       phone: this.state.phone,
       bio: this.state.bio,
       profpic_url: this.state.profpic_url
    }).then(res => {
        this.setState({
          fireRedirect: true,
        });
      })
    .catch(err => console.log(err));
    e.target.reset();
    this.forceUpdate();
}
logOut(e){
    localStorage.removeItem('username')
    window.location.replace('/')
}


  render() {
  let username = localStorage.getItem('username')

  return(
    <div className="login">
       <h1>Edit Account Page</h1>
        <form onSubmit={ (e) => this.handleFormSubmit(e) }>
          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Full Name
            <input
              type="text"
              placeholder="Full Name"
              name="full_name"
              value={this.state.full_name}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Bio
            <input
              type="text"
              placeholder="Bio"
              name="bio"
              value={this.state.bio}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Profile Picture URL
            <input
              type="text"
              placeholder="Profile Pic URL"
              name="profpic_url"
              value={this.state.profpic_url}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/`}/>
          : ''}
          <button onClick = {(e) => this.logOut(e)}> LOG OUT</button>
      </div>

    )
  }
}
