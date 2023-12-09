/* eslint-disable react/prop-types */
import styled from "styled-components"

const HeadTitle = ({ title , size , weight }) => {
  return (
    <>
        <Title style={{fontSize: size, fontWeight: weight}}>
            {
                title
            }
        </Title>
    </>
  )
}

export default HeadTitle

const Title = styled.p`
    
`