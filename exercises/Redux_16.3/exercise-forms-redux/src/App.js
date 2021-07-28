import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormDataDisplay from './pages/FormDataDisplay';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ PersonalForm } />
          <Route exact path="/professionalForm" component={ ProfessionalForm } />
          <Route exact path="/formDisplay" component={ FormDataDisplay } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
