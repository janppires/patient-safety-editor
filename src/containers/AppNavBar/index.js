import React from 'react';
import AppNavBarComponent from '../../components/AppNavBar';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (<AppNavBarComponent isOpen={this.state.isOpen} toggle={this.toggle}/>);
  }
}