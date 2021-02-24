import React from 'react';

class Connections extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      list: [],
      counter: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const maxContactsNumber = 3;
    if (nextState.list.length <= maxContactsNumber) {
      return true;
    }
    return false;
  }

  componentDidUpdate(_prevProps, prevState) {
    const { list } = this.state;
    if (prevState.list.length < list.length) {
      document.querySelector('.gitNetwork')
        .style.backgroundColor = 'lightblue';
    } else if (prevState.list.length > list.length) {
      document.querySelector('.gitNetwork')
        .style.backgroundColor = 'lightcoral';
    }
  }

  handleChange({ target }) {
    this.setState({
      user: target.value,
    });
  }

  handleClick() {
    const { user, list, counter } = this.state;
    const url = `https://api.github.com/users/${user}`;
    const findUser = list.some((contact) => contact.login === user);
    if (!findUser) {
      fetch(url)
        .then((res) => res.json())
        .then((profile) => this.setState({
          list: [...list, profile],
          counter: counter + 1,
        }))
        .catch((error) => console.log(error));
    }
  }

  removeContact({ target }) {
    const { list, counter } = this.state;
    const login = target.getAttribute('data-login');
    const newList = list.filter((contact) => contact.login !== login);
    this.setState({
      list: newList,
      counter: counter - 1,
    });
  }

  render() {
    const { list, counter } = this.state;

    return (
      <div className="git-connections">
        <div className="counter">
          <h5>Quantidade de contatos:</h5>
          <span>{ counter }</span>
        </div>
        <div className="form">
          <form className="input-group justify-content-center">
            <input
              className="form-control"
              type="text"
              onChange={ this.handleChange }
              placeholder="Adicione seu contato famoso"
            />
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar
            </button>
          </form>
        </div>

        <div className="card-list d-flex flex-row justify-content-around">
          { list.map((person) => (
            <div className="card d-flex align-items-center" key={ person.name }>
              <h5>{ person.name }</h5>
              <img className="c-img" src={ person.avatar_url } alt="Avatar" width="50%" />
              <button
                className="c-button btn btn-danger w-25 align-self-center"
                data-login={ person.login }
                type="button"
                onClick={ this.removeContact }
              >
                X
              </button>
            </div>))}
        </div>
      </div>
    );
  }
}

export default Connections;
