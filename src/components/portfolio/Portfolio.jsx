import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {WEB, MOBILE, featuredPortfolio} from '../../data'


export default function Portfolio() {
    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])
    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web Development'
        },
        {
            id: 'mobile',
            title: 'Mobile Development'
        }
    ]

    useEffect(() => {
        
        switch(selected){
            case 'featured': 
            setData(featuredPortfolio);
            break;
            case 'web': 
            setData(WEB);
            break;
            case 'mobile': 
            setData(MOBILE);
            break;
            default:
                setData(featuredPortfolio)
        }

    }, [selected])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                <div className="item">
                <img src={d.img} alt=''/>
                <h3>{d.title}</h3>
                    </div>
                ))}
                {data.map(p => (
                    <p>{p.des}</p>
                ))}
            </div>
        </div>
    )
}
