/* eslint-disable react-hooks/exhaustive-deps */
import { Sidebar , HeadTitle , SearchBook, AlertTitle , TableInput , TableLabel  , TableAddButton , TableHead , TableBody } from '../../components/Static/imports'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { addbook , deleteBook } from '../../service/index'
import { ToastContainer, toast } from 'react-toastify';
import { removeTag } from '../../utils/imports'
import { ref , onValue } from "firebase/database";
import { database } from '../../helper/firebase/index'

const bookInitialValue = {
  name: '',
  type: '',
  author: '',
  imageUrl: '',
  description: '',
}

const Admin = () => {
    const navigate = useNavigate()
    const userInfo = localStorage.getItem("userData")
    const [formData, setFormData] = useState(bookInitialValue);
    const activeBook = useSelector((state) => state.searchBook.activeSearchBook)
    const [isLoading,setIsLoading] = useState(false)
    const [books,setBooks] = useState([])

    useEffect(() => {
      if (userInfo) {
        setFormData((prevData) => ({
          ...prevData,
          name: activeBook?.title || '',
          author: activeBook?.authors || '',
          imageUrl: activeBook?.imageLinks?.thumbnail || '',
          description: removeTag(activeBook?.description) || '',
          type: activeBook?.printType || '',
        }));
      } else {
        navigate("/login");
      }
    }, [userInfo, activeBook]);

    const handleInput = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const addBook = () => {
        if(formData.name == '' || formData.type == '' || formData.author[0] == '' || formData.imageUrl == '' || formData.description == ''){
          toast.error("Formu Doldurun")
        }else{
          addbook(formData,"books") 
          toast.success("Kitab əlavə Olundu")
        }
    }

    const renderBooks = () => {
      try {
          setIsLoading(true)
          const column = ref(database, 'books');
          onValue(column, (snapshot) => {
              const data = snapshot?.val();
              if(data){
                const dataToArr = Object.entries(data)
                setBooks(dataToArr)
              }else{
                setBooks([])
              }
          })
      } catch (err) {
          console.error(err);
      } finally{
          setIsLoading(false)
      }
    };

    const deleteFunction = (id) => {
       deleteBook(id)
    }

    useEffect(() => {
      renderBooks();
    }, [formData]);

    return (
      <Wrapper>
          <ToastContainer />

          <Left>
            <Sidebar />
          </Left>

          <Right>
            <HeadTitle 
                size={30} 
                weight={600} 
                color={"#333"}
                title={"Add book"} 
            />

            <SearchBook />

            <BookFormContainer>
                <AlertTitle 
                    size={18}
                    weight={600}
                    title={"Book form"} 
                />

                <Form>
                    <TableItem>
                      <TableLabel 
                        id={"book_name"} 
                        title={"Book Name"} 
                      />     

                      <TableInput 
                          type={"text"} 
                          id={"book_name"}
                          name={"name"} 
                          placeholder={"Angels"} 
                          value={formData.name ? formData.name : activeBook?.title} 
                          onInputChange={handleInput} 
                      />         
                    </TableItem>     

                    <TableItem>
                      <TableLabel 
                        id={"author_name"} 
                        title={"Author Name"} 
                      />     

                      <TableInput 
                          type={"text"} 
                          id={"author_name"}
                          name={"author"} 
                          placeholder={"Dan Brown"} 
                          value={formData.author ? formData.author : activeBook.authors} 
                          onInputChange={handleInput} 
                      />         
                    </TableItem>     

                    <TableItem>
                      <TableLabel 
                        id={"book_url"} 
                        title={"Book Image Url"} 
                      />     

                      <TableInput 
                          type={"text"} 
                          id={"book_url"}
                          name={"imageUrl"} 
                          placeholder={"Angels"} 
                          value={formData.imageUrl ? formData.imageUrl : activeBook?.imageLinks?.thumbnail} 
                          onInputChange={handleInput} 
                      />         
                    </TableItem>     

                    <TableItem>
                      <TableLabel 
                        id={"desc"} 
                        title={"Description"} 
                      />     

                      <TableInput 
                          type={"text"} 
                          id={"desc"}
                          name={"description"} 
                          placeholder={"Lorem Ipsum Dolor sit Amet"} 
                          value={formData.description ? formData.description : removeTag(activeBook?.description)} 
                          onInputChange={handleInput} 
                      />         
                    </TableItem>     

                    <TableItem>
                      <TableLabel 
                        id={"Book Type"} 
                        title={"Book Type"} 
                      />     

                      <TableInput 
                          type={"text"} 
                          id={"Book Type"}
                          name={"type"} 
                          placeholder={"Fantastic"} 
                          value={formData.type ? formData.type :  activeBook.printType} 
                          onInputChange={handleInput} 
                      />         
                    </TableItem>   

                    <TableAddButton 
                        title={"Add"}
                        addBook={addBook} 
                    />
                </Form>
            </BookFormContainer>

            <BookTable>
                <TableHead 
                    list={["#","Title","Description","Category","Author","Delete"]} 
                />

                <TableBody
                    data={books} 
                    deleteFunction={deleteFunction}
                    isLoading={isLoading} 
                />
            </BookTable>
          </Right>
      </Wrapper>
    )
}

export default Admin

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const Left = styled.div`
    width: 20%;
`

const Right = styled.div`
    width: 80%;
    height: 100%;
    padding: 100px 33px;
    display: flex;
    flex-direction: column;
    gap: 36px;
`

const BookFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Form = styled.div`
    padding: 16px 30px;
    border-radius: 20px;
`

const TableItem = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;
` 

const BookTable = styled.table`
    max-width: 100%;
    width: 100%;
    border-collapse: collapse;
`