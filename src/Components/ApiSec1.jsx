import React from 'react'
import { Container } from 'react-bootstrap'

export default function ApiSec1() {
  return (
    <section className='api-sec-1 mb-0 py-3'>
        <Container>
            <h2 className='my-3 text-primary'>💛 ماهو API (Application Programming Interface)؟</h2>
            <p className='fs-5'>هو واجهة برمجة تطبيقات،  وهو مجموعة من القواعد والروتينات التي تُمكن  تطبيقات  البرامج  من  التواصل  مع  بعضها  البعض. </p>
            <p className='fs-5 text-danger'>(يتم التواصل بين الفرونت والباك عن طريقه)</p>
            <h2 className='my-3 text-primary'>💛 فوائد استخدامه:</h2>
            <p className='fs-5'>🔹 التكامل  بين  التطبيقات:  يُمكن   API  من  ربط  التطبيقات  مُختلفة  مع  بعضها  البعض.</p>
            <p className='fs-5'>🔹 زيادة  كفاءة  التطوير:  يُمكن   API  من  إعادة  استخدام  الرموز  و  البيانات  و  الخدمات  مُختلفة  في  تطبيقات  مُختلفة.</p>
            <p className='fs-5'>🔹 تحسين  تجربة  المستخدم:  يُمكن   API  من  تقديم  مزيد  من  المُيزات  و  الخدمات  للمستخدمين.</p>
        </Container>
    </section>
  )
}
