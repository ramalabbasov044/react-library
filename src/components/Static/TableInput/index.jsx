import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const TableInput = ({ id , type , placeholder , value , name , onInputChange }) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;
        onInputChange(name, inputValue);
    };
    
    return (
        <>
            <Input
                id={id}
                name={name}
                type={type} 
                value={value} 
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default TableInput

const Input = styled.input`
    outline: none;
    border-radius: 10px;
    border: 1px solid #E2E6EE;
    background: #FFF;
    box-shadow: 0px 4px 18px 0px rgba(158, 168, 189, 0.31);
    padding: 8px 12px; 
    
    &&:placeholder{
      color: #030102;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
`