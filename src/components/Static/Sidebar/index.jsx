import Router from '../../../constants/routes/index'
import { WhiteLogo , BookLogo } from '../../Icons/imports'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const Sidebar = () => {
    const navigate = useNavigate()
    const logoutFunction = () => {
        localStorage.removeItem("userData")
        navigate(Router.login)
    }

    return (
        <Wrapper>
            <Top>
                <WhiteLogo />
            </Top>

            <Bottom>
                <List>
                    <BookLogo />
                    Home
                </List>
                <List>
                    <BookLogo />
                    Books 
                </List>
                <List>
                    <BookLogo />
                    About 
                </List>
                <List>
                    <BookLogo />
                    Join Us 
                </List>
                <List>
                    <BookLogo />
                    Contact 
                </List>
                <List onClick={logoutFunction}>
                    <BookLogo />
                    Logout 
                </List>
            </Bottom>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
    background: #720418;
    padding: 90px 25px 90px 25px;
`

const Top = styled.div`
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const List = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 196.187%; 
    cursor: pointer;

    svg{
        width: 30px;
        height: 40px;
    }
`