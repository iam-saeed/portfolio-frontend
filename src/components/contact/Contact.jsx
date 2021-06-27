import React, { useState } from 'react'
import './contact.scss'
export default function Contact() {
    const [message, setMessage] = useState(false)
    // const [value, setValue] = useState('')
    const [change, setChange] = useState({
        email: '',
        message: ''
    })

    const onChange = (e) => {
        setChange({
            ...change,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>C O N T A C T</h2>
                <form onSubmit={handleSubmit} >
                    <input type="email" placeholder="Email" onChange={onChange} name="email" git />
                    <textarea placeholder="Message" onChange={onChange} name="message" > </textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for connecting, I'll be in touch within 24-48 business hours.</span>}
                </form>
            </div>
        </div>
    )
}
