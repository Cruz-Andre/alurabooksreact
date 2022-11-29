import Input from "../Input/Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
    @media screen and (max-width: 840px) {
    	padding: 1rem 0;
	}
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const ResultadoContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
`
const Resultado = styled.div`
    width: 302px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1rem;
    .livroTitulo {
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        line-height: 24px;
        margin: 0;
    }

    .livroAutor {
        font-weight: 700;
        text-align: center;
        font-size: 18px;
        color: #858585;
        margin: 1rem 0;
    }

    .livroPreco {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        color: #fc6621;
        margin: 0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        margin-top: 1rem;
        margin-left: 0.5rem;
    }

    .tag {
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        color: #9c9c9c;
        padding: 5px 4px;
        background: rgba(197, 197, 197, 0.25);
        border-radius: 4px;
        margin-right: 1rem;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    console.log(livrosPesquisados);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value.toLowerCase()
                    const resultadoPesquisa = livros.filter(livro =>
                        livro.titulo.toLowerCase().includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)                        
                }}
            />
            <ResultadoContainer>
                {livrosPesquisados.map(livroPesquisado => (
                    <Resultado key={livroPesquisado.titulo}>
                        <img src={livroPesquisado.imagem} alt='imagem do livro' />
                        <h2 className="livroTitulo">{livroPesquisado.titulo}</h2>
                        <p className="livroAutor">{livroPesquisado.autor}</p>
                        <p className="livroPreco">R${livroPesquisado.preco.toFixed(2).replace('.',',')}</p>
                        <div className="tags"><span className="tag">{livroPesquisado.categoria}</span></div>
                    </Resultado>
                ))}
            </ResultadoContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa
