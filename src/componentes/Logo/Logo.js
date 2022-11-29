import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
	display: flex;
    font-size: 30px;
	text-align: center;
	.tituloLogo {
		margin: 10px 0;
	}

`
const LogoImage = styled.img`
	margin-right: 10px;
`

function Logo() {
	return (
		<LogoContainer>
			<LogoImage src={logo} alt='logo alura books' />
			<p className='tituloLogo'><strong>Alura</strong>Books em <strong>React</strong></p>
		</LogoContainer>
	)
}

export default Logo