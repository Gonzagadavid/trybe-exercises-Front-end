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

  /* é invocado imediatamente após alguma atualização ocorrer.
  Este método não é chamado pelo initial render
  componentDidUpdate() não será invocado se shouldComponentUpdate() retornar false. */
  componentDidUpdate(_prevProps, prevState) {
    const { list } = this.state;
    console.log('Deus é mais');
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
      <div className="git d-flex flex-column align-items-center">
        <h5>Quantidade de contatos:</h5>
        <span>{ counter }</span>
        <div>
          <form className="input-group">
            <input className="form-control" type="text" onChange={ this.handleChange } />
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
              <h4>{ person.name }</h4>
              <img src={ person.avatar_url } alt="Avatar" width="50%" />
              <p>{ person.bio }</p>
              <button
                className="btn btn-outline-dark w-25 align-self-center"
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
