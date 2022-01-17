import React , {Component} from "react";

class Message extends Component {
  render(){
    return (
    <p>
    {this.props.counts} {this.props.counts===1 ? "Flip" : "Flips"}
    {" "}
    {this.props.randCoin===0 ? `${this.props.heads+1} Heads `:`${this.props.heads} Heads `}
    {this.props.randCoin!==0 ? `${this.props.tails+1} Tails` : `${this.props.tails} Tails`}
    </p>
  )
  }
}

export default Message;
