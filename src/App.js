import './App.css';
import {Navbar, Header, About, Features, Footer} from './components/index'

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar /> 
        <Header />
      </header>
      <Features />
      <About />
      <Footer />
    </main>
  );
}

export default App;
