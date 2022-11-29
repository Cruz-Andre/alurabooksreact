import { ultimosLancamentos } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo/Titulo"
import CardRecomenda from "../CardRecomenda/CardRecomenda"
import styled from "styled-components"
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
	background-color: #EBECEE;
	padding-bottom: 20px;
	display: flex;
	gap: 1rem;
	flex-direction: column;
`
const NovosLivrosContainer = styled.div`
	margin-top: 30px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
	
	/* @media screen and (max-width: 940px) {
    	flex-direction: column;
		row-gap: 1rem;
	} */

`

function UltimosLancamentos() {
	return (
		<UltimosLancamentosContainer>
			<Titulo
				cor="#EB9B00"
				tamFonte='36px'
			>
				Últimos Lançamentos
			</Titulo>

			<NovosLivrosContainer>
				{ultimosLancamentos.map(ultLanc => (
					<img
						key={ultLanc.id}
						src={ultLanc.src}
						alt={'imagem do livro ' + ultLanc.nome}
					/>
				))}
			</NovosLivrosContainer>

			<CardRecomenda 
				titulo="Talves você se interesse por..."
				subtitulo='Angular 11'
				descricao='Construindo uma aplicação com a plataforma Google'
				imagem={imagemLivro}	
			/>
			<CardRecomenda 
				titulo="Talves você se interesse por..."
				subtitulo='Angular 11'
				descricao='Construindo uma aplicação com a plataforma Google'
				imagem={imagemLivro}	
			/>
		</UltimosLancamentosContainer>
	)
}

export default UltimosLancamentos
