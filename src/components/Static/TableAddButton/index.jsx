import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const TableAddButton = ({ title , addBook }) => {
    const callBackF = () => {
        addBook()
    }
  return (
    <>
        <AddButton onClick={callBackF}>
            {
                title
            }
        </AddButton>
    </>
  )
}

export default TableAddButton

const AddButton = styled.button`
    padding: 12px 24px;
    border: 0;
    border-radius: 10px;
    background: #FF8B00;
    width: 100%;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`