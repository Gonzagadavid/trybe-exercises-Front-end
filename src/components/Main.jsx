import React, { Component } from 'react';
import Button from './Button';
import DogCard from './DogCard';
import DogList from './DogList';
import Input from './Input';

class Main extends Component {
  constructor() {
    super();
    this.fetchImage = this.fetchImage.bind(this);
    this.switchButton = this.switchButton.bind(this);
    this.changeName = this.changeName.bind(this);
    this.saveDog = this.saveDog.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      loading: true, imagePath: '', button: false, oldImage: '', dogName: '',
    };
  }

  componentDidMount() {
    this.fetchImage();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const imageReserve = 'https://images.dog.ceo/breeds/hound-english/n02089973_2133.jpg';
    const { imagePath, oldImage } = nextState;
    const terrier = imagePath.includes('terrier');
    if (terrier) this.setState({ imagePath: oldImage || imageReserve });

    return !terrier;
  }

  saveDog() {
    const { imagePath, dogName } = this.state;
    const dbDogsJson = localStorage.getItem('dogs') || '[]';
    const dbDogs = JSON.parse(dbDogsJson);
    const atualDog = { image: imagePath, nome: dogName };
    dbDogs.push(atualDog);
    localStorage.setItem('dogs', JSON.stringify(dbDogs));
    this.renderItem(atualDog);
    this.setState({ dogName: '' });
  }

  switchButton() {
    const time = 1000;
    setTimeout(() => this.setState({ button: true }), time);
    const { imagePath } = this.state;
    const raca = imagePath
      .replace(/https:\/\/images.dog.ceo\/breeds\/|\/[\w_]+\.jpg/g, '');
    alert(`Raça: ${raca}`);
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

  renderItem(item) {
    this.setState({ dogName: item.nome, imagePath: item.image });
  }

  render() {
    const list = JSON.parse(localStorage.getItem('dogs'));
    const { imagePath, loading, button, dogName } = this.state;
    return (
      <div>
        <h1>Dog Images</h1>
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
        {button && <DogList list={ list } renderItem={ this.renderItem } value="nome" />}
      </div>
    );
  }
}

export default Main;
