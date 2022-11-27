import styled from 'styled-components'

const Opcoes = styled.ul`
	display: flex;
`

const Opcao = styled.li`
	display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    height: 100%;
    cursor: pointer;
    padding: 0 5px;
    font-size: 16px;
` 

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
	return (
		<Opcoes>
			{textoOpcoes.map(texto => (
				<Opcao key={texto}><p>{texto}</p></Opcao>
			))}
		</Opcoes>
	)
}

export default OpcoesHeader