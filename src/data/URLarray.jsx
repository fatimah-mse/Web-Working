import { useEffect, useState } from "react"

export const H3ArraySection1 = [
    {
        txt: '💛 ' + 'في البداية... يذهب المستخدم إلى المتصفح ويقوم بإدخال رابط URL'
    },
    {
        txt: '💛 ' + 'هذه العملية تُسمَّى Request وتعني عملية طلب للحصول على موقع ما باستخدام URL الخاص به'
    },
    {
        txt: '💛 ' + 'ساعده من فضلك في كتابة الرابط في الحقل المخصص'
    },
    {
        txt: '💛 ' + 'يُرجى إدخال الرابط مثل: https://www.google.com'
    }
]
export const H3ArraySection2 = [
    {
        txt: '💛 ' + 'الآن يقوم المتصفح في البحث بالكاش الخاصة به "Browser Cashe" عن اسم الرابط و IP المقابل له (يعني إن كان طالب الموقع من قبل فهو محتفظ بـ الاسم و IP المطابق للرابط رح يجيبو من الكاش وإلا رح يبعت طلب للخادم)',
    },
    {
        txt: '💛 ' + 'ساعده من فضلك بالبحث في "Browser Cashe"'
    },
    {
        txt: '💛 ' + 'تُرى هل الرابط موجود أم لا؟'
    },
    {
        txt: '💛 ' + 'إن كان موجود فقط قم بالضغط عليه'
    },
    {
        txt: '💛 ' + 'وإلا قم بالضغط على زر، ليس موجوداً'
    }
]
export const H3ArraySection3 = [
    {
        txt: '💛 ' + 'إذاً الرابط غير موجود، المتصفح في طريقه لإرسال طلب إلى خادم DNS  (Domain Name System)  للحصول على عنوان IP  المقابل للرابط',
    },
    {
        txt: '💛 ' + 'عنوان IP  هو رقم فريد يُحدد موقع الخادم على الإنترنت'
    },
    {
        txt: '💛 ' + 'ساعد المتصفح بإرسالة طلب إليه عن طريق الضغط على زر: طلب IP Address'
    },
]

export const H3ArraySection4 = [
    {
        txt: '💛 ' + 'بعد طلب IP يُخزن  المتصفح  اسم الرابط  و  عنوان IP  في Browser Cashe  للاستخدام  في المرة  اللاحقة  التي تريد  الوصول  إلى  نفس  الموقع.',
    },
    {
        txt: '💛 ' + 'يُرسل المتصفح  طلب HTTP  إلى الخادم.'
    },
    {
        txt: '💛 ' + 'يستقبل الخادم  طلب HTTP  من المتصفح.'
    },
    {
        txt: '💛 ' + 'يقوم الخادم  بمعالجة الطلب  (التحقق من صحة البيانات،  التحقق من صلاحيات المستخدم،  إجراء العمليات المطلوبة،  وإسترداد البيانات المطلوبة).'
    },
    {
        txt: '💛 ' + 'يُرسل الخادم  استجابة إلى المتصفح.'
    },
    {
        txt: '💛 ' + 'ساعد الخادم من فضلك لمعالجة الطلب وإرسال استجابة للمتصفح، عن طريق الضغط على زر: حفظ في Browser Cashe ثمَّ معالجة وإرسال استجابة '
    },
]
export const H3ArraySection5 = [
    {
        txt: '💛 ' + 'يستقبل المتصفح  الاستجابة من الخادم.'
    },
    {
        txt: '💛 ' + 'يقوم المتصفح  بتحليل البيانات،  وتفسيرها،  وإظهارها للمستخدم بطريقة مناسبة'
    },
    {
        txt: '💛 ' + 'تُشمل هذه العملية:'
    },
    {
        txt: '🔹 ' + 'تقديم النصوص.'
    },
    {
        txt: '🔹 ' + 'عرض الصور والفيديوهات.'
    },
    {
        txt: '🔹 ' + ' تنفيذ JavaScript.'
    },
    {
        txt: '🔹 ' + 'إنشاء الرسوم البيانية.'
    },
    {
        txt: '💛 ' + 'قم بمساعدة المتصفح لإتمام هذه العملية وإظهار النتيجة للمستخدم عن طريق الزر: إتمام عملية Respone'
    }
]

const URLarr =[
    {
        url: 'https://www.google.com'
    },
    {
        url: 'https://www.facebook.com'
    },
    {
        url: 'https://www.github.com'
    },
    {
        url: 'https://www.linkedin.com'
    }
]

export default function URLarray() {
    const [jsonURLarr] = useState(URLarr)
  
    useEffect(() => {
      localStorage.setItem('URLarr', JSON.stringify(jsonURLarr))
    }, [jsonURLarr])

  }