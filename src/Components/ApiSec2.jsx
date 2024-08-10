import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const sec =[
    {
        name: 'URL (Uniform Resource Locator)',
        txt1: 'يُحدد  الـ URL  مُوقع  المورد  على  الخادم.',
        txt2: 'مثال:  https://api.example.com/products'
    },
    {
        name: 'Header',
        txt1: 'يُستخدم  الـ Header  لإرسال  معلومات  إضافية  عن  الطلب  نفسه  و  عن  المُرسل.',
        txt2: 'يحتوي  الـ Header  على  معلومات  مثل:',
        txt3: ' *  نوع  الطلب  (GET, POST, PUT, DELETE,  ...)',
        txt4: '*  نوع  المحتوى  (Content-Type)',
        txt5: ' *  اللغة  (Accept-Language)',
        txt6: '*  التاريخ  (Date)',
        txt7: ' *  التصريح  (Authorization)'
    },
    {
        name: 'Method',
        txt1: 'يُحدد  الـ Method  نوع  العملية  التي  يريد  المُرسل  إجراؤها  على  المورد.',
        txt2: 'أنواعه:',
        txt3: '*  GET:  للحصول  على  معلومات  من  الخادم.',
        txt4: '*  POST:  لإرسال  بيانات  جديدة  إلى  الخادم.',
        txt5: '*  PUT:  لتحديث  بيانات  موجودة  على  الخادم.',
        txt6: '*  DELETE:  لحذف  بيانات  من  الخادم.'
    },
    {
        name: 'Body',
        txt1: 'يُستخدم  الـ Body  لإرسال  البيانات  إلى  الخادم  في  طلبات  مثل  POST  و  PUT.',
        txt2: 'يحتوي  الـ Body  على  البيانات  التي  يريد  المُرسل  إرسالها  إلى  الخادم  (مثل  بيانات  النموذج  أو  بيانات  الملف).',
        txt3: 'تُستخدم  بيانات  الـ Body  في  معالجة  الطلب  على  الخادم  و  تُخزن  في  قاعدة  البيانات  في  حالة  طلب  POST  أو  PUT.',
    }

]

export default function ApiSec2() {
  return (
    <section className='mb-0 py-3'>
        <Container>
            <h3 className='my-3 text-primary'>💛 أقسامهُ:</h3>
            <Row>
                {sec.map((e,index) => {
                    return (
                        <Col key={index} lg={3} md={6} sm={12} className='my-3'>
                            <Card className='FM-card px-3 py-2 border-none rounded shadow'>
                                <h3 className='my-3 text-primary text-center'>{e.name}</h3>
                                <p>{e.txt1}</p>
                                <p>{e.txt2}</p>
                                <p>{e.txt3}</p>
                                <p>{e.txt4}</p>
                                <p>{e.txt5}</p>
                                <p>{e.txt6}</p>
                                <p>{e.txt7}</p>
                            </Card>
                        </Col>
                    )
                })}
                
            </Row>
        </Container>
        
        
      
    </section>
  )
}
