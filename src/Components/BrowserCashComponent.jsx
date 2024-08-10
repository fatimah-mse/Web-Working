import React from 'react'
import Swal from 'sweetalert2';



export default function BrowserCashComponent({url}) {

  function ResponseFunc () {
    Swal.fire({
      title: 'إذاً الرابط موجود فالموقع مُزار من قبل وليس هناك داعٍ لإكمال الخطوات',
      showCancelButton: true,
      cancelButtonText: 'إعادة التجربة',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'الحصول على استجابة وعرض الموقع'
      }).then((result) => {
      if (result.isConfirmed) {
          window.location.href = url
      }
      else {
        window.location.href = "/main"
      }
  });
  }

  return (
    <button onClick={ResponseFunc} className='btn btn-primary rounded shadow py-2 px-4 me-3 my-2'>{url}</button>
  )
}
