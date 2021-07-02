import React, { Component } from 'react';
import Button from './Button';
import DogCard from './DogCard';
import Input from './Input';

class Main extends Component {
  constructor() {
    super();
    this.fetchImage = this.fetchImage.bind(this);
    this.switchButton = this.switchButton.bind(this);
    this.changeName = this.changeName.bind(this);
    this.saveDog = this.saveDog.bind(this);
    this.state = {
      loading: true, imagePath: '', button: false, oldImage: '', dogName: '',
    };
  }

  componentDidMount() {
    this.fetchImage();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { imagePath, oldImage } = nextState;
    const terrier = imagePath.includes('terrier');
    if (terrier) this.setState({ imagePath: oldImage });
    return !terrier;
  }

  saveDog() {
    const { imagePath, dogName } = this.state;
    const dbDogsJson = localStorage.getItem('dogs') || '[]';
    const dbDogs = JSON.parse(dbDogsJson);
    const atualDog = { image: imagePath, nome: dogName };
    dbDogs.push(atualDog);
    localStorage.setItem('dogs', JSON.stringify(dbDogs));
  }

  switchButton() {
    const time = 1000;
    setTimeout(() => this.setState({ button: true }), time);
  }

  changeName({ target }) {
    const { value } = target;
    this.setState({ dogName: value });
  }

  fetchImage() {
    this.setState(this.setState({ loading: true, button: false }), async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const objResp = await response.json();
      const { imagePath } = this.state;
      this.setState({ oldImage: imagePath, imagePath: objResp.message, loading: false });
    });
  }

  render() {
    const { imagePath, loading, button, dogName } = this.state;
    return (
      <div>
        {
          loading ? <span>Loading...</span>
            : <DogCard imagePath={ imagePath } button={ this.switchButton } />
        }
        {
          button
            && <Input inputValue={ dogName } inputChange={ this.changeName } />
        }
        {button && <Button callback={ this.fetchImage } text="New Dog" />}
        {button && <Button callback={ this.saveDog } text="Salvar" />}
      </div>
    );
  }
}

export default Main;
