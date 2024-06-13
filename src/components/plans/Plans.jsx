import React from 'react'
import './plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container' id='plan'>
        <div className='blur plans-blur1'></div>
        <div className='blur plans-blur2'></div>
        <div className='programs-header plan-header' style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        <div className='plans'>
            {plansData.map((plan,i)=>(
                <div className='plan' key={i}>
                    {plan.icon}
                    <span className='plan-name'>{plan.name}</span>
                    <span className='plan-price'>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature,i)=>(
                            <div className='feature'>
                                <img src={whiteTick} alt='' />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className='plan-benefits'>See more benefits -{'>'}</span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
