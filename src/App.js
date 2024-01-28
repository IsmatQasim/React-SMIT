import Button from "./components/Button"
import MyFooter from "./components/Footer"
import MyHeader from "./components/Header"
import MyButton from "./components/MyButton"
import './index.css'

//data jab aik component se dusre comp bhejna ho tw hum props(properties) ke zariyee, prop by default hota he har func me
function App(){
    return(
        <div>
            {/* <MyHeader heading = {"My First Class Of React"}
            text= {`My dummy text with React`}
            num ={10}
            />  */}
            {/* it is like object with attribute */}
            {/* <h3>Hello World</h3>
            <MyFooter /> */}
            <MyButton text="Reset" />
            <MyButton text="Dec"/>
            <MyButton text="Inc" />
        </div>
    )
}
export default App