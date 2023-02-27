import React, {Component} from 'react'
import './App.css';
import alface from "./imagens/alface.png"
import laranja from "./imagens/laranja.png"
import cereja from "./imagens/cereja.png"
import cenoura from "./imagens/cenoura.png"
import manga from "./imagens/manga.png"
import limao from "./imagens/limao.png"
import beterraba from "./imagens/beterraba.png"
import tomate from "./imagens/tomate.png"
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
</div>
  );
 }
}
export default App;
