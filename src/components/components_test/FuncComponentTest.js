import React from 'react';

export default function FuncComponentTest(props) {
  
  let handleTestClick = function(e) {
    console.log(e.target);
  }

  return (
    <div>
      <p>这是函数式组件</p>
      <p>{ props.name }</p>

      <div onClick={ handleTestClick }>测试点击</div>
    </div>
  )
}