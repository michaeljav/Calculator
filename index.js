
const  {useState,Fragment}= React;
const {render} =ReactDOM;

function Header(props) {
  return (
    <header className="header" ><h1>{props.inner } <a href={props.url} target="_blank">FreeCodeCamp</a></h1> </header>
  )
}



const Section = (props) => {

  return (
    <section className="section">
    <div className="container">
      <div id="formulaScreen">Formula Screen</div>
      <div id="display">0</div>
      <button id="clear " className="squardm" onClick={props.Operation}>AC</button>
      <button id="divide" className="squard" onClick={props.Operation}>/</button>
      <button id="multiply" className="squard" onClick={props.Operation}>x</button>
      <button id="seven" className="squard" onClick={props.Operation}>7</button>
      <button id="eight" className="squard" onClick={props.Operation}>8</button>
      <button id="nine" className="squard" onClick={props.Operation}>9</button>
      <button id="subtract" className="squard" onClick={props.Operation}>-</button>
      <button id="four" className="squard" onClick={props.Operation}>4</button>
      <button id="five" className="squard" onClick={props.Operation}>5</button>
      <button id="six" className="squard" onClick={props.Operation}>6</button>
      <button id="add" className="squard" onClick={props.Operation}>+</button>
      <button id="one" className="squard" onClick={props.Operation}>1</button>
      <button id="two" className="squard" onClick={props.Operation}>2</button>
      <button id="three" className="squard" onClick={props.Operation}>3</button>
      <button id="equals" onClick={props.Operation}>=</button>
      <button id="zero" className="squard" onClick={props.Operation}>0</button>
      <button id="decimal" className="squard" onClick={props.Operation}>.</button>
    </div>
  </section>
  )
}


const Operation = (e) => {

console.log('Id: '+e.target.id +' Value: '+e.target.innerText);


  
}

function App() {

const [formulaScreenState,setformulaScreenState] =useState('');
const [displayState,setDisplayState] =useState(0);


  return (
    <Fragment>
      <Header inner="Clone calculator  Michael Javier Mota" url="https://codepen.io/freeCodeCamp/full/wgGVVX" />
      <main>  
        <Section Operation={Operation} />
        {/* <Section Operation={Operation} formularScreen={formulaScreenState}/> */}
      </main>
    </Fragment>
  )
}

render(<App />, document.getElementById('root'));