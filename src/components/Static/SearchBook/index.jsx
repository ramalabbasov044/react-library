/* eslint-disable react/jsx-key */
import { getBook , getBookDetails } from '../../../service/index'
import { SearchIconWhite } from '../../Icons/imports'
import { setSearchBookResult } from '../../../features/setSearchBook/setSearchBook'
import { useDispatch } from 'react-redux'
import { AlertTitle } from '../imports'
import styled from 'styled-components'
import { useState } from 'react'

const SearchBookComponent = () => {
    const dispatch = useDispatch()
    const [bookName,setBookName] = useState()
    const [book,setBook] = useState([])
    const [loading,setLoading] = useState(false)
    const [isShowResult,setIsShowResult] = useState(false)

    let searchBook = async () => {
        try {
            bookName.length > 0 ? setIsShowResult(true) : setIsShowResult(false)
            setLoading(true)
            const response = await getBook(bookName);
            setBook(response.data.items);  
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false)
        }
    }

    let getBookDetail = async (id) => {
        try {
            const response = await getBookDetails(id);
            dispatch(setSearchBookResult(response.data.volumeInfo))
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Wrapper>
            <AlertTitle 
                size={18}
                weight={600}
                title={"Search book"} 
            />

            <Bottom>
                <SearchInput 
                    type="text" 
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder='Dan Brown' 
                /> 
                <SearchButton onClick={searchBook}>
                    <SearchIconWhite />
                </SearchButton>
            </Bottom>


            {
                isShowResult ? 
                    <ResultBook>
                        {loading ? "Loading ..." : ""}
                        {
                            book?.map((item) => (
                                <BookItem key={item.id}>
                                    <BookName onClick={() => getBookDetail(item.id)}>
                                        {item.volumeInfo.title}
                                    </BookName>
                                </BookItem>
                            ))
                        }
                    </ResultBook> : 
                ""
            }
        </Wrapper>
    )
}

export default SearchBookComponent

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const SearchInput = styled.input`
    max-width: 370px;
    width: 100%; 
    padding: 9px 33px;
    border-radius: 34px;
    border: 2px solid rgba(57, 31, 0, 0.48);
    background: #FFF;
    color: #ADADAD;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder{
        color: #ADADAD;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`

const SearchButton = styled.button`
    width: 63px;
    height: 40px;
    border: 0;
    border-radius: 34px;
    background: #FF8B00;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 6px;
`

const ResultBook = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 370px;
    padding: 20px 36px;
    border-radius: 35px;
    background: #F1F0F0;
    height: 300px;
    overflow-x: scroll;
`

const BookItem = styled.div`
    display: flex;
    gap: 12px;
    cursor: pointer;
`

const BookName = styled.p`
    color: #BCBCBC;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`