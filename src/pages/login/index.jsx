/* eslint-disable react-hooks/rules-of-hooks */
import { HeadTitle , Button , Input } from '../../components/Static/imports'
import { WhiteLogo } from '../../components/Icons/imports'
import useValidation from '../../hooks/Regex/checkRegex'
import { ToastContainer, toast } from 'react-toastify'
import Router from '../../constants/routes/index'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

const initialValue = {
    email: '',
    password: '',
}

const staticData = {
    email: 'admin@gmail.com',
    password: 'admin'
}

const Login = () => {
    const [formData, setFormData] = useState(initialValue);
    const navigate = useNavigate()

    const handleInput = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const callBackFunction = () => {
        let response = useValidation(formData.email)

        if(response && (staticData.email === formData.email) && (staticData.password === formData.password)) {
            localStorage.setItem("userData",JSON.stringify(formData))
            toast.success("Doğru Şifrə və Parola");
            setTimeout(() => {
                navigate(Router.admin)
            }, 2000);
        }else {
            toast.error("Email və ya Şifrə Yanlışdi");
        }
    }

    return (
      <Wrapper>
          <ToastContainer />

          <Top>
              <WhiteLogo />
          </Top>

          <Bottom>
              <Form>
                  <HeadTitle 
                    size={44} 
                    weight={700} 
                    color={"#333"}
                    title={"Welcome Admin"} 
                  />

                  <InputGroup>
                      <Input 
                          type={"text"} 
                          name={"email"} 
                          placeholder={"Email"} 
                          padding={"18px 40px 18px 40px"}
                          value={formData.email} 
                          onInputChange={handleInput} 
                      />

                      <Input  
                          type={"password"} 
                          name={"password"} 
                          placeholder={"Password"} 
                          padding={"18px 40px 18px 40px"}
                          value={formData.password} 
                          onInputChange={handleInput} 
                      />
                  </InputGroup>

                  <ButtonGroup>
                        <Button 
                            weight={700}
                            title={"Login"} 
                            padding={"12px 0px 12px 0px"}
                            callBackFunction={callBackFunction} 
                        />
                  </ButtonGroup>
              </Form>
          </Bottom>
      </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #720418;
    padding: 50px 35px;
`

const Top = styled.div``

const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Form = styled.div`
    width: fit-content;
    padding: 34px 54px 34px 54px;
    background: #FFF;
`

const InputGroup = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ButtonGroup = styled.div`
    margin-top: 40px;
`