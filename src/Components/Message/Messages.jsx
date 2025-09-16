import React, { useRef } from 'react'
import './Messages.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import  icon_1 from'../../assets/icons-1.png'
import  icon_2 from'../../assets/icons-2.png'
import  icon_3 from'../../assets/icons-3.png'
const Messages = () => {

    const slider = useRef();
    let tx = 0;
        const slideForward = ()=>{
          if(tx > -50){
            tx -= 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`
        }
        const slideBackward = ()=>{
          if(tx < 0){
            tx += 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`
        }

  return ( 
    <div className='message' id='messages'>
      <img src={next_icon}alt="" className='next-btn' onClick=
      {slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick=
      {slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_1} alt="" />
                <div>
                  <h3>DR. SHAMNA N.V</h3>
                  <span>Heaf of the Department</span>
                </div>
              </div>
              <p>“ICSB is more than a specialization – it is a movement towards shaping engineers who are innovators, problem-solvers, and ethical leaders of tomorrow.” </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_2} alt="" />
                <div>
                  <h3>PROF. AFEEFA NAZNEEN N.Z</h3>
                  <span>Faculty</span>
                </div>
              </div>
              <p>“We believe in empowering students with practical skills and research-driven learning to prepare them for global opportunities.”
       </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_3} alt="" />
                <div>
                  <h3>PROF.AYSHA THOFA</h3>
                  <span>Faculty</span>
                </div>
              </div>
              <p>“Our department stands for inclusivity, creativity, and excellence. Together, we build a community that thrives on innovation.”
                  </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_1} alt="" />
                <div>
                  <h3>Ms.MEGHASHREE</h3>
                  <span>Faculty</span>
                </div>
              </div>
              <p>At ICSB, we believe in learning by doing. Our goal is to create problem-solvers who can adapt, innovate, and lead in a fast-changing digital world.”
        </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Messages
