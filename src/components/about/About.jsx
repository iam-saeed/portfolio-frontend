import React from 'react'
import './about.scss'

export default function About() {
    const data = [
        {
            id: 1,
            name: "Alexis Smith",
            title: "CEO of Smith Properties LLC",
            img: "assets/woman.png",
            icon: "assets/linkedin.png",
            desc: '"Saeed went above and beyond to provide a quality redesign of our website to help with our SEO. I would recommend his services to anyone that is needing any type of assistance in the digital space."',
            featured: false
        },
        {
            id: 2,
            name: "Thomas Durden",
            title: "Senior Developer",
            img: "assets/thomas.png",
            icon: "assets/linkedin.png",
            desc: '"I absoultely loved working with Saeed. He is incredibly flexible, and is willing to put in the hours to deliver a quality product. He just gets it!"',
            featured: true
        },
        {
            id: 3,
            name: "Samuel Carter",
            title: "CEO of Restoration Plumbing LLC",
            img: "assets/plumber.png",
            icon: "assets/linkedin.png",
            desc: '"We needed a way for our clients to pay online, and Saeed made that easy for us by seamlessly integrating a pay now button on our website."',
            featured: false
        }
    ]
    return (
        <div className='about' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (

                    <div className={d.featured  ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="img" />
                        <img src={d.icon} className="right" alt="icon" />
                    </div>
                    <div className="center">
                        <p>{d.desc}</p>
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    )
}
