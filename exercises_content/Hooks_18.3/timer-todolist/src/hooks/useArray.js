import { useState } from 'react';

const useArray = (INITIAL_STATE = []) => {
  const [list, setList] = useState(INITIAL_STATE);
  
  const addList = (item) => setList([...list, item])

  const removeItem = (index) => setList(list.filter((_, indice) => indice !== index))

  return [list, addList, removeItem]
}

export default useArray;
