import styled from 'styled-components'

const Container = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 7rem;
    
    img{
        width: 150px;
    }
    
    ul{
        display: flex;
        list-style: none;
        gap: 2rem;
    }
    
    li a{
        color: #000;
        font-size: 2rem;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
    }
`

export default Container;