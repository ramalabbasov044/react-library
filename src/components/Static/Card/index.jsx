/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActiveBook } from '../../../features/setSearchBook/setSearchBook'
import { useNavigate } from 'react-router-dom'
const CardC = ({ books }) => {
    const dispatch = useDispatch()  
    const navigate = useNavigate()

    const setProductDetail = (item) => {
        dispatch(setActiveBook(item))
        navigate("/product")
    }
    
    return (
      <CardBody>
          {
            books.map((item) => (
                <Card>
                    <Image src={item[1].imageUrl} />
                    <Name>
                      {
                        item[1].name
                      }
                    </Name>

                    <ReadMore onClick={() => setProductDetail(item)}>
                        Read More
                    </ReadMore>
                </Card>
            ))
          }
      </CardBody>
    )
}

export default CardC

const CardBody = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 60px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 22px;
    background: #FFF;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
`

const Image = styled.img`
    width: 134.229px;
    height: 190px;
`

const Name = styled.p`
    color: #241400;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 196.187%;
    text-align: center;
    overflow-x: scroll;
    white-space: nowrap;
    max-width: 120px;

    &::-webkit-scrollbar{
        display:none;
    }
`

const ReadMore = styled.div`
    text-align: center;
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 900;
    line-height: 196.187%; 
    text-transform: uppercase;
    border-radius: 3px;
    background: var(--2, #E16A00);
    box-shadow: 0px 3px 8px 0px rgba(225, 106, 0, 0.19);
    cursor: pointer;
`