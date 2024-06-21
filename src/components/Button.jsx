import React from 'react'

const Button = ({styles, laman, onClick}) => {
  return (
    <button type='button' className={`${styles} py-3 px-5 bg-secondary font-[Quicksand] 
    font-bold text-[16px] rounded-full text-white hover:bg-dimBlue 
    hover:text-black `} onClick={onClick}>
      {laman}
    </button>
  )
}

export default Button