
// import {Fragment} from 'react';
// import {Fragment} from 'ReactDOM';
function Header(props) {
  return (
    <header className="header" ><h1>{props.inner}</h1></header>
  )
}





const Section = () => {

  return (
    <section className="section">
    <div className="container">
      <div id="formulaScreen">Formula Screen</div>
      <div id="display">0</div>
      <button id="clear " className="squardm">AC</button>
      <button id="divide" className="squard">/</button>
      <button id="multiply" className="squard">x</button>
      <button id="seven" className="squard">7</button>
      <button id="eight" className="squard">8</button>
      <button id="nine" className="squard">9</button>
      <button id="subtract" className="squard">-</button>
      <button id="four" className="squard">4</button>
      <button id="five" className="squard">5</button>
      <button id="six" className="squard">6</button>
      <button id="add" className="squard">+</button>
      <button id="one" className="squard">1</button>
      <button id="two" className="squard">2</button>
      <button id="three" className="squard">3</button>
      <button id="equals">=</button>
      <button id="zero" className="squard">0</button>
      <button id="decimal" className="squard">.</button>
    </div>
  </section>
  )
}




function App() {


  return (
    <React.Fragment>
      <Header inner="Calculator Michael Javier Mota" />
      <main>  
        <Section />
      </main>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));