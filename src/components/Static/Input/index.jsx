import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const InputComponent = ({ type , placeholder , value , name , onInputChange , padding }) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;
        onInputChange(name, inputValue);
    };
    
    return (
        <>
            <Input
                name={name}
                type={type} 
                value={value} 
                style={{padding:padding}}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default InputComponent

const Input = styled.input`
    outline: none;
    border: 1px solid #CECECE;
    background: #FFF;
    color: #797667;
    font-size: 16px;
    font-weight: 400;
    
    &&:placeholder{
        color: #797667;
        font-size: 19px;
        font-weight: 400;
    }
`