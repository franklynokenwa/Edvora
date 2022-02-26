import styled from 'styled-components'

const StyledFilter = styled.section`
    background-color: #0A0A0A;
    color: #D0CBCB;
    width: 10rem;
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    margin-top: 3rem;

    p{
        margin-left: -3.5rem;
    }

    hr{
        width: 6rem;
        margin-bottom: 1rem;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
;
    }
    select{
        width: 6rem;
        height: 2rem;
        margin-bottom: 1rem;
        border-radius: 7px;
        background-color: #232323;
        color:#FFFFFF;
        border: none;
        cursor: pointer;
    }

`

export default StyledFilter