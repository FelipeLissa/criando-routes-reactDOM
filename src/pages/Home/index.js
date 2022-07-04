import { Link }from 'react-router-dom'


function Home() {
    return (
      <div>
        <h1>Página Home</h1>

        <hr/>

        <Link to="/produto/123">Acessar Produto 123</Link>
      </div>
    );
  }
  
  export default Home;
  