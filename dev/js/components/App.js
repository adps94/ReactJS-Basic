
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import RouterList from '../containers/index';

require('../../scss/style.scss');


class BasicExample extends Component {

  componentWillMount(){
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  render(){
    return(
      <Router>
        <RouterList/>
      </Router>
    )
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(BasicExample);
