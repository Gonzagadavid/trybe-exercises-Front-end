import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      api: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const isFetching = <p>Loading...</p>;
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
        { api ? card : isFetching }
      </div>
    );
  }
}

export default Profile;
