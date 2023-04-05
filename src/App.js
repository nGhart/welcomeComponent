import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <WelcomeComponent name="Codetrain"/>
    </div>
  );
}
class WelcomeComponent extends React.Component {
  render() {
    return <h1>{this.props.name} is awesome, react works!!!</h1>
  }
}

export default App;