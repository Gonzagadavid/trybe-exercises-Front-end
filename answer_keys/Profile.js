import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
    };
  }

  async componentDidMount() {
    const myUser = ''; //Preencha myUser com o seu user do GitHub.

    try {
      const url = `https://api.github.com/users/${myUser}`;
      const response = await fetch(url)
      const dataJson = await response.json()
      this.setState({ api: dataJson})
    } catch (error) {
      console.log(error)
    }
  }

  componentWillUnmount() {
    alert('Você ocultou seu perfil');
  }


  render() {
    const loading = <p>Loading...</p>;

    const { api } = this.state;

    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ api.name }</h1>
        <span>{ api.email }</span>
        <img className="myPicture" src={ api.avatar_url } alt="Avatar" />
        <p>{ api.bio }</p>
      </div>
    );

    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { api ? card : loading }
      </div>
    );
  }
}

export default Profile;
