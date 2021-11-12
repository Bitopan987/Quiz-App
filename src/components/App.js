import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import '../styles/index.css';

export default class App extends React.Component {
  state = {
    navClosed: false,
  };
  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };
  render() {
    return (
      <div className={`container ${this.state.navClosed && 'nav-closed'}`}>
        <Header changeNavbar={this.changeNavbar} />
        <div className="main">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}
