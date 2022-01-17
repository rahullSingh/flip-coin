import React , {Component} from "react";
import "./Coin.css"

class Coin extends Component {
  static defaultProps={
    coin:["https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg","https://media.istockphoto.com/photos/half-dollar-coin-isolated-on-white-picture-id478297951?k=20&m=478297951&s=612x612&w=0&h=w10u-EHUiJjRbqmJWHfqEX_6mrEhhLZpCumGVWHRcE0="],
  }
  render(){
    return (
      <div>
      <img src={this.props.coin[this.props.random]} alt={this.props.random===0 ? "head" : "tail"} />
      </div>
  )
  }
}

export default Coin;
