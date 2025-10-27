// eslint-disable-next-line no-unused-vars
import react,{useState} from "react";
function App(){
    const[weight,setWeight]=useState("");
    const[height,setHeight]=useState("");
    const[bmi,setBmi]=useState(null);

    const calculateBmi=()=>{
      const h=height/100;
      const r=(weight/(h*h)).toFixed(2);
      setBmi(r);
    }
    return(
      <div>
        <input type="number" placeholder="enter weight kg" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        <input type="number" placeholder="enter height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        <button onClick={calculateBmi}>Calculate</button>
        <h2>Your BMI is {bmi}</h2>
      </div>
    )
}
export default App;