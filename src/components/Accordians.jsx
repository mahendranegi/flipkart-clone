import React, { useState } from 'react'
 import { Collapse } from 'antd';
function Accordians({valueOne,valueTwo,valueThree,titleText}) {
      const items = [
  {
    key: '1',
    label: titleText,
    children: <div className='leftPannelSec'>
     {valueOne && <div>{valueOne} </div>}
      {valueTwo && <div>{valueTwo}</div>}
     {valueThree && <div>{valueThree}</div>}
    </div>,
  },
  
];
  return (
    <div>
         <Collapse items={items} defaultActiveKey={['1']}  />
    </div>
  )
}

export default Accordians