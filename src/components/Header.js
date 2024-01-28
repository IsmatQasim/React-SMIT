import Button from "./Button"


function MyHeader({heading, text, num}){ //destructing obj
    console.log(heading, text);
    return(
    <> {/* empty fragment beacause parent tag  & component ke andr b component b askta hen like*/}
    <h1>{heading}</h1>
    <p>{text}</p>
    <p>{num}</p>
    <Button />
    </>
        ) 
}
export default MyHeader //kisi bhi dusri file me call hoskta he