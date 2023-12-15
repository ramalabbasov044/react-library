/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ProductPage = () => {
    const navigate = useNavigate()
    const activeBook = useSelector((state) => state.searchBook.activeBook)
    const [comment,setComment] = useState("")
    const [comments,setComments] = useState([])
    
    if(activeBook.length == 0){
        navigate("/")
    }else{
        console.log("Product page");
    }

    const sendComment = async () => {
        try {
            let commentData = {
                text: comment,
                bookId: activeBook[0],
            };

            let response = await fetch("https://blog-api-t6u0.onrender.com/posts/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(commentData),
            });
            console.log(response);
            renderComments()
        } catch (err) {
            console.log(err);
        }
    };

    let renderComments = async () => {
        try{
            let response = await fetch("https://blog-api-t6u0.onrender.com/posts/", {
                method: "GET",
            });
            let data = await response.json()
            setComments(data)
        }catch (err) {
            console.log(err);
        }
    }

    let renderComment = () => {
        let commentsData = comments.filter((item) => item.bookId == activeBook[0])
        return commentsData.map((item) => (
            <CommentItem>
                <Title>
                    anonim
                </Title>
                <Text>
                    {
                        item.text
                    }
                </Text>
            </CommentItem>
        ))
    }

    useEffect(() => {
        renderComments()
    }, [])
    
    return (
        <Wrapper>
            <Left>
                <BackButton onClick={() => navigate("/")}>
                    Back
                </BackButton>

                <Name>
                    {
                        activeBook[1]?.name
                    }
                </Name>

                <Author>
                    {
                        activeBook[1]?.author
                    }
                </Author>

                <Description>
                    {
                        activeBook[1]?.description
                    }
                </Description>

                <AnonimCommentForm>
                    <CommentInput 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                        placeholder='your anonim comment...' 
                    />
                    <SendButton onClick={sendComment}>
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2416_3382)">
                                <path d="M3.06707 24.9259L28.038 14.3704L3.06707 3.81482L3.05518 12.0247L20.9 14.3704L3.05518 16.7161L3.06707 24.9259Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2416_3382">
                                    <path d="M0.675781 5.29627C0.675781 2.53484 2.91436 0.296265 5.67578 0.296265H24.2276C26.989 0.296265 29.2276 2.53484 29.2276 5.29626V23.4444C29.2276 26.2058 26.989 28.4444 24.2276 28.4444H5.67578C2.91435 28.4444 0.675781 26.2058 0.675781 23.4444V5.29627Z" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </SendButton>
                </AnonimCommentForm>

                <Comments>
                    {
                        renderComment()
                    }
                </Comments>
            </Left>

            <Right>
                <Image src={activeBook[1]?.imageUrl} />
            </Right>
        </Wrapper>
    )
}

export default ProductPage

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 100px 250px;
`

const Left = styled.div`
    
`

const Author = styled.p`
    color: #241400;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 196.187%; 
`

const Name = styled.p`
    color: #241400;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 196.187%; 
`

const Right = styled.div`
    
`

const Image = styled.img`
    width: 379px;
    height: 500px;
`

const Description = styled.p`
    max-width: 700px;
    color: #241400;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 196.187%; 
`

const BackButton = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100px;
    height: 29px;
    background: #E16A00;
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 900;
    line-height: 196.187%; 
    text-transform: uppercase;
    cursor: pointer;
`

const AnonimCommentForm = styled.div`
    display: flex;
    margin-top: 10px;
`

const CommentInput = styled.input`
    max-width: 500px;
    width: 100%;
    padding: 0px 20px;
    color: #232323;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 1px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    outline: none;
    border: 0;
    height: 60px;

    &::placeholder{
        color: #232323;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 1px;
    }
`

const SendButton = styled.button`
    border-radius: 5px;
    width: 70px;
    height: 60px;
    border: 0;
    background: #E16A00;
    cursor: pointer;
`

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
`

const CommentItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 30px 18px;
`

const Text = styled.p`
    color: #232323;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const Title = styled.p`
    color: #232323;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`