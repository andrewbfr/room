import React, { Component } from "react";
import axios from 'axios';
import Footer from '../../components/Footer';

class Login extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        userName: "",
        initials: "",
        validatePassword: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleRegistration = event => {
        event.preventDefault();
        console.log(this.state);
        const apiBaseUrl = "/api/molder";
        let payload={
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "password": this.state.password,
          "userName": this.state.userName,
          "initials": this.state.newPass

          };
          if(payload.userName === payload.password){
            alert(`Username and Password must not match`);
            console.log(`user name and password must not match`);
            this.setState({
              newNom: "",
              newPass: ""
            });
        //   }else{
        //       //here
        //     axios.get(apiBaseUrl, payload.userName)
        //       .then(function(response){
        //         console.log(response);
        //         console.log(response.status);
        //         if(!response.data === true && typeof response.data === "object"){
        //           console.log(`username ${payload.userName} taken`);
        //           alert(`username ${payload.userName} taken`); 
                } else {
                  axios.post(apiBaseUrl, payload)
                    .then(function (response) {
                      console.log(response);
                      console.log(response.status);
                      if(response.status === 200){
                      console.log("Login successful");
                      window.location.replace("/Articles");
                      }
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                  }
             // });
          //}
  
      }

    render() {
        return (
            <div>
                Your username will allow you to login, your initials will be automatically generated to match you up with the skis you build!
                <form>
                   {/* first name */}
                    <input type = "text" value = {this.state.firstName} onChange = {this.handleInputChange} 
                    name = "firstName" placeholder = "First Name">
                    </input>

                   {/* last name */}

                    <input type = "text" value = {this.state.lastName} onChange = {this.handleInputChange} 
                    name = "lastName" placeholder = "Last Name">
                    </input>

                    {/* user name */}

                    <input type = "text" value = {this.state.userName} onChange = {this.handleInputChange} 
                    name = "userName" placeholder = "User Name">
                    </input>

                   {/* password */}

                    <input type = "text" value = {this.state.password} onChange = {this.handleInputChange} name = "password" placeholder = "Password">
                    </input>

                   {/* validate password */}

                    <input type = "text" value = {this.state.validatePassword} onChange = {this.handleInputChange} name = "validatePassword" placeholder = "Re-type your Password" >
                    </input>
                </form>

                <button type="button" onClick={this.handleRegistration}>submit</button>

                <Footer />
                
            </div>
        );
    }
}

export default Login;