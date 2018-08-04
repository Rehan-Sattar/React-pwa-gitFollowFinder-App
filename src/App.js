import React, { Component } from 'react';
import {connect} from "react-redux";
import logo from './logo.svg';
import { bindActionCreators } from "redux";
import Actions from "./store/actions";
import {downloadAllFollowers} from "./store/index";
import ListMaker from "./components/ListMaker";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      developerName: '',
      error : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit(event) {
    event.preventDefault();
    this.props.findFollowers(this.state);
    this.setState({
        developerName: '',
    });
  };

  render() {
    return (
      <div className="App">
          <h1>Enter Name: </h1>
          <form onSubmit={this.handleSubmit}>
            <input required type="text" value={this.state.developerName} onChange={ (e) => this.setState({developerName : e.target.value}) }  />
            <button type="submit">Search</button>
          </form>
          <ListMaker />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
        findFollowers: (state) => downloadAllFollowers(state)
      },
      dispatch
    );
}
export default connect(null, mapDispatchToProps)(App);
