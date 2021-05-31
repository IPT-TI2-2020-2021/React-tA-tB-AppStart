// cria uma variável e atribui-lhe um valor
import logo from './logo.svg';
// associa o ficheiro CSS ao componente
import './App.css';


// cria o 'componente' App
// neste caso é criada uma FUNÇÃO
function App() {
  // todo o componente tem obrigatoriamente de 'devolver' alguma coisa
  return (
    <div className="App"> {/* e apenas consegue devolver um ÚNICO objeto */}
    {/* utiliza-se o nome 'className' em vez de 'class' 
        porque no JSX a palavra 'class' é reservada.
        Na conversão para HTML, a palavra 'className' é convertida em 'class' */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* a forma de se aceder a variáveis no React
            é identificar essa variável entre chavetas {logo} */}
        <p>
          Edite este ficheiro <code>src/App.js</code> e guarde-o, 
          que é efetuado automaticamente o 'recargar'.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
} // fim da 'componente' App


// um componente só é acessível se for 'exportado'
export default App;
