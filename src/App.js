import React , {Component} from "react";
import Coin from "./Coin";
import Message from "./Message";
import './App.css';

class App extends Component {
  // static defaultProps ={
    // head:"https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
    // tail:
  // }
  constructor(props){
    super(props);
    this.state={
      rand:0,
      count:0,
      heads:0,
      tails:0
    }
    this.randCoin=this.randCoin.bind(this);
  }

  randCoin(){
  //   let rand=Math.floor(Math.random()*2);
    this.setState({rand:Math.floor(Math.random()*2),count:this.state.count+1});

    if(this.state.rand){
      this.setState({tails:this.state.tails+1})
    }else{
      this.setState({heads:this.state.heads+1})
    }
  }

  render(){
  return (
    <div className="App">
    <Coin random={this.state.rand}/> <br/>

    <button onClick={this.randCoin}>Flip Coin</button>

    <Message counts={this.state.count+1} heads={this.state.heads} tails={this.state.tails} randCoin={this.state.rand}/>
    </div>
  );
}
}

export default App;
