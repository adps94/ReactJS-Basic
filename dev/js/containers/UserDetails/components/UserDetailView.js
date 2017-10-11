import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Jumbotron } from 'react-bootstrap';
import localForage from 'localforage';
import { getContact } from '../../../actions/contact';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetailView extends Component {

    componentDidMount(){
      // localForage.getItem('aswin',function(err,value){
      //   console.log(err,value);
      // });
      this.props.getContact();
    }

    render() {
        if (!this.props.user) {
            return (
              <div className="wrapper">
                Go back and Select a user...
              </div>
            );
        }
        return (
            <div className="wrapper">
              <Jumbotron className="profile">
                <img className="profile-img" src={this.props.user.thumbnail} />
                <h1>Hello, {this.props.user.first} {this.props.user.last}</h1>
                <h3>Age : {this.props.user.age}</h3>
                <p>{this.props.user.description}</p>
              </Jumbotron>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getContact: getContact}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetailView);
