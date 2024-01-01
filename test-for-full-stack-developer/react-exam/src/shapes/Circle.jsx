import { useEffect, useState } from "react";
import randomColor from "randomcolor";

const Circle = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const {radius} = props;

  
  const calculatePerimeter = () => {
    return 2 * Math.PI * radius;
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
      }else{
        setColor(value)
      }
  }



  useEffect(()=>{
    if(isHovered){
        setColor(randomColor())
    }else {
      setColor(getColorByPerimeter(perimeter));
    }
},[isHovered,perimeter])



  return (
    <div>
      <div
        style={{
          height: `${2 * radius}px`,
          width: `${2 * radius}px`,
          borderRadius: "50%",
          backgroundColor:  color ,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter().toFixed(2)} px</p>
      <input value={inputValue} onChange={colorChangerHundler} />
    </div>
  );
};

export default Circle;
