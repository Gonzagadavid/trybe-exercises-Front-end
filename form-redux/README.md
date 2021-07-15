# Exercício de fixação
Vamos criar formulários utilizando `Redux`! \o/

Vocês criarão dois formulários, cada um em uma etapa, um para dados pessoais e outro para dados profissionais e exibí-los na tela.

[gif]

Para isso, é preciso salvar as informações de cada formulário no gerenciador de estados e, por fim, numa outra página, acessar esses dados para que sejam renderizados.

Você vai precisar de:

* Três páginas: uma vai renderizar o formulário de informações pessoais, outra de informações profissionais e uma para exibir as informações, além de um botão junto dos formulários que enviam as informações e passam para a página seguinte.

* Gerenciador de estados (Reeeedux), para salvar as informações na `store` e também para acessá-las.

Então, mãos ao código!!

**1 - Crie uma pasta chamada `pages`, e, dentro dela, 3 arquivos:**

PersonalForm.jsx
ProfessionalForm.jsx
FormDataDisplay.jsx

_Se vocês quiserem utilizar a extensão .js, tudo bem, fiquem à vontade!_

Não se preocupe com o conteúdo de cada uma delas, por enquanto renderize apenas uma `div` com um texto identificando cada uma das páginas.

**2 - Crie as rotas dentro de `App.js` para renderizar as páginas:**
`PersonalForm` será renderizada na página principal, com a rota `'/'`.
`ProfessionalForm` será renderizada ao acessar a rota `'/professionalForm'`.
`FormDataDisplay` será renderizada ao acessar a rota `'/formDisplay'`.

**3 - Crie um `fieldset` que contenha os seguintes `inputs` e os renderize em `PersonalForm.jsx`:**

Nome - Texto
Email - Texto
CPF - Texto
Endereço - Texto
Cidade - Texto
Estado - Select
Todos os estados do Brasil
Um botão com o texto `Enviar` e que redireciona para a página ProfessionalForm

**4 - Crie um `fieldset` que contenha os seguintes inputs e os renderize em `ProfessionalForm.jsx`:**
Resumo do currículo - TextArea
Cargo - TextArea
Descrição do cargo - Texto
Um botão com o texto `Enviar` e que redireciona para a página FormDataDisplay


**5 - Crie um diretório chamado Redux:**
Dentro da pasta "redux", crie as pastas "actions", "reducers" e "store".
Dentro de "actions" crie um arquivo chamado `action.jsx`.
Dentro de "reducers" crie um arquivo chamado `reducers`
Dentro de "store" crie um arquivo chamado `store`.

_Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`._

**Dica: Caso esteja tendo dificuldades para montar a estrutura do Redux, você pode consultar o passo a passo que estão nesse [link!](https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/2036e927-303a-4846-a741-80dbe155266d/fluxo-de-dados-no-redux/f07a7c11-2049-4c2f-b514-3db84cb40ae7?use_case=side_bar)


**6 - Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`.**

**Dica: Lembre-se que o `mapStateToProps` lê as informações da `store` e o `mapDispatchToProps` envia as informações para a `store`.**

**7 - Renderize, em `FormDataDisplay`, todas as informações que estão salvas na `store`.**

---
