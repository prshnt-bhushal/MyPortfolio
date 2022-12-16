import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className='footerContainer'>
        <p>Thank You for your Visit</p>
        <span>Connect with me on</span>
        <div className='social-media'>
            <a target='_blank' href="https://www.linkedin.com/in/prashant-bhushal-a1154923b/" class="social-icon">
                <i class="fab fa-linkedin"></i>
            </a>
            <a target='_blank' href="mailto:prshnt.bhushal@gmail.com" class="social-icon">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <a target='_blank' href="https://www.facebook.com/sushant.bhusal.50/" class="social-icon">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a target='_blank' href="https://www.instagram.com/__prshnt__/" class="social-icon">
                <i class="fab fa-instagram"></i>
            </a>
            <a target='_blank' href="https://github.com/prshnt-bhushal" class="social-icon">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
  )
}

export default footer