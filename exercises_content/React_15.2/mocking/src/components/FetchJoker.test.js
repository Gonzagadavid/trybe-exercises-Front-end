// // FetchJoker.test.js
// import React from 'react';
// import { render } from '@testing-library/react'
// import FetchJoker from './FetchJoker';

// afterEach(() => jest.clearAllMocks());
// it('fetch joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, "fetch")
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });
//   const { findByText } = render(<FetchJoker />);
//   await findByText('Whiteboards ... are remarkable.');
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith(
//     'https://icanhazdadjoke.com/',
//     {"headers": {"Accept": "application/json"}}
//   );
// });

import React from 'react';
import { render } from '@testing-library/react'
import FetchJoker from './FetchJoker';

afterEach(() => jest.clearAllMocks());
it('should fetch users', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(()=>
  Promise.resolve({
    json: ()=> Promise.resolve(joke)
  }));

  const { findByText } = render(<FetchJoker />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
});