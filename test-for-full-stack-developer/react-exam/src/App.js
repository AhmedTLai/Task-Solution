import { useState } from "react";
import Circle from "./shapes/Circle";
import Rectangle from "./shapes/Rectangle";
import Triangle from "./shapes/Triangle";

function App() {
  const [inpVal , setInpVal] = useState(
    {
      width : 200,
      height : 100,
      sideLength : 100,
      radius : 50
    })
    console.log(inpVal)
  const inpHundler = (e)=>{
    
    setInpVal(prev =>({...prev,[e.target.name] : e.target.value}))
    console.log(inpVal)
  }

  return (
    <div style={{ background: "white", display: "flex", columnGap: "1rem"}}>



      <div>
        <Rectangle width={inpVal?.width} height={inpVal?.height} />
        <br/>
        <div>
       50 <input type="range" value={inpVal.width}  min={50} max={130} name="width" step={10} onChange={inpHundler}/> 130
       <br/>
       50<input type="range" value={inpVal.height}  min={50} max={130} name="height" step={10} onChange={inpHundler}/> 130
        <br/>
       <p>width : {inpVal?.width}</p>
       <p>height : {inpVal?.height}</p>
        </div>
      </div>


      <div>
        <Triangle sideLength={inpVal?.sideLength} />
        <br/>
        <div>
       100 <input type="range" value={inpVal?.sideLength}  min={100} max={120} name="sideLength" step={10} onChange={inpHundler}/> 120
        <br/>
       <p>sideLength : {inpVal?.sideLength}</p>

        </div>
      </div>


      <div>
      <Circle radius={inpVal?.radius} /> 
        <br/>
        <div>
       40 <input type="range" value={inpVal?.radius}  min={40} max={60} name="radius" step={10} onChange={inpHundler}/> 60
        <br/>
       <p>Radius : {inpVal?.radius}</p>
        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
