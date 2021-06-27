import React, {useState} from 'react'
import './services.scss'

export default function Services() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [      
    {
        id: 1,
        icon: 'assets/mobile.png',
        title: 'Web Design & Development',
        desc: 'I provide value, and innovative expertise in web design and development. I strive for excellence to curate a beautiful user experience.',
        img: 'assets/ColorPicker.png'
    },
    {
        id: 2,
        icon: 'assets/mobile.png',
        title: 'Mobile Design & Development',
        desc: 'Mobile design, and development done right. I build out innovative solutions, that create a great mobile users experience.',
        img: 'assets/ColorPicker.png'
    },
    {
        id: 3,
        icon: 'assets/mobile.png',
        title: 'Digital Marketing & Branding',
        desc: 'Search Engine Optimization, Pay Per Click, Brand Reputation, Email Marketing.',
        img: 'assets/ColorPicker.png'
    },
]

const handleClick = (way) => {
    way === "right" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
}
    return (
        <div className='works' id='services'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt='icon' />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg" alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow.png"  className="arrow right" alt="arrow" onClick={() => handleClick("left")}/>
            <img src="assets/arrow.png"  className="arrow left" alt="arrow" onClick={() => handleClick("right")} />
        </div>
    )
}
