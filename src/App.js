import React, { Component } from 'react'
import './App.css';
import alface from "./imagens/alface.png"
import laranja from "./imagens/laranja.png"
import cereja from "./imagens/cereja.png"
import cenoura from "./imagens/cenoura.png"
import manga from "./imagens/manga.png"
import limao from "./imagens/limao.png"
import beterraba from "./imagens/beterraba.png"
import tomate from "./imagens/tomate.png"
import carrinho from "./imagens/ShoppingCart.png"
import soma from "./imagens/PlusCircle.png"
import subtração from "./imagens/MinusCircle.png"
class App extends Component {
  state = {
    horta: [
      {
        img: `${alface}`
      },
      {
        img: `${laranja}`
      },
      {
        img: `${cereja}`
      },
      {
        img: `${cenoura}`
      },
      {
        img: `${manga}`
      },
      {
        img: `${limao}`
      },
      {
        img: `${beterraba}`
      },
      {
        img: `${tomate}`
      }
    ]
  };

  render() {
    return (
      <div className='app'>
        <div className="header">
          <h1>HORTIFRUTI</h1>
          <p>VnW</p>
          <h2>Nossos Produtos</h2>
        </div>

        <div className="card-container">
          {this.state.horta.map((item) => (
            <div className="card">
              <img className="imgs" src={item.img} />
            </div>
          ))}
        </div>
        <div className='carrinho'>
          <div className='secondCarrinho'>
            <img className='carrinhoImg' src={carrinho} alt="carrinho de compras" />
            <h3>Arraste o seu produto aqui para colocar no carriho</h3>

          </div>
          <div className='maisEmenos'>
          <img className='sinal' src={soma} alt="sinal de soma" />
          <img className='sinal' src={subtração} alt="sinal de subtração" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
