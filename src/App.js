import { ThemeProvider } from 'styled-components';
import './App.css';
import {Container} from './Components/Styled/Container.styled';
import Header from './Components/Header';
import GlobalStyles from './Components/Styled/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
          <Header/>
          <div className="App">
            <Container>
              <h1>Hello World</h1>
            </Container>
          </div>
      </>

    </ThemeProvider>
  );
}

export default App;
