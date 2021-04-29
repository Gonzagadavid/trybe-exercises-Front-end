import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  /* 1 Vamos entender como a estrutura do Provider ficará.
    No início temos dois estados. O primeiro receberá separadamente os dados de "comida", "bebida" e "sobremesa" em um array,
    e o segundo controlará os dados informados no seu componente Header. Se o updateCart for false, o
    Header terá um botão com o texto 'Ver opções', do contrário o texto será 'Ver sacola'. Para controlar a lógica desse
    estado, precisaremos da função showCart(). O objetivo único dessa função é trocar o texto do botão de acordo com os cliques
    realizados pelo usuário.

    Vamos compreender agora a lógica de manipulação do primeiro estado, onde você poderá praticar manipulação
    complexa de estados utilizando Context API.
  */

  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  /* 8 - Você precisa remover um item da lista, o que você faria? Você já possui o array com os dados
  que serão atualizados no seu estado, o índice do elemento e a chave que você precisa acessar dentro do objeto.
  Como você faria essa atualização? Você pode utilizar o método filter ou o método splice por exemplo. */

  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    orderState.splice(indexPresentInList, 1);
    setOrderList({ ...orderList,
      [itemType]: orderState });
  };

  /*
  9 - Se você precisa fazer apenas o update do item na lista, temos uma complexidade mais desafiadora.
  Aqui você pode utilizar o splice com o terceiro parâmetro, indicando o novo valor do item naquele índice, e então
  realizar novamente a atualização do estado com o spread de todo o objeto orderList, a chave e o valor a serem
  alterados.
  */

  const updateValueItemInList = (orderState, indexPresentInList, newItem) => {
    orderState.splice(indexPresentInList, 1, newItem);
    setOrderList({ ...orderList, [newItem.itemType]: orderState });
  };

  /*
  7 - Nessa função manageItemsInList há duas missões. A primeira missão é verificar se deve remover o item
  da lista caso o usuário mude a quantidade dele para 0, e chamar a função responsável por essa atualização.
  A segunda missão é chamar a chamar a função que atualiza a quantidade do item, caso  o valor dessa
  quantidade seja diferente de 0.
  Informações passadas para as funções:
    - orderState: que contém os valores da chave que deve ser atualizada;
    - indexPresentInList: O índice do item no array;
    - newItem: O objeto a ser atualizado ou a chave do objeto a ser atualizado, caso acessado o itemType.
  */

  const manageItemsInList = (newItem) => {
    const noQuantity = 0;
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === noQuantity) {
      return removeItemFromList(orderState, indexPresentInList, newItem.itemType);
    }
    updateValueItemInList(orderState, indexPresentInList, newItem);
  };

  /* 6 Chegamos aqui, vamos adicionar um novo item na lista?
  Nossa função recebe o objeto que criamos e atualiza o nosso estado. Lembre-se:
  Precisamos atualizar a chave correspondente do nosso estado, e para isso podemos utilizar o itemType do nosso
  objeto para fazer isso dinamicamente.
  Como faríamos isso? Vamos começar a brincar com o spread.
  Podemos utilizar a função setOrderList({...orderlist, [newItem.itemType]: "aqui entra a lógica necessária para atualizar
  a lista específica" }).
  Primeiro nós retornamos todo o objeto orderList, e depois passamos a chave que queremos atualizar, essa chave é o
  newItem.itemType que passamos para essa função.
  E qual o valor que demos passar para essa chave? Ela é uma chave que já possui diversos valores, então devemos
  fazer o spread para recuperar seu conteúdo e então adicionar o novo item.
  */

  const addItemToList = (newItem) => {
    setOrderList({ ...orderList,
      [newItem.itemType]: [...orderList[newItem.itemType], newItem] });
  };

  /* 2 O primeiro passo que devemos pensar é a função que gerenciará as mudanças de estado através das
  interações no componente filho "Options.js" para que o componente filho "Cart.js" sempre atualize o
  pedido do cliente.
  Options.js recebe o contexto da função handleChange, toda vez que um usuário
  modificar a quantidade de um produto, "Options.js" retornará as informações
  "event, name, price, e mealType", que serão necessárias para nossa função */

  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    /* 3 O segundo passo consiste em extrair o valor passado no input, através do event que foi retornado
    e definir um novo objeto com as informações arualizadas do produto */

    const { value } = target;

    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    /* 4 No que devemos pensar agora? Elementar jovem padawan, precisamos verificar se o item que criamos
    está presente em um das 3 listas que nós criamos. Você consegue pensar em uma maneira de fazer essa verificação
    em apenas uma linha? */
    /* Vamos lembrar de um conceito aprendido lá em fundamentos do desenvolvimento web. Você
    lembra que para acessar uma chave dinâmica de um objeto, podemos passar essa chave através de [] (colchetes)?
    Nós recebemos nessa função o mealType (ou ItemType), e podemos realizar essa verificação
    dinamicamente se passarmos essa informação para o "orderList", que é o nosso objeto que
    contém as chaves (itemType) e suas respectivas listas como valores.
    Então se queremos descobrir se há algum objeto nas listas igual ao nosso newItem, podemos
    utilizar a função some, e comparar se o item.id equivale ao nome do item retornado */

    const isPresentInList = orderList[itemType].some((item) => item.id === itemName);

    /* 5 Vamos criar uma condição para verificar se devemos adicionar um item na lista ou alterar
    um item já existente?
    No passo anterior nós verificamos se existe o item na lista, então agora podemos utilizar o
    retorno dessa função para decidir qual a próxima função que será chamada
    Se não houver o item na lista, então devemos adicionar um item na lista com a função
    addItemToList passando newItem como parâmetro. Se já houver o item na lista, devemos
    atualizá-lo com a função manageItemsInList passando newItem como parâmetro */
    if (!isPresentInList) {
      return addItemToList(newItem);
    }
    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
