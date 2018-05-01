import React, { Component } from "react";

class Login extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        validatePassword: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                Your username will allow you to login, your initials will be automatically generated to match you up with the skis you build!
                <form>
                   {/* first name */}
                    <input type = "text" value = {this.state.firstName} onChange = {this.handleInputChange} 
                    name = "firstName"placeholder = "First Name">
                    </input>

                   {/* last name */}

                    <input type = "text" value = {this.state.lastName} onChange = {this.handleInputChange} 
                    name = "lastName"placeholder = "Last Name">
                    </input>

                    {/* user name */}
                    
                    <input type = "text" value = {this.state.userName} onChange = {this.handleInputChange} 
                    name = "userName"placeholder = "User Name">
                    </input>

                   {/* password */}

                    <input type = "text" value = {this.state.password} onChange = {this.handleInputChange} name = "password"placeholder = "Password">
                    </input>

                   {/* validate password */}

                    <input type = "text" value = {this.state.validatePassword} onChange = {this.handleInputChange} name = "validatePassword" placeholder = "Re-type your Password" >
                    </input>
                </form>
                
            </div>
        );
    }
}

export default Login;