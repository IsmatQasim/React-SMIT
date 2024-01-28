const Button = () =>{
    const handleClick = () =>{
        alert("Handle Click");
    }
    
    return  <button onClick={handleClick} >Click Me</button>
}
export default Button