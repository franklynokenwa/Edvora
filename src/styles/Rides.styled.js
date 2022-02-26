import styled from 'styled-components'

const StyledRide = styled.section`
    background-color: #171717;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    padding: 2rem;
    color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;

    img{
        width:19rem;
    }

    section{
        display: flex;
        justify-content: space-between;
        width: 45rem;
    }
    section div{
        text-align:left;
        position: relative;
        top: -1rem;
        height: 10.5rem;
        color: white;
        width: 19.8rem;        
    }
    aside{
        display: flex;
        justify-content: space-between;
    }
    aside p{
        background-color: #0A0A0A;
        height: 2rem;
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align:center;
        border-radius: 15px;
        margin-left:1rem ;
    }
`

export default StyledRide