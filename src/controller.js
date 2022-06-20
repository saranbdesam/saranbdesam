exports.errorformat=(error)=>{
    console.log(error);
    if(error.details){
        return error.details.message;
    } 
}