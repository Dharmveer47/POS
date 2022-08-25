import React from 'react'
import "../Styles/buttons.scss"
export const Button = ({bName=""}) => {
  return (
    <>

    <button className='button__pos'>{bName}</button>
    </>
  )
}
