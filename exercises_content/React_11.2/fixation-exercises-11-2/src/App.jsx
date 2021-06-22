import React from 'react';
import Image from './Image';
import {
  album01, album02, headphone, energyDrink,
} from './date';
import Albuns from './Albuns';
import Order from './Order';

const App = () => (
  <div>
    <Order order={energyDrink} />
    <Order order={headphone} />
    <Albuns album={album01} />
    <Albuns album={album02} />
    <Image
      path="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
      description="Cute cat staring"
    />
  </div>
);
export default App;
