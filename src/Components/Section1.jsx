import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import SectionComponent from './SectionComponent'
import { H3ArraySection1 } from '../data/URLarray'

export default function Section1() {

    const [urlValue, setUrlValue] = useState('')
    let [variable] = useState('')

    useEffect(() => {
        variable = urlValue
        localStorage.setItem('urlkey', JSON.stringify(variable))
      }, [urlValue])

    function setInputValue() {
        console.log(urlValue)
        if(!urlValue){
            Swal.fire({
                title: 'يجب عليك أن تدخل رابط URL أولاً',
                confirmButtonText: "حسناً!"
            })
        }
        else {
            Swal.fire({
                title: 'الخطوة الأولى تكون البحث في Browser Cashe',
                showCancelButton: true,
                cancelButtonText: 'تراجع',
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "المتابعة!"
                }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/Web-Working/cash'
                }
            })
        }
        
    }
   
  return (
    <section id='FM-section-1'>
        <Container className='py-3'>
            <Row>
                <SectionComponent array={H3ArraySection1} image={'./stick-man-walk.gif'} />
                <Col lg={12} md={12} sm={12} className='d-flex justify-content-center order-3 my-3'>
                    <input className='FM-input px-3 rounded' placeholder='الرابط' type="text" id="url" value={urlValue} onChange={(e) => setUrlValue(e.target.value)}/>
                    <button className='btn btn-primary fs-5 px-5 me-5' onClick={setInputValue}>إرسال</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
