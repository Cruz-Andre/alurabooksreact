import styled from "styled-components"

const Input = styled.input`
    width: 50%;
    background-color: whitesmoke;
    border: 1px solid #FFF;
    padding: 1rem;
    border-radius: 50px;
    color: darkblue;
    font-size: 1.5rem;
    margin-bottom: 30px;
    text-align: center;

    &::placeholder {
        color: cadetblue;
        font-size: 1.5rem;
    }
    @media screen and (max-width: 840px) {
    	width: 90%;
		&::placeholder {
        color: cadetblue;
        font-size: 1.4rem;
        }
	}
`
export default Input

//o styled-components já é um componente
//não é necessario pois já foi declarado um styled component como Input
//mas só nesse caso pois só há um unico elemento no componente.

// function Input() {
//     return (
//         <input />
//     )
// }

//export default Input
