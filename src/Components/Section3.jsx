import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SectionComponent from './SectionComponent'
import { H3ArraySection3 } from '../data/URLarray'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Section3() {

  const navigate = useNavigate()

  function dns() {
    Swal.fire({
        title: 'الحصول على IP',
        showCancelButton: true,
        cancelButtonText: 'تراجع',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: 'طلب'
    }).then((result) => {
        if (result.isConfirmed) {
          navigate("/server")
        }
    });
}
  return (
    <section id='FM-section-3'>
        <Container className='py-3'>
            <Row className='mb-3'>
                <SectionComponent array={H3ArraySection3} image={'./stick-man-walk.gif'} />
            </Row>
            <div className='text-center my-3'>
              <button onClick={dns} className='btn btn-danger rounded shadow py-2 px-4 mt-3 fs-5'>طلب IP Address</button>
            </div>
        </Container>
      
    </section>
  )
}
