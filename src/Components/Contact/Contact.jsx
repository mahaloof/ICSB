import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import adrs_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "120fe090-3e51-44cb-ab2c-8519d76ec7b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Requst Send Successfully");
      event.target.reset();

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Reach Out<br/>and Connect with Us </h3>
            <p>The Department of CSE (ICSB) is dedicated to providing excellent education and support to students. For any questions or information about our programs, please reach out to us via the contact form, and we’ll get back to you promptly..</p>
                <ul>
                    <li><img src={mail_icon} alt="" />CSEICSB@PACE.EDU.IN</li>
                    <li><img src={phone_icon} alt="" />12345678</li>
                    <li><img src={adrs_icon} alt="" />Nadupadav, Montepadav Post, Mangaluru, Karnataka 574153<br/> Ma 90990,india</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>YourName</label>
                <input type='text' name='name' placeholder='ENTER YOUR NAME' 
                required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='ENTER YOUR MOBILE NUMBER' 
                required/>
                <label>Email</label>
                <input type='MAIL' name='EMAIL' placeholder='ENTER YOUR EMAIL' 
                required/>
                <label>Write your Messages however</label>
                <textarea name='message' rows="6" placeholder='ENTER YOUR MESSAGE'
                required></textarea>
                <button type='submit' className='btn dark-btn'>SEND <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact