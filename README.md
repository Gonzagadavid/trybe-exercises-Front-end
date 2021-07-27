<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
# Vamos começar com tudo os exercícios desse repositório de React-Redux.

**Após forkar e clonar o repositório, é necessário trocar para a branch do exercício e entrar no diretório da aplicação para então executar o comando *npm install* e instalar as dependências necessárias (verifique a existência do arquivo package.json no diretório para ter certeza que está no local correto)**

## ⚠️ ATENÇÃO! Não clone o repositório sem realizar seu fork! ⚠️

- Para acessar o exercício sobre **store**:
```javascript
git checkout exercise-1
```

- Para acessar o exercício sobre **reducers**:
```javascript
git checkout exercise-2
```

- Para acessar o exercício sobre **actions**:
```javascript
git checkout exercise-3
```

- Para acessar o exercício sobre **Provider**:
```javascript
git checkout exercise-4
```
- Para acessar o exercício sobre **mapStateToProps**:
```javascript
git checkout exercise-5
```

- Para acessar o exercício sobre **connect**:
```javascript
git checkout exercise-6
```

- Para acessar o exercício sobre **mapDispatchToProps e dispatch**:
```javascript
git checkout exercise-7
```

Para melhor organização, **commite** as alterações que fizer nas branchs de cada exercícios antes de ir para a próxima!

##### Há um arquivo com gabarito aqui na branch principal, mas realizar todos os exercícios é muito importante para o domínio do React-Redux.
=======
## Entendendo o infograma de uma store

![react-redux](images/store-info.png)

### Análise do passo a passo
![store](images/store.png)

```javascript
cd missing_store
=======
## Entendendo o infograma do reducer e rootReducer

![react-redux](images/reducer-info.png)

### Análise do passo a passo
![reducer](images/reducer.png)

```javascript
cd missing_reducers
>>>>>>> exercise-2
=======
## Entendendo o infograma de uma action

![react-redux](images/actions-info.png)

### Análise do passo a passo
![actions](images/actions.png)

```javascript
cd missing_actions
>>>>>>> exercise-3
=======
## Entendendo o infograma de um Provider

![react-redux](images/provider-info.png)

### Análise do passo a passo
![provider](images/provider.png)

```javascript
cd missing_provider
>>>>>>> exercise-4
=======
## Entendendo o infograma do mapStateToProps

![react-redux](images/map-State-To-Props-info.png)

### Análise do passo a passo
![mapStateToProps](images/map-State-To-Props.png)

![mapStateToProps](images/map-State-To-Props-exp.png)

```javascript
cd missing_mapstatetoprops
>>>>>>> exercise-5
=======
## Entendendo o infograma do connect

![react-redux](images/connect-info.png)

### Análise do passo a passo
![connect](images/connect.png)

```javascript
cd missing_connect
>>>>>>> exercise-6
npm install
npm start
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Abra a aplicação no browser para ver como ela está! Em src/store foi retirado o conteúdo no arquivo index.js.
Seu objetivo é criar o código da store para fazer a aplicação rodar corretamente com React-Redux.

Para facilitar a visualização dos estados, você pode acrescentar como segundo parâmetro do createStore a extensão Redux Devtools:

```javascript
const extension = window.devToolsExtension() || ((f) => f);
```

**Referências:**
- Imagem garfieldLasagna: https://pixy.org/src/124/1246733.jpg.
>>>>>>> exercise-1
=======
Em src/reducers:
- Foi retirada a função rootReducer do arquivo index.js;
- Foi retirada a função africaContinent do reducer Africa.js;
- Foi retirada a função americaContinent do reducer America.js;
- Foi retirada a função antarcticaContinent do reducer Antarctica.js;
- Foi retirada a função asiaContinent do reducer Asia.js;
- Foi retirada a função europeContinent do reducer Europe.js;
- Foi retirada a função oceaniaContinent do reducer Oceania.js;

**Seu objetivo é criar o código com o combineReducers no arquivo index.js, e criar as funções dos reducers que são responsáveis por receberem as actions que modificam os estados da aplicação.**

*Observação: Atenção aos estados iniciais dos reducers.*

**Referências:**

- Imagem wallpaper: https://snappygoat.com/o/ee85e2c2e41b4c3da574712e37920b745a7cd5dd/Dragon_Ball_Z_Analise_Imagem_Saga_Freeza.jpg;
- Gif genkidama: http://worldotaku.weebly.com/uploads/1/0/9/5/109555207/zhfbscufgp721_orig.gif;
- Imagem gokuxfreeza: http://www.comboinfinito.com.br/principal/wp-content/uploads/2017/12/Dragon-Ball-Super-Goku-vs-Freeza.jpg.
>>>>>>> exercise-2
=======
Em src/actions foi retirada a action understandMatrix do arquivo index.js, que deverá receber um type 'PILL_TAKEN' e um 'id' como parâmetro.

**Seu objetivo é criar a action que retornará o objeto com o type e id que serão passados para o reducer.**

**Referências:**

- Imagem wallpaper: https://cdn.pixabay.com/photo/2020/07/02/04/31/matrix-5361690_1280.png;
- Gif neo: https://i2.wp.com/emceenetwork.com/wp-content/uploads/2018/05/Matrix-gif.gif?fit=500%2C208&ssl=1&w=640;
- Gif john-wick: https://data.whicdn.com/images/325144945/original.gif;
- Imagem blue-pill: https://projectinsides.com/wp-content/uploads/2017/08/Blue-pill.png;
- Imagem red-pill: https://projectinsides.com/wp-content/uploads/2017/08/Red-pill.png.
>>>>>>> exercise-3
=======
Em src/index.js foram retiradas todas as configurações de um Provider. Primeiramente é preciso importá-lo do 'react-redux' e então utilizá-lo para encapsular o App. Não se esqueça de passar a store como props para todos os componentes filhos do Provider.

**Seu objetivo é configurar o Provider corretamente para que todos os componentes da aplicação recebam os estados contidos na store.**

**Referências:**

- Imagem wallpaper: https://upload.wikimedia.org/wikipedia/commons/9/92/M45_The_Pleiades_Seven_Sisters.jpg;
- Imagem geminisaga: https://upload.wikimedia.org/wikipedia/it/b/b5/GeminiSaga.png;
- Imagem seiyafivesenses: https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwHoTb4e0Tq3stF8c5dMOzSA.
>>>>>>> exercise-4
=======
Em src/App.js:
- Foi retirado o mapStateToProps que recebe um objeto com as chaves receiveIngredients e receiveOrder;
- Cada chave é uma props dentro de App.js e representam um estado da aplicação.

Em src/components/PrepareBurger.js:
- Foi retirado o mapStateToProps que recebe um objeto com a chave receiveRecipe;
- A chave é uma props dentro de PrepareBurger.js e representa um estado da aplicação.

*Dica receiveIngredients: o nome do reducer é 'spiedIngredients' e a chave atualizada da action é 'ingredients'.*

*Dica receiveOrder: o nome do reducer é 'spiedOrder' e a chave atualizada da action é 'order'.*

*Dica receiveRecipe: o nome do reducer é 'spiedRecipe' e a chave atualizada da action é 'recipe'.*

**Seu objetivo é configurar o mapStateToProps dos componentes App.js e PrepareBurger.js para que eles recebam o estado atualizado da aplicação.**

**Referências:**

- Imagem bobEsponja: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e2f0bab-4518-4c60-a8d6-444eeef68485/dd56cw0-4ba5ce04-63ba-4369-8c8e-13bc3b3538fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGUyZjBiYWItNDUxOC00YzYwLWE4ZDYtNDQ0ZWVlZjY4NDg1XC9kZDU2Y3cwLTRiYTVjZTA0LTYzYmEtNDM2OS04YzhlLTEzYmMzYjM1MzhmYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.P37ofPgA8KVdnrbgO761nelbriOZMk2coJiYPW6tA6I;
- Imagem bobEsponjaTela: https://i.pinimg.com/originals/2c/dc/15/2cdc15e420a51342f59cd645f4b17b36.jpg;
- Imagem gary: https://static.wikia.nocookie.net/bubblestand/images/b/b2/GarytheSnail.png/revision/latest?cb=20200731043920;
- Imagem hamburguer: https://upload.wikimedia.org/wikipedia/en/4/4c/Krabby_Patty.png;
- Imagem patrick: https://static.wikia.nocookie.net/wikiesponja/images/d/d8/;Patrick_Estrela_de_Bob_Esponja.png/revision/latest?cb=20170325005037&path-prefix=pt-br
- Gif plankton: https://images6.fanpop.com/image/photos/39700000/-plankton-sticker-spongebob-squarepants-39750396-500-500.gif;
- Imagem siriCascudoUniforme: https://static.wikia.nocookie.net/spongebob/images/5/54/Krusty_Krab_hat_upright_stock_art.png/revision/latest?cb=20181228020634;
- Imagem siriguejo: https://static.wikia.nocookie.net/wikiesponja/images/2/2d/Sr_Sirigueijo_de_Bob_Esponja.png/revision/latest/scale-to-width-down/340?cb=20170325000158&path-prefix=pt-br.
>>>>>>> exercise-5
=======
Em src/App.js e src/components/RescuePeach.js foram retirados o export defaut connect()(), portanto, os componentes não são localizados e não recebem nenhum dado do Redux. 

**Seu objetivo é configurar o connect de acordo com a necessidade de cada componente, fazendo a aplicação funcionar com React-Redux.**

**Referências:**

- Imagem mario: https://pixy.org/src/149/1494229.png;
- Imagem marioepeach: https://upload.wikimedia.org/wikipedia/it/1/12/Peach_Toadstool.png; https://pixy.org/download/1270955/;
- Imagem peach: https://upload.wikimedia.org/wikipedia/sco/d/d5/Peach_%28Super_Mario_3D_World%29.png;
- Imagem map: https://i.pinimg.com/originals/ee/64/0c/ee640c8170c171bd1c38ae1fc8f24736.png;
- Imagem supermarioworld: https://static.wikia.nocookie.net/pai_troll/images/1/14/Super_Mario_World.png/revision/latest?cb=20200608204935&path-prefix=pt-br;
- Gif thankyou: https://i.pinimg.com/originals/e2/dd/c8/e2ddc86e61bf14f62043f4509a25d19b.gif.
>>>>>>> exercise-6
