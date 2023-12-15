const removeTag = (str = "") => { 
    if ((str===null) || (str==='')) 
        return ""; 
    else{
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '')
    }
} 
export default removeTag