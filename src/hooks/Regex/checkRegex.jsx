const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const useValidation = ( params ) => {
    let boolVal = emailPattern.test(params)
    return {boolVal}
};

export default useValidation;
