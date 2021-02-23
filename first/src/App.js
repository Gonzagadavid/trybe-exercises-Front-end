import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showProfile: true,
    };
    this.changeProfile = this.changeProfile.bind(this);
  }

  componentDidUpdate() {
    console.log('chuchu');
  }

  changeProfile() {
    const { showProfile } = this.state;
    if (showProfile === true) {
      this.setState({
        showProfile: false,
      });
    } else {
      this.setState({
        showProfile: true,
      });
    }
  }

  render() {
    const { showProfile } = this.state;

    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        { showProfile ? <Profile /> : null }
        <button
          className="btn btn-dark align-self-center"
          type="button"
          onClick={ this.changeProfile }
        >

          Mostrar/ Ocultar Perfil
        </button>
        <Connections />
      </div>
    );
  }
}

export default App;
