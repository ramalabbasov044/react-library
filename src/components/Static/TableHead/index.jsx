/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from "styled-components"

const TableHead = ({ list }) => {
  return (
      <Thead>
          <tr>
                {
                  list.map((item) => (
                    <th key={item}>
                        {item}
                    </th>
                  ))
                }
          </tr>
      </Thead>
  )
}

export default TableHead

const Thead = styled.thead`
    background: #720418;
    box-shadow: 0px -1px 0px 0px #E6E7E9 inset;

    td, th {
      text-align: center;
      padding: 8px;
      height: 48px;
      vertical-align: middle;
    }

    tr th{
      color: #FFF;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 115%; 
      letter-spacing: 0.14px;
    }
`