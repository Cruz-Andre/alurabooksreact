import styled from 'styled-components'

const Opcoes = styled.ul`
	display: flex;
	padding: 0;
	column-gap: 1rem;
`

const Opcao = styled.li`
	display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 0 5px;
    font-size: 16px;
	&:hover {
		background: linear-gradient(90deg, #002F52 35%, #326589);
		color: aliceblue;
		border-radius: 10px;
	}
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