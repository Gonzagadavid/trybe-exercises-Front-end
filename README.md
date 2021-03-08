## Gerenciamente de estados complexos com Context API e React Hooks


### Para fazer um fork

**1 - Clique no botão "Fork" do repositório.**

![passo2](images/fork-step-1.png)

**2 - Selecione seu usuário do GitHub.**

![passo3](images/fork-step-2.png)

**3 - Escolha a URL remota (SSH, HTTPS) para fazer o clone do repositório.**

![passo4](images/fork-step-3.png)


### Instruções (Idênticas às do course)

Você receberá um código que simula um aplicativo e precisará completar esse código para ver o aplicativo em funcionamento. A parte mais importante é treinar manipulação de estados dentro do arquivo **src/context/MyProvider.js**, onde a função **handleChange** está vazia. Analise o código da aplicação e pense como atualizar individualmente a lista de **comida, bebida** e **sobremesa**, que são arrays contidos no objeto **orderList**.


##### Dentro da master

```javascript
cd try-food
npm install
npm start
```

###### Dicas importantes:

- Pense em três condições: (Não há o item na lista, há o item na lista, a quantidade do item na lista passou a ser zero (0);
- A lista de comidas, bebidas e sobresas são exibidas individualmente;
- O uso do spread (...) pode te ajudar nas lógicas que acrescentam posições no array (sem substituir;
- A função handleChange recebe informações do componente **src/components/Options.js**, que é um filho da página **src/pages/Order.js**;
- Você precisará do Hook useState para essa função.


#### Gabarito
*O gabarito do exercício está na pasta **answer_keys** desse repositório.*
