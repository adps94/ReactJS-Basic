import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import localForage from 'localforage';
import Link from 'react-router-dom';
import { selectUser } from '../../../actions/index';
import { Button, Panel } from 'react-bootstrap';
import { doLogout } from '../../../actions/login';

class UserListView extends Component {

    selectUserfromList(user){
      this.props.selectUser(user);
      this.props.history.push('/detail');
    }

    logout() {
      console.log(this.props.history);
      localForage.removeItem('reduxPersist:login').then(function() {
        console.log('Key is cleared!');
      }).catch(function(err) {
        console.log(err);
      });
      this.props.history.replace('/');
      this.props.doLogout();
    }

    componentWillReceiveProps(nextProps){
      console.log(nextProps);
      if(nextProps.login.user === null){
        this.props.history.replace('/');
      }
    }

    renderList() {
        return this.props.users.map((user) => {
            return (

                <Panel
                  key={user.id}
                  onClick={() => this.selectUserfromList(user)}
                >
                  {user.first} {user.last}
                </Panel>
            );
        });
    }

    render() {
        return (
            <div className="wrapper">
                {this.renderList()}
                <Button
                  bsStyle="primary"
                  onClick={() => { this.logout() }}
                >
                  Logout
                </Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      selectUser: selectUser,
      doLogout: doLogout
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserListView);
