import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

const follow = [
    {
        name: 'FaceBook',
        link: 'https://www.facebook.com/fatimah.mse.750983?mibextid=ZbWKwL'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/fatimah-mselmani/'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/fatimah-mse'
    },
]

const contact = [
    {
        name: 'Phone',
        link: 'tel: +963981944215'
    },
    {
        name: 'Email',
        link: 'mailto: fatimahmse83@gmail.com'
    },
    {
        name: 'Telegram',
        link: 'https://t.me/FatimahMse'
    },
]

export default function Footer() {
  return (
    <section className='FM-footer'>
        <Container className='py-3'>
            <Row>
                <Col lg={4} md={6} sm={12} className='my-3'>
                    <h3 className='mb-3 font-bold'>كيف يعمل الويب</h3>
                    <p>في موقعنا هذا نشرح لكم بشكل سهل وبسيط ومبسط لفهم كيفية عمل الويب من خلال أن يقوم المستخدم بالخطوات بنفسه ومعرفة ماذا يحدث في كل خطوة. بالإضافة إلى شرح كيفية التواصل واجهات المستخدم والسيرفر بشكل مفصل</p>
                </Col>
                <Col lg={4} md={6} sm={12} className='my-3'>
                    <h3 className='text-center'>تابعني</h3>
                    <div className='d-flex flex-column align-items-center'>
                        {follow.map((e, index) => {
                            return (
                                <a target='_blank' key={index} href={e.link}>{e.name}</a>
                            )
                        })}
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className='my-3'>
                    <h3 className='text-center'>للتواصل</h3>
                    <div className='d-flex flex-column align-items-center'>
                        {contact.map((e, index) => {
                            return (
                                <a target='_blank' key={index} href={e.link}>{e.name}</a>
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <h5 className='text-center'>copyright © 2024 By Fatimah Mselmani</h5>
        </Container>
      
    </section>
  )
}
