import styled from 'styled-components';
import Card from '../../components/Static/Card/index'
import { database } from '../../helper/firebase/index'
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Catalog = () => {
    const navigate = useNavigate("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        renderBooks()
    }, []); 

    const renderBooks = () => {
        try {
            const column = ref(database, 'books');
            onValue(column, (snapshot) => {
                const data = snapshot.val();
                const dataToArr = Object.entries(data)
                setBooks(dataToArr)
            })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Wrapper>
            <GoAdmin onClick={() => navigate("/admin")}>
                Go to Admin
            </GoAdmin>
            <HeadTitle>
                Catalog Page
            </HeadTitle>
            <Card books={books} />
        </Wrapper>
    )
}

export default Catalog;

const Wrapper = styled.div`
    padding: 100px 250px;
`

const HeadTitle = styled.p`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
`

const GoAdmin = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 160px;
    height: 35px;
    background: #E16A00;
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 900;
    line-height: 196.187%;
    text-transform: uppercase;
    margin-bottom: 20px;
`