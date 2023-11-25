import styled from "styled-components";


const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    height: 100vh;

    .Who_Whe_are{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 9vw;
        gap: 2rem;
    }

    .Who_Whe_are h1{
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
    }

    .Who_Whe_are p{
        text-align: center;
        font-size: 1.5rem;
        line-height: 3rem;
        font-weight: 400;
    }
`

const Container_Cards = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    grid-template-rows: 235px 235px;

    img{
        width: 350px;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    text-align: center;
    background-color: #fff;
    border: 1px solid #a9a9a9;

    h3{
        font-size: 3rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    p{
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 400;
    }
`

export { Container_Cards, Card, Container };