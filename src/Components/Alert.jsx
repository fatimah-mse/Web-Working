
import Swal from 'sweetalert2'

export default function Alert() {
    Swal.fire({
        title: "مرحباً بك في تجربتي البسيطة لشرح كيف يعمل الويب، هل أنتَ مُستعد لبداية رحلة مشوقة؟ هيّا لننطلق",
        showCancelButton: true,
        cancelButtonText: 'كلّا',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، أنا مستعد!"
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/Web-Working/main"
        }
    });
}
