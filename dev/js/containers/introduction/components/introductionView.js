import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import localForage from 'localforage';
import { bindActionCreators } from 'redux';
import { doLogin } from '../../../actions/login';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class introductionView extends Component {

    constructor(props){
      super(props),
      this.state = {
        login : true,
      }
    }

    componentWillMount(){
      localForage.getItem('reduxPersist:login').then((response) => {
        // sconsole.log(response);
        if(response !== null){
          const userLogin = JSON.parse(response);
          if(userLogin.user !== null){
            this.setState({
              login: true,
            });
            this.props.history.push('/list');
          } else {
            this.setState({
              login: false,
            });
          }
        } else {
          this.setState({
            login: false,
          });
        }

      })
    }


    componentWillReceiveProps(nextProps){
      if(nextProps.login.user !== null){
        this.props.history.push('/list');
      }
    }

    getStarted(){
      const userObj = {
        mobilenumber:919886458068,
        password:'eurokids123'
      }
      this.props.doLogin(userObj);
    }

    checkLoginStatus(){
      this.props.history.push('/');
    }

    render() {
      console.log(this.state.login);
      if(!this.state.login){
        return(
            <div className="outer">
              <div className="middle">
                <div className="inner">

                  {/* <img className="main-logo" src={"https://facebook.github.io/react/img/logo.svg"}/>
                  <h1>Welcome to ReactJS</h1>
                  <Button
                    bsStyle="primary"
                    onClick={() => { this.getStarted() }}
                  >
                    Login
                  </Button> */}
                  <form>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input id="email" type="text" className="form-control" name="email" placeholder="Email"/>
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                      <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                    </div>
                    <Button
                      bsStyle="primary"
                      block={true}
                      onClick={() => { this.getStarted() }}
                    >
                      Login
                    </Button>
                  </form>
                </div>
              </div>
            </div>

        )
      } else {
        return null;
      }

    }
}

function mapStateToProps(state) {
    return state;
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({doLogin: doLogin}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(introductionView);
