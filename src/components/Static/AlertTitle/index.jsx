/* eslint-disable react/prop-types */
const AlertTitle = ({ title , size , weight}) => {
  return (
    <>
        <p style={{fontSize: size,fontWeight: weight}}> 
            {
                title
            }
        </p>
    </>
  )
}

export default AlertTitle