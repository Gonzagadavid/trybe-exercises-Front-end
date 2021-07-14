# Exercício de fixação
Vamos criar formulários utilizando `Redux`! \o/

Vocês criarão dois formulários, cada um em uma etapa, um para dados pessoais e outro para dados profissionais e exibí-los na tela.

[gif]

Para isso, é preciso salvar as informações de cada formulário no gerenciador de estados e, por fim, numa outra página, acessar esses dados para que sejam renderizados.

Você vai precisar de:

* Três páginas: uma vai renderizar o formulário de informações pessoais, outra de informações profissionais e uma para exibir as informações, além de um botão junto dos formulários que enviam as informações e passam para a página seguinte.

* Gerenciador de estados (Reeeedux), para salvar as informações na `store` e também para acessá-las.

Então, mãos ao código!

1 - Crie uma pasta chamada `pages`, e, dentro dela, 3 arquivos:

PersonalForm.jsx
ProfessionalForm.jsx
FormDataDisplay.jsx

_Se vocês quiserem utilizar a extensão .js, tudo bem, fiquem à vontade!_

Não se preocupe com o conteúdo de cada uma delas, por enquanto renderize apenas uma `div` com um texto identificando cada uma das páginas.

2 - Crie as rotas dentro de `App.js` para renderizar as páginas:

`PersonalForm` será renderizada na página principal, com a rota `'/'`.
`ProfessionalForm` será renderizada ao acessar a rota `'/professionalForm'`.
`FormDataDisplay` será renderizada ao acessar a rota `'/formDisplay'`.

3 - Crie um `fieldset` que contenha os seguintes `inputs` e os renderize em `PersonalForm.js`:

Nome - Texto
Email - Texto
CPF - Texto
Endereço - Texto
Cidade - Texto
Estado - Select
Todos os estados do Brasil
Um botão com o texto `Enviar` e que redireciona para a página ProfessionalForm

4 - Crie um `fieldset` que contenha os seguintes inputs e os renderize em `ProfessionalForm.js`:

Resumo do currículo - TextArea
Cargo - TextArea
Descrição do cargo - Texto
Um botão com o texto `Enviar` e que redireciona para a página FormDataDisplay


5 - Crie um diretório chamado Redux:

Dentro da pasta "redux", crie as pastas "actions", "reducers" e "store".
Dentro de "actions" crie um arquivo chamado `action.jsx`.
Dentro de "reducers" crie um arquivo chamado `reducers`
Dentro de "store" crie um arquivo chamado `store`.

_Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`._

**Dica: Caso esteja tendo dificuldades para montar a estrutura do Redux, você pode consultar o passo a passo que estão nesse [link!](https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/2036e927-303a-4846-a741-80dbe155266d/fluxo-de-dados-no-redux/f07a7c11-2049-4c2f-b514-3db84cb40ae7?use_case=side_bar)


6 - Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`.

**Dica: Lembre-se que o `mapStateToProps` lê as informações da `store` e o `mapDispatchToProps` envia as informações para a `store`.**

7 - Renderize, em `FormDataDisplay`, todas as informações que estão salvas na `store`.

---

# Exercício de fixação - Gabarito

Vamos criar formulários utilizando `Redux`! \o/

Vamos por partes!

Primeiramente, é necessário criar e inicializar a aplicação para que possamos visualizá-la rodando no navegador. Utilize os seguintes comandos: `npx create-react-app my-form-redux && cd my-form-redux && npm start`.

Agora, precisamos analisar os exercícios:

**1 - Crie uma pasta chamada pages, e, dentro dela, 3 arquivos:**

* PersonalForm.jsx
* ProfessionalForm.jsx
* FormDataDisplay.jsx

Se vocês quiserem utilizar a extensão .js, tudo bem, fiquem à vontade!

Não se preocupe com o conteúdo de cada uma delas, por enquanto renderize apenas uma `div` com um texto identificando cada uma das páginas.

Então vamos lá!

### Resolução exercício 1:

Precisamos criar cada uma das páginas dentro de uma pasta chamada `pages`. Essa pasta ficará dentro de `src` e como pede para não nos preocuparmos, por enquanto, com o conteúdo, vamos colocar apenas um texto com o nome da página.

* PersonalForms.jsx

![PersonalForms.jsx](./images/personal-form.png) 

* ProfessionalForm.jsx

![ProfessionalForm.jsx](./images/professional-form.png)

* Form-data-display.jsx

![Form-data-display.jsx](./images/form-data-display.png)

Com as páginas criadas, precisamos testar para ver se estão funcionando, sendo assim, podemos seguir para o exercício 2, que pede para criarmos as rotas.

**2 - Crie as rotas dentro de `App.js` para renderizar as páginas:**

* `PersonalForm` será renderizada na página principal, com a rota `'/'`.
* `ProfessionalForm` será renderizada ao acessar a rota `'/professionalform'`.
* `FormDataDisplay` será renderizada ao acessar a rota `'/formdisplay'`.

### Resolução exercício 2:
Aqui vamos passar o nosso componente App.js para classe, mantendo o padrão do nosso código e agora que temos nossa estrutura de páginas pronta, podemos partir para o próximo passo, a criação das rotas! Mas antes, é necessário instalar o `react-router-dom` com o comando: `npm install react-router-dom`

Precisamos importar o `BrowserRouter`, o `Route` e o `Switch` e renderizar a página para cada uma das rotas.
* App.js

![App.js](./images/appjs.png)

Teste as rotas para ver se estão renderizando o conteúdo correto e então, vamos partir para o exercício 3!

**3 - Crie um `fieldset` que contenha os seguintes inputs e os renderize em `PersonalForm.jsx`:**

* Nome - Texto
* Email - Texto
* CPF - Texto
* Endereço - Texto
* Cidade - Texto
* Estado - Select
* Todos os estados do Brasil
* Um botão com o texto Enviar e que redireciona para a página ProfessionalForm

### Resolução exercício 3:

Agora, precisamos renderizar os componentes dentro de `PersonalForms`. Analisando o formulário precisamos de um input para o `nome`, `email`, `CPF`, `endereço` e `cidade`. Como esses inputs possuem a mesma estrutura, podemos fazer o que?

Componentizar! \o/

Calma! Não esquecemos do `select` e nem do `button`, vamos componentizá-los também!

Dentro de `src` vamos criar a pasta `components` e dentro dela, os nossos componentes de `Input` e o `Select`.

* Componenete Input

![Input component](./images/inputComponent.png)

* Componente Select

![Select component](./images/selectComponent.png)
![Select proptypes](./images/selectProptypes.png)

* Componente Button

![Button component](./images/buttonComponent.png)

Agora que os componentes da página `PersonalForm` estão prontos, podemos estruturá-la, salvando o que a pessoa usuária digita no estado do componente:

![Lógica PersonalForms](./images/personalForm1.png)

Dentro do render, chamaremos os nossos estados, desconstruindo-os e iremos atribuir também alguns estados brasileiros em seu devido state:

![states](./images/states.png)

Em seguida, precisamos retornar o os componentes recebendo nas `props` seus devidos states e funções.

```javascript
return (
  <fieldset>
    <Input
      label="nome: "
      type="text"
      onChange={ this.handleChange }
      value={ nome }
      name="nome"
      required
    />
    <Input
      label="email: "
      type="text"
      onChange={ this.handleChange }
      value={ email }
      name="email"
      required
    />
    <Input
      label="cpf: "
      type="text"
      onChange={ this.handleChange }
      value={ cpf }
      name="cpf"
      required
    />
    <Input
      label="endereco: "
      type="text"
      onChange={ this.handleChange }
      value={ endereco }
      name="endereco"
      required
    />
    <Input
      label="cidade: "
      type="text"
      onChange={ this.handleChange }
      name="cidade"
      value={ cidade }
    />
    <Select
      defaultOption="Selecione"
      onChange={ this.handleChange }
      value={ estado }
      label="Estado: "
      id="estado"
      name="estado"
      options={ states }
    />
    <Button type="button" label="Enviar" onClick={ this.onSubmitForm } />
  </fieldset>
);

PersonalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PersonalForm;
```
O quarto exercício pede para criarmos outro `fieldset`, mas agora em `ProfessionalForm`.

**4 - Crie um `fieldset` que contenha os seguintes inputs e os renderize em `ProfessionalForm.jsx`:**

* Resumo do currículo - TextArea
* Cargo - TextArea
* Descrição do cargo - Texto

### Resolução exercício 4:

Observando bem, temos dois componentes com a mesma estrutura, o `Resumo do currículo` e o `Cargo` vão ser `textarea`, ou seja...

Componetizar! \o/

* Componente TextArea

![textArea component](./images/textAreaComponent.png)

Pronto, componentes feitos! \o\

_**PS: Pra nossa sorte, a `Descrição do cargo` é um `input` do tipo texto e já temos esse componente, além de já ter também o componente de botão, que vai nos levar para a página `FormDataDisplay`.**_

Agora precisamos montar a estrutura da página:

![ProfessionalForm](./images/professionalform1.png)
![ProfessionalForm](./images/professionalform2.png)

Temos nossa estrutura, temos nossas rotas e agora chegou o momento mais esperado, a aplicação do Redux, yaaaay \o/! Antes de tudo, precisamos instalar o `react-redux`. Para isso, utilizamos o comando: `npm install redux react-redux`.

Feita a instalação, vamos para o que interessa, O CÓDIGO!

O exercício 5 diz:

**4 - Crie um diretório chamado `Redux`:**

Dentro da pasta "redux", crie as pastas "actions", "reducers" e "store".
Dentro de "actions" crie um arquivo chamado `action.js`.
Dentro de "reducers" crie um arquivo chamado `reducers.js`.
Dentro de "store" crie um arquivo chamado `store.js`.

**Lembre-se que, ao montar a estrutura do Redux, é preciso importar o Provider, que recebe a store, no index.js.**






