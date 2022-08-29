import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Button } from '../../Button';
const PosNavigation = () => {
  return (
    <div>
        <div className="pos__logo">
            <h1 className="pos__icon">WELCOME</h1>
            <h2 className="pos__username">Biller 1</h2>
        </div>
        <div className="pos__date_area">
            <div className="pos__clock">07:11:35 PM</div>
            <div className="pos__current_date">Monday, 29 August 2022</div>
        </div>
        <div className="pos__right_sidebar">
            <div className="pos__input_select_warehouse">
                <input type="text" />
                <RiArrowDropDownLine />
            </div>
            <Button bName='Dashboard' />
        </div>
    </div>
  )
}

export default PosNavigation;