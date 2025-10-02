function CustomButton({text ,className}){
    console.log(text,className,"text")
return(
    <button className={className}>{text} </button>
)    
}

export default CustomButton;