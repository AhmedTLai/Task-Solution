import { useEffect, useState } from "react";
import randomColor from "randomcolor";

const Triangle = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const {sideLength} = props
  const calculatePerimeter = () => {
    return 3 * sideLength;
  };

  const getColorByPerimeter = (perimeter) => {
    if (perimeter <= 300) return "lightblue";
    if (perimeter <= 350) return "blue";
    if (perimeter <= 750) return "red";
    return "darkblue";
  };

  const perimeter = calculatePerimeter();
  const [color, setColor] = useState(getColorByPerimeter(perimeter));




  const colorChangerHundler = (e)=>{
    let value = e.target.value;
    setInputValue(value)
      if(value === ' '){
        setInputValue('')
      }
      else{
        setColor(value)
      }
  }


  useEffect(()=>{
    if(isHovered){
        setColor(randomColor())
    }else{
      setColor(getColorByPerimeter(perimeter))
    }
},[isHovered,perimeter])





  return (
    <div>
      <div
        style={{
          width: "0",
          height: "0",
          borderLeft: `${sideLength / 2}px solid transparent`,
          borderRight: `${sideLength / 2}px solid transparent`,
          borderBottom: `${sideLength}px solid ${isHovered || color ? color : getColorByPerimeter(perimeter)}`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter()} px</p>
      <input value={inputValue} onChange={colorChangerHundler} />
    </div>
  );
};

export default Triangle;
