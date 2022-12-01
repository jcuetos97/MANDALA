
import React  from 'react';
import Slider from '@mui/material/Slider';
  
const PriceRange = ({range, rangeSelector, filterHide}) => {
  const numFor = Intl.NumberFormat("en-US");
  return (
    <div className={filterHide === "hidden" ? "hide" : ""}>
      <Slider
        value={range}
        onChange={rangeSelector}
        step={5000}
        min={0} 
        max={150000}
      />
    ${numFor.format(range[0])} | ${numFor.format(range[1])} 
    </div>
  );
}
  
export default PriceRange;