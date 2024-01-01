import { useEffect, useState } from 'react';
import randomColor from 'randomcolor';

const Rectangle = (props) => {
  const { width, height } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState('');

  const calculatePerimeter = () => {
    return width * 2 + height * 2;
  };

  const getColorByPerimeter = (perimeter) => {
    if (perimeter <= 300) return 'lightblue';
    if (perimeter <= 350) return 'blue';
    if (perimeter <= 750) return 'red';
    return 'darkblue';
  };

  const perimeter = calculatePerimeter();

  const colorChangeHandler = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
    if (value) {
      setColor(value);
    }
  };

  useEffect(() => {
    if (isHovered) {
      setColor(randomColor());
    } else {
      setColor(getColorByPerimeter(perimeter));
    }
  }, [isHovered, perimeter]);

  useEffect(() => {
    setColor(getColorByPerimeter(perimeter));
  }, [width, height,perimeter]);

  return (
    <div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: isHovered || color ? color : getColorByPerimeter(perimeter),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {perimeter} px</p>
      <input value={inputValue} onChange={colorChangeHandler} />
    </div>
  );
};

export default Rectangle;
