import styled from 'styled-components'
import Header from './componentes/Header/Header'
import Pesquisa from './componentes/Pesquisa/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos/UltimosLancamentos';

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  margin: 0 auto;
  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App
