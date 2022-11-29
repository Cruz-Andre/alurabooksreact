import Logo from '../Logo/Logo'
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader'
import IconesHeader from '../IconesHeader/IconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	background-color: aliceblue;
	justify-content: space-around;
	align-items: center;

	@media screen and (max-width: 840px) {
    	flex-direction: column;
		align-items: center;
	}
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