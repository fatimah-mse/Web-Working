import React from 'react'
import SectionComponent from './SectionComponent'
import { H3ArraySection2 } from '../data/URLarray'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import BrowserCashComponent from './BrowserCashComponent'
import Swal from 'sweetalert2'

export default function Section2() {
    const arr = JSON.parse(localStorage.getItem('URLarr')) || []
    const navigate = useNavigate()

    function req () {
        Swal.fire({
            title: 'تحويل الطلب إلى DNS' ,
            showCancelButton: true,
            cancelButtonText: 'تراجع',
            cancelButtonColor: "#d33",
            confirmButtonColor: "#3085d6",
            confirmButtonText: 'إرسال الطلب'
            }).then((result) => {
            if (result.isConfirmed) {
                navigate("/DNS")
            }
        });
    }

  return (
    <section id='FM-section-2'>
        <Container className='py-3'>
            <Row className='mb-3'>
                <SectionComponent array={H3ArraySection2} image={'./search.gif'} />
            </Row>
            <div>
                <h2 className='border-top py-3 text-primary text-center text-md-start'>Browser Cashe</h2>
                <div className='d-flex justify-content-end pb-4 border-bottom flex-wrap my-3'>
                    {arr.map((e ,index) => {
                        return (
                            <BrowserCashComponent key={index} url={e.url} />
                        )
                    })}
                </div>

                <button onClick={req} className='btn btn-danger rounded shadow py-2 px-4 mt-3 fs-5 my-3'>ليس موجوداً</button>
                
            </div>
        </Container>
      
    </section>
  )
}
