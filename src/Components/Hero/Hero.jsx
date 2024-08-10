import React from 'react'
import './Hero.css'

export default function Hero({image, firstSec, cla}) {
  return (
    <>
    <section className='FM-Hero'>
      <img src={image}/>
      <a href={firstSec} className={`${cla} btn btn-warning fs-3 px-5`}>هيّا نبدأ</a>
    </section>
    </>
  )
}
