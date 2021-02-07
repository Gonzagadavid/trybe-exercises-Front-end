## Entendendo o infograma do reducer e rootReducer

![react-redux](https://i.postimg.cc/zXyFjZwS/reducer-info.png)

### Análise do passo a passo
![store](https://i.postimg.cc/T1wqFBzx/reducer.png)

Em src/reducers:
- Foi retirada a função rootReducer do arquivo index.js;
- Foi retirada a função africaContinent do reducer Africa.js;
- Foi retirada a função americaContinent do reducer America.js;
- Foi retirada a função antarcticaContinent do reducer Antarctica.js;
- Foi retirada a função asiaContinent do reducer Asia.js;
- Foi retirada a função europeContinent do reducer Europe.js;
- Foi retirada a função oceaniaContinent do reducer Oceania.js;

Seu objetivo é criar o código com o combineReducers no arquivo index.js, e criar as funções dos reducers que são responsáveis por receberem as actions que modificam os estados da aplicação.

*Observação: Atenção aos estados iniciais do reducer.*
