import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { bindNodeCallback } from "rxjs";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["Fast", "Scalable", "Potato"];

const paragraphs = [
  "Mobil Uygulama Tabanlı Sistem",
  "Kolay Atık Takibi",
  "Oyunlaştırma Temelli",
  "Atık Ayrıştırması"
];

class Transition extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1
      });
    }, 4000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1
      });
    }, 150);
  }

  render() {
    return (
      <React.Fragment >
          
            <ReactTextTransition
              text={paragraphs[this.state.paragraphIndex % texts.length]}
              overflow
              style={{height:10,width:700,color:"#fff",fontSize:40,marginTop:-100,marginLeft:"auto",fontFamily:"Roboto Consensed"}}
            />
   
        
      </React.Fragment>
    );
  }
}

export default Transition;
