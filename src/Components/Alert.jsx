import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function Alert() {
    
    const navigate = useNavigate()

    Swal.fire({
        title: "مرحباً بك في تجربتي البسيطة لشرح كيف يعمل الويب، هل أنتَ مُستعد لبداية رحلة مشوقة؟ هيّا لننطلق",
        showCancelButton: true,
        cancelButtonText: 'كلّا',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، أنا مستعد!"
        }).then((result) => {
        if (result.isConfirmed) {
            navigate("/main")
        }
    });
}
