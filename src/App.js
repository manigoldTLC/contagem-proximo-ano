import {GlobalStyle} from './styles/Global';
import Home from './Home';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <GlobalStyle />
      
      <Home />
      <FooterComponent />
      {/* <div style={{position: 'fixed', top: '-5%', zIndex:'-1', backgroundPosition: 'center'}}>
        <img style={{width: '100%', height: '100%'}} src={require('./assets/background.png')} />
      </div> */}
    </div>
  );
}

export default App;
