/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from "styled-components"

const TableBody = ({ data , isLoading, deleteFunction }) => {

    let checkLoading = () => {
      return isLoading ? "Loading ..." : renderData()
    }
    let renderData = () => {
          return  data?.map((item,index) => (
            <tr key={index+1}>
              <td>
                {index+1}
              </td>

              <td>
                  <Body>
                    <Image src={item[1].imageUrl} />
                    {item[1].name}
                  </Body>
              </td>

              <DescriptionBody>
                  <Description>
                      {item[1].description}
                  </Description>
              </DescriptionBody>

              <td>
                {item[1].type}
              </td>

              <td>
                {item[1].author}
              </td>

              <DelButton onClick={() => deleteFunction(item[0])}>
                  <i className="material-icons">
                    &#xe872;
                  </i>
              </DelButton>
            </tr>
        ))
    }
    return (
      <Tbody>
          {
            checkLoading()
          }
          {
          }
      </Tbody>
    )
}

export default TableBody

const Tbody = styled.tbody`
    tr td{
        text-align: center;
        color: #05111A;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 115%; 
        letter-spacing: 0.14px;
        height: 48px;
    }

    tr{
        background: #FFF;
        box-shadow: 0px -1px 0px 0px #E6E7E9 inset, 0px 1px 0px 0px #E6E7E9 inset;
    }
`

const DescriptionBody = styled.td`
    display: flex;
    justify-content: center;
`

const Description = styled.p`
    display: flex;
    align-items: center;
    text-align: center;
    overflow-x: scroll;
    max-width: 199px;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    &&::-webkit-scrollbar {
      display: none;
    }
`

const Image = styled.img`
    width: 27px;
    height: 36px;
`

const Body = styled.p`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
`

const DelButton = styled.td`
    cursor: pointer;
`