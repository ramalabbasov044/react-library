import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const ButtonC = ({ title , callBackFunction , padding , weight }) => {
    let handleButton = () => {
      callBackFunction()
    }
    
    return (
        <>
            <Button style={{padding:padding,fontWeight: weight}} onClick={handleButton}>
                {
                    title
                }
            </Button>
        </>
    )
}

export default ButtonC

const Button = styled.button`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #CECECE;
    background: #E16A00;
    color: #FFF;
    text-align: center;
    font-size: 19px;
    font-style: normal;
    line-height: normal;
    cursor: pointer;
`