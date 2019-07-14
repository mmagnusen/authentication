import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    firstName: null,
    lastName: null,
    email: null, 
    password: null,
    submitted: false
  }

  updateField = (field, value) => {

    this.setState({
      [field]: value
    })

    console.log(field, value)
  }

  onSubmit = (e) => {
    
    e.preventDefault();

    this.setState({
      submitted: true,
    })
  }
  render() {

    const { submitted } = this.state;

    return (
      <div className="App">
        <form>

          <section className='form-field'>
            <label>First Name</label>
            <input onChange={(event) => this.updateField('firstName', event.target.value)} />
          </section>

          <section className='form-field'>
            <label>Last Name</label>
            <input onChange={(event) => this.updateField('lastName', event.target.value)} />
          </section>

          <section className='form-field'>
            <label>Email</label>
            <input onChange={(event) => this.updateField('email', event.target.value)} />
          </section>

          <section className='form-field'>
            <label>Password</label>
            <input onChange={(event) => this.updateField('password', event.target.value)} />
          </section>

          <button onClick={this.onSubmit}> Submit</button>
          {submitted && <p>The form has been submitted!</p>}
        </form>
      </div>
    );
  }

}

export default App;
