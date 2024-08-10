import React from 'react'
import { Col } from 'react-bootstrap'

export default function SectionComponent({array , image}) {
  return (
    <>
        <Col lg={6} md={12} sm={12} className='text-md-start text-center order-1 order-lg-2'>
            <img className='img-fluid' src={image} />
        </Col>
        <Col md={12} lg={6} sm={12} className='text-end text-primary py-3 order-2 order-lg-1'>
            {array.map((e, index) => {
                return (
                    <h3 key={index}>{e.txt}</h3>
                )
            })}
        </Col>
    </>
    
  )
}
