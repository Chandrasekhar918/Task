import React,{Component } from "react";

import Form from "react-validation/build/form";

import Input from "react-validation/build/input";

import CheckButton from "react-validation/build/button";

import { Link, Navigate, useNavigate } from "react-router-dom";

import UserAuthService from "./UserAuth-service";

import "./style.css";


const vusername = value => {
  


  

    if (value.length < 3 || value.length > 20) {
  
      return (
  
        <div className="alert alert-danger" role="alert">
  
          Username must be between 3 and 20 characters.
  
        </div>
  
      );

    }

    

    

   

    
  
  };



const vpassword = value => {

  if (value.length < 6 || value.length > 40) {

    return (

      <div className="text-danger" role="alert">

        Password  invalid !

      </div>

    );

  }

  else if(value.length===0){

    return(

      <div className="text-danger" role="alert">

        password requird

      </div>



    )



  }

 

};
let email="admin@gmail.com";
let password="admin123";
if(vusername.value===email && vpassword.value===password){
  useNavigate("/findall");
}
  




export default class Userlogin extends Component {

 

  constructor(props) {

    super(props);

    this.handleLogin = this.handleLogin.bind(this);

    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.onChangePassword = this.onChangePassword.bind(this);



    this.state = {

      username: "",

      password: "",

      loading: false,

      message: ""

    };

  }



  onChangeUsername(e) {

    this.setState({

      username: e.target.value

    });

  }



  onChangePassword(e) {

    this.setState({

      password: e.target.value

    });

  }



  handleLogin(e) {

    e.preventDefault();



    this.setState({

      message: "",

      loading: true

    });



    this.form.validateAll();



    if (this.checkBtn.context._errors.length === 0) {

      UserAuthService.login(this.state.username, this.state.password).then(

        () => {

          this.props.history.push("/");
         

          window.location.reload();

        },

        error => {

          const resMessage =

            (error.response &&

              error.response.data &&

              error.response.data.message) ||

            error.message ||

            error.toString();



          this.setState({

            loading: false,

            message: resMessage

          });

        }

      );

    } else {

      this.setState({

        loading: false

      });

    }

  }



  render() {

    return (

      <div>

      

        <div className="loginbackground">

        <div className="main">

     <div className="sub-main">

       

       <div>

         <div className="imgs">

         

          



         </div>

         

      <div className="col-md-12">

          <Form

            onSubmit={this.handleLogin}

            ref={c => {

              this.form = c;

            }}

          >

            <div className="form-group">
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
              <label className="labelname">User Name</label>

              <Input

                type="text"

                className="form-control"

                name="username"

                placeholder="Username"

                value={this.state.username}

                onChange={this.onChangeUsername}

                validations={[vusername]}

              />

            </div>



            <div className="form-group">

              <label className="labelname">Password</label>

              <Input

                type="password"

                className="form-control"

                name="password"

               placeholder="Password"

                value={this.state.password}

                onChange={this.onChangePassword}

                validations={[vpassword]}

              />

            </div><br/>



            <div className="form-group">

              {/* <button

               

                disabled={this.state.loading}

              >

                {this.state.loading && (

                  <span className="spinner-border spinner-border-sm"></span>

                )}

                <span className="login-button" href="/aboutus"> Login</span> 
               

              </button> */}

              <button >
                <Link to="/aboutus" className="a2">Login</Link>
              </button>
              
              

             

              <div className="link">

             <div>Not a member ? <a href="/signup"> SignUp</a></div><br/>

            </div>

           

            </div>



            {this.state.message && (

              <div className="form-group">

                <div className="alert alert-danger" role="alert">

                  {this.state.message}

                </div>

              </div>

            )}

            <CheckButton

              style={{ display: "none" }}

              ref={c => {

                this.checkBtn = c;

              }}

            />

          </Form>

        </div>

      </div>

      </div>

     </div>

     </div>

     </div>

    );

  }

}

