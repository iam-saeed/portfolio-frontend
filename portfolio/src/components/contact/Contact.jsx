import axios from 'axios'
import React, { useState } from 'react'
import './contact.scss'

export default function Contact() {
    const [message, setMessage] = useState(false)
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
        const newMessage = { email: change.email, message: change.message }
        axios.post("https://reqres.in/api/users", newMessage)
        .then(res => {
            setChange({ email: '', message: '' })
        })
        .catch(error => {
            setChange({ email: '', message: '' })
        })
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
                    <input type="email" placeholder="Email" onChange={onChange} name="email" value={change.email}/>
                    <textarea placeholder="Message" onChange={onChange} name="message" value={change.message}> </textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for connecting, I'll be in touch within 24-48 business hours.</span>}
                </form>
            </div>
        </div>
    )
}
