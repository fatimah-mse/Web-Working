import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SectionComponent from './SectionComponent'
import { H3ArraySection5 } from '../data/URLarray'
import Swal from 'sweetalert2'

export default function Section5() {

  function done () {
    Swal.fire({
        title: 'إظهار الاستجابة للمستخدم، إما نجاح أو فشل' ,
        showCancelButton: true,
        cancelButtonText: 'تراجع',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: 'إظهار'
        }).then((result) => {
        if (result.isConfirmed) {
          const newUrl = localStorage.getItem('urlkey')
          if (newUrl && newUrl.trim().length > 0) {
            const cleanedUrl = newUrl.replace(/^"|"$/g, '')
            window.location.href = cleanedUrl
          } 
        }
    })
  }

  return (
    <section className='FM-section-5'>
        <Container className='py-3'>
            <Row className='mb-3'>
                <SectionComponent array={H3ArraySection5} image={'./response.gif'} />
            </Row>
            <div className='text-center my-3'>
                <button onClick={done} className='btn btn-danger rounded shadow py-2 px-4 mt-3 fs-5'>إتمام عملية Respone</button>
            </div>
        </Container>
      
    </section>
  )
}
