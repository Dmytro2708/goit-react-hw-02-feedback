
import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };




  render ( ) {
return (
<div>
  <button>Good</button>
  <button>Neutral</button>
  <button>Bad</button>

  <GlobalStyle/>
</div>
);
  };

}