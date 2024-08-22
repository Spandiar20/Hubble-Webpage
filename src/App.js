import { ThemeProvider } from 'styled-components';
import './App.css';
import {Container} from './Components/Styled/Container.styled';
import Header from './Components/Header';
import GlobalStyles from './Components/Styled/Global';
import Content from './Content';
import Card from './Components/Card'

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
              {Content.map((item, index) => (
                <Card key={item.id} item={item}/>
              ))}
            </Container>
          </div>
      </>

    </ThemeProvider>
  );
}

export default App;
