import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import UserListView from './UserList/components/UserListView';
import UserDetailView from './UserDetails/components/UserDetailView';
import introductionView from './introduction/components/introductionView';

class RouterList extends Component {

  render(){
    return (
      <div>
        <Route exact path="/" component={introductionView}/>
        <Route path="/list" component={UserListView}/>
        <Route path="/detail" component={UserDetailView}/>
      </div>
    )
  }
}

export default RouterList;
