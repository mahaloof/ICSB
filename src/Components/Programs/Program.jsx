import React from 'react'
import './Program.css'
import Program_1 from '../../assets/program-1.png'
import Program_2 from '../../assets/program-2.png'
import Program_3 from '../../assets/program-3.png'
import Program_icon_1 from '../../assets/program-icon-1.png'
import Program_icon_2 from '../../assets/program-icon-2.png'
import Program_icon_3 from '../../assets/program-icon-3.png'
import { Link } from "react-router-dom";
const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={Program_1} alt=""/>
            <div className="caption">
                <img src={Program_icon_1} alt=''/>
                <Link to="/event"><p>EVENTS</p></Link>
            </div>
        </div>
        <div className='program'>
            <img src={Program_2} alt=""/>
            <div className="caption">
                <img src={Program_icon_2} alt=''/>
                <p>BLOG</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program_3} alt=""/>
            <div className="caption">
                <img src={Program_icon_3} alt=''/>
                <p>TEAMS</p>
            </div>
        </div>
    </div>
  )
}

export default Program