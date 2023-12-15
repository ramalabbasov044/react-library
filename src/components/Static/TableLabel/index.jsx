import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const TableLabel = ({ id , title }) => {
  return (
    <>
      <Label htmlFor={id}>
        {
          title
        }
      </Label>
    </>
  )
}

export default TableLabel

const Label = styled.label`
    color: #030102;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`