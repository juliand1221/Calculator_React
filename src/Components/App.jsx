import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import { Component } from "react";

class App extends Component {

  state = {
    total: null,
    next: null,
    operator: null
  }



  render() {
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <Display value={this.state.next || this.state.total || "0"} />
    </div>
  );
}
}

export default App;
