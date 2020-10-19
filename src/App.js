import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { ANIMALS } from './shared/animals';
import Zoo from './components/ZooComponent';
import ZooList from './components/ZooListComponent';
import './App.css';


class App extends Component {

  constructor(props) {
    super();

    this.state = {
      animals : ANIMALS,
      counter: 0
    }
    this.handler = this.handler.bind(this)

  }

  handler (animal) {
    console.log('HANDLER')
    console.log(animal)
    console.log(this.state)
    
    let wa = this.state.animals
    let count = this.state.counter+1
    if (count == 3){
    wa.map((animal) => {animal.title = this.state.animals[animal.id].titleDefault  })
    count = 0
    } else { wa[animal.id].title = 'Valio pavyko vėl!' 
    }
      //  wa[animal.id].title = this.state.animals[animal.id].titleDefault .map((animal) => {
    this.setState({
      animals: wa,
      counter: count
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar color="primary">ZOO</Navbar>
        <ZooList animals={this.state.animals} handler = {this.handler}/>
      </div>
    );
  }
}

export default App;
