import React from 'react';
import serv1 from '../assets/images/Serv1.webp';
import serv2 from '../assets/images/Serv2.webp';
import serv3 from '../assets/images/Serv3.webp';

const ServicesData = [
  {
    img: serv1,
    title: 'خدمات السباكه',
    text: 'تتمثل السباكة في المهنة اليدوية التي تتضمن تركيب كل من أنظمة أنابيب المياه في المنازل أو المنشآت من أجل توزيع مياه الشرب أو أنظمة الصرف الصحي.',
    contact: 'الإتصال الهاتفي',
  },
  {
    img: serv2,
    title: 'خدمات الطلاء',
    text: 'نحن نقدم خدمات المقاولات والتشطيبات الداخلية الشاملة ، من إعادة التشكيلات السكنية والتجارية إلى التجديدات المخصصة. يتخصص فريقنا المحترف من المحترفين في الطلاء والتلوين وورق الجدران والأرضيات وتركيب الحوائط الجافة والمزيد. نحن نضمن أعلى جودة للمنتج والخدمة وبأسعار تنافسية والاهتمام بالتفاصيل.',
    contact: 'الإتصال الهاتفي',
  },
  {
    img: serv3,
    title: 'تركيبات الجبس بورد',
    text: `
     ارتفع الاهتمام بأنواع الجبس بورد في تشطيب الوحدات السكنية الجديدة، حيث يضفي مظهراً جمالياً على الأسقف والحوائط.          
   ,
    ولذلك يستخدم “الجبس بورد” كديكور في تزيين الأسقف والحوائط، في غرف النوم والمطابخ، ويكون بديلاً في بعض الأحيان للأسقف المستعارة.
                          
 وبالتالي تعتبر أسقف “جبسون بورد” هى الأجمل بشكل عام من حيث الشكل والديكور.

`,
    contact: 'الإتصال الهاتفي',
  },
];
function Services() {
  return (
    <div className=" container mx-auto my-20  px-4">
      <h1 className=" text-6xl my-12"> خدماتنا</h1>
      <div className=" flex flex-row-reverse  justify-center gap-5  flex-wrap ">
        {ServicesData.map(item => (
          <div
            key={item.title}
            className="   md:w-5/12  lg:w-30  text-center flex flex-col items-center   "
          >
            <div className=" overflow-hidden rounded-lg  relative">
              <img
                src={item.img}
                className="   sm:w-full sm:h-full transition-transform   duration-1000 duration_speed   hover:scale-150  md:h-52 md:w-96"
                alt={item.title}
              />
            </div>
            <h2 className="  text-3xl my-6">{item.title}</h2>
            <p className=" text-slate-500  italic text-sm  mb-6">{item.text}</p>
            <a href="tel:+966580624763" className="bg-main p-2  rounded-lg">
              {item.contact}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
