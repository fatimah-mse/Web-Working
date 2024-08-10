import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SectionComponent from './SectionComponent'
import { H3ArraySection4 } from '../data/URLarray'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Section4() {

    const navigate = useNavigate()

    function save () {
        const storedArr = JSON.parse(localStorage.getItem('URLarr') || '[]');
        const newUrl = { url: localStorage.getItem('urlkey') };
        if (storedArr.length > 0) {
            storedArr.push(newUrl);
        } else {
            Swal.fire("Sorry, No Results!");
        }
        localStorage.setItem('URLarr', JSON.stringify(storedArr));
    }

    function respone () {
        Swal.fire({
            title: 'تشمل الاستجابة:  البيانات المطلوبة،  إعادة التوجيه إلى صفحة أخرى ، أو رسالة خطأ' ,
            showCancelButton: true,
            cancelButtonText: 'تراجع',
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: 'استكمال'
            }).then((result) => {
            if (result.isConfirmed) {
                navigate("/response")
            }
        });
    }

    return (
        <section id='FM-section-4'>
            <Container className='py-3'>
                <Row className='mb-3'>
                    <SectionComponent array={H3ArraySection4} image={'./server.gif'} />
                </Row>
                <div className='text-center my-3'>
                  <button onClick={save} className='btn btn-success rounded shadow py-2 px-4 mt-3 ms-4 fs-5'>حفظ في Browser Cashe</button>
                  <button onClick={respone} className='btn btn-danger rounded shadow py-2 px-4 mt-3 fs-5'>معالجة وإرسال استجابة</button>
                </div>
            </Container>
          
        </section>
      )
}
