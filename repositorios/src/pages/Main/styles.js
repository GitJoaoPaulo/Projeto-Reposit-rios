import styled, {keyframes, css} from "styled-components";


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
        border: 1px solid ${props => (props.error ? '#FF0000' : '#eee')};
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

const animate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background-color: #0D2636;
    border: 0;
    margin-left: 10px;
    padding: 0  15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading &&
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `
    }

    @media screen and (max-width: 390px){
        width: 90%;
        height: 30px;
        margin: 0;
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li{
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li{
            border-top: 1px solid #ccc;
        }

        a{
            color: #0D2636;
            text-decoration: none;
        }
    }
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    border: 0;
    background: transparent;
    color: #0D2636;
    margin-right: 10px;
    outline: 0;
    border-radius: 4px

`;


