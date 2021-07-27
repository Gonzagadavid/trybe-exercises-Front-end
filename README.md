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
npm install
npm start
```

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
