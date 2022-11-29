import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
	display: flex;
    align-items: center;
	gap:10px;
	padding: 0
`

const Icone = styled.li`
    margin-right: 10px;
`

const icones = [perfil, sacola]

function IconesHeader() {
	return (
		<Icones>
			{icones.map(icone => (
				<Icone key={icone}><img src={icone} alt='icone' /></Icone>
			))}
		</Icones>
	)
}

export default IconesHeader
