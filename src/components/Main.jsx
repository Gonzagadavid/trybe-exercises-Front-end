import React, { Component } from 'react';
import Button from './Button';
import DogCard from './DogCard';

class Main extends Component {
  constructor() {
    super();
    this.fetchImage = this.fetchImage.bind(this);
    this.switchButton = this.switchButton.bind(this);
    this.state = {
      loading: true,
      imagePath: '',
      button: false,
    };
  }

  componentDidMount() {
    this.fetchImage();
  }

  switchButton() {
    const time = 1000;
    setTimeout(() => this.setState({ button: true }), time);
  }

  fetchImage() {
    this.setState(this.setState({ loading: true, button: false }), async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const objResp = await response.json();
      this.setState({ imagePath: objResp.message, loading: false });
    });
  }

  render() {
    const { imagePath, loading, button } = this.state;
    return (
      <div>
        {
          loading ? <span>Loading...</span>
            : <DogCard imagePath={ imagePath } button={ this.switchButton } />
        }
        {button && <Button callback={ this.fetchImage } text="Next" />}
      </div>
    );
  }
}

export default Main;
