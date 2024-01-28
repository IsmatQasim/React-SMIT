const Button = (props) =>{
    console.log(props); //empty object
    const handleClick = () =>{
        alert("Handle Click");
    }
    return (
    <>
         <button onClick={handleClick}>Click Me</button> 

    </>
         )
    
}
export default Button