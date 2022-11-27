import Logo from '../Logo/Logo'
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader'
import IconesHeader from '../IconesHeader/IconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
	display: flex;
	background-color: aliceblue;
	justify-content: center;
`

function Header() {
	return (
		<HeaderContainer>
			<Logo />
			<OpcoesHeader />
			<IconesHeader />
		</HeaderContainer>
	)
}

export default Header