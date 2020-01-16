import React from 'react';



export const Form = () => {
    return (
        <div>
            <h3>Get in touch with us</h3>
            <p>We love to listen and we are eagerly waiting to talk to you regarding your project.</p>
            <div>
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
            </div>
            <form>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type='text' placeholder='Subject' />
                <input type='textfield' placeholder='Message'/>
            </form>
            <button
                className='btn-large'
            >Submit</button>
        </div>
    )
}