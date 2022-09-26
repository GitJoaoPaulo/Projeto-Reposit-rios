import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);

    h1{
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg{
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 720px){
        width: 90%;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 17px;
    }

    @media screen and (max-width: 390px){
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
         
        input{
            width: 90%;
            margin-bottom: 10px;
        }

    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
    background-color: #0D2636;
    border: 0;
    margin-left: 10px;
    padding: 0  15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 390px){
        width: 90%;
        height: 30px;
        margin: 0;
    }
`;
