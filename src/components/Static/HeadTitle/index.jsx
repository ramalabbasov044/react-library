/* eslint-disable react/prop-types */
import styled from "styled-components"

const HeadTitle = ({ title , size , weight , color }) => {
  return (
    <>
        <Title style={{fontSize: size, fontWeight: weight , color:color}}>
            {
                title
            }
        </Title>
    </>
  )
}

export default HeadTitle

const Title = styled.p``