## Gerenciamente de estados complexos com Context API e React Hooks


### Para fazer um fork

**1 - Clique no botão "Fork" do repositório.**

![passo2](images/fork-step-1.png)

**2 - Selecione seu usuário do GitHub.**

![passo3](images/fork-step-2.png)

**3 - Escolha a URL remota (SSH, HTTPS) para fazer o clone do repositório.**

![passo4](images/fork-step-3.png)


### Instruções


Hoje você trabalhará com o melhor aplicativo no ramo de entrega de comida de toda a internet, o try-food.
No momento precisamos melhorar essa aplicação e centralizar os estados que são utilizados por vários componentes em um contexto. Performance é muito importante e a manutenção do código deve ser feita da melhor maneira possível.
A equipe de engenharia começou a migrar tudo para Context API mas eles pararam para almoçar e você, que sabe que falta pouca coisa para fazer a aplicação funcionar, decidiu terminar a última função e colaborar com o resultado da equipe.

Você receberá um código que simula essa aplicação e precisará completar esse código para ver a aplicação em funcionamento. A parte mais importante é treinar manipulação de estados dentro do arquivo **src/context/MyProvider.js**, onde a função **handleChange** está vazia. Devido a função handleChange estar vazia, sua aplicação estará quebrada, e portanto, a página Order.js não está recebendo o MyProvider.js com os estados da aplicação, fazendo com sua ramificação (filhos) também não receba o contexto com os estados.

***Dica: Header.js, Cart.js e Options.js são componentes renderizados pela página Order.js e todos utilizam o contexto da aplicação***

Analise o código da aplicação e pense como atualizar individualmente a lista de **comida, bebida** e **sobremesa**, que são arrays contidos no objeto **orderList**.

#### Esquema de pastas e arquivos
![esquema](images/schema.png)

- **try-food:** Diretório com toda a aplicação.
- **src:** Diretório que contém seu código JavaScript, JSX.
- **components:** Diretório que contém os componentes utilizados na aplicação.
- **context:** Diretório que contém o contexto da aplicação e o provedor de estados da sua aplicação.
- **pages:** Diretório que contém as páginas da aplicação, ou seja, as páginas configuradas por rotas.
- **index.js:** Arquivo que trata de encontrar o arquivo raiz da aplicação e implementa o código React nele. O index.js importa a biblioteca react-dom e contém o BrowserRouter, que realiza a implementação de rotas para navegadores HTML5 e informa a aplicação que teremos roteamento de componentes a partir daquele ponto. Esta implementação encapsula App.js.
- **App.js:** Arquivo que representa o elemento raiz da aplicação, a partir dele haverá ramificações. Esta implementação encapsula Routes.js.
- **Routes.js:** Arquivo que centraliza todas as rotas da aplicação (boa prática).

##### Dentro da master

```javascript
cd try-food
npm install
npm start
```

###### Dicas importantes:

- Pense em três condições: (1 - Não há o item na lista; 2 - Há o item na lista; 3 - A quantidade do item na lista passou a ser zero (0));
- A lista de comidas, bebidas e sobresas são exibidas individualmente;
- O uso do spread (...) pode te ajudar nas lógicas que acrescentam posições no array (sem substituir;
- A função handleChange recebe informações do componente **src/components/Options.js**, que é um filho da página **src/pages/Order.js**;
- Você precisará do Hook useState para essa função.


#### Gabarito
*O gabarito do exercício está na pasta **answer_keys** desse repositório.*
