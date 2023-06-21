import React from 'react';
import logo from '../assets/images/logo.png';
import logo1 from '../assets/images/logo1.png';
import info1 from '../assets/images/Info1.jpeg';
import info2 from '../assets/images/Info2.webp';
import info3 from '../assets/images/Info3.jpeg';
import { BsWhatsapp } from 'react-icons/bs';

import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
function Info() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <nav className="relative flex pt-6  xl:container xl:mx-auto">
          <img className="w-32 md:w-32  m-auto " src={logo1} alt="" />
          <div className="absolute  right-0 md:right-12 top-24 md:top-28 ">
            <div className="navbar-container block p-1 px-5 text-2xl rounded-lg md:hidden">
              <div
                className="navbar-toggle flex flex-col  items-end"
                onClick={toggleNav}
              >
                {isNavOpen ? <FaTimes /> : <FaBars />}
              </div>
              {isNavOpen && (
                <a
                  href="tel:+966580624763"
                  className=" p-1 px-2  text-sm  rounded-lg  bg-main"
                >
                  الإتصال بنا
                </a>
              )}
            </div>

            <a
              className="hidden p-1 px-5 text-2xl rounded-lg md:block bg-main"
              href="tel:+966580624763"
            >
              الإتصال بنا
            </a>
          </div>
        </nav>
      </header>
      <section className=" xl:container xl:mx-auto ">
        <img
          src={logo}
          alt="logo"
          className=" w-full h-height_bg  object-contain  "
        />
        <a href="https://wa.me/966580624763">
          <div className=" fixed bottom-16 right-6 p-3  bg-green-500 rounded-full z-50">
            <BsWhatsapp className=" text-4xl text-white" />
          </div>
        </a>
        <main className=" relative h-height_bg ">
          <div className=" bg-bg   absolute  top-0 left-0 right-0 bottom-0"></div>
          <img src={info1} alt="info1" className="   h-full w-full     " />
          <div className=" absolute top-0 left-0 right-0 bottom-0 text-center flex justify-center items-center  text-alt  ">
            <div className=" flex flex-col text-center  md:items-center px-5">
              <h1 className=" text-4xl  lg:text-5xl  ">
                الدكتور للتشطيبات الداخلية: <br /> تشطيبات ذات نوعية عالية
              </h1>
              <p className=" text-xl md:text-2xl  my-4  px-2 md:px-28 lg:px-48">
                الدكتور للتشطيبات الداخلية هي شركة تقدم حلولاً فنية في مجال
                التشطيبات الداخلية، حيث توفر مواد متخصصة، عمال محترفين وخدمات
                تصميم متنوعة، مصممة لتوفير التشطيبات -الداخلية المثالية لمنزلك.
                او لشركتك.وايضا للمحلات التجاري نتكون من امهر العاملين لانجاز
                نشاط التشطيبات الداخليه بالكامل في وقت قياسي . وباسعار تتوافق مع
                الجميع رضاكم غايتنا
              </p>
              <a
                href="tel:+966580624763"
                className="bg-main  text-lg py-3 px-5 text-black  rounded-lg"
              >
                تواصل معنا /
              </a>
            </div>
          </div>
        </main>
        <main className=" relative h-height_bg ">
          <div className=" bg-bg   absolute  top-0 left-0 right-0 bottom-0"></div>
          <img src={info2} alt="info2" className="   h-full w-full     " />
          <div className=" absolute top-0 left-0 right-0 bottom-0 text-right flex justify-center items-center  text-alt  ">
            <div className="  flex flex-col text-center  items-center lg:items-start px-5">
              <h1 className="text-4xl  lg:text-5xl  lg:text-right ">
                الدكتور للتشطيبات الداخلية: <br /> بناء المستقبل
              </h1>

              <p className="text-xl md:text-2xl mb-9 px-2 md:px-28  lg:px-0 lg:ml-96  ">
                الدكتور للتشطيبات الداخلية هي شركة متخصصة في توفير الخدمات
                المتعلقة بالتعاقد والتشطيبات الداخلية، ونحن نهتم ببناء المستقبل
                بشكل يؤمن التميز والجودة العالية. نحن نقدم خدمات فائقة الجودة
                والمتخصصة لمشاريعنا المختلفة، بما في ذلك تخطيط وتنفيذ المشاريع
                ومنها اعمال السباكه الداخليه .والدهانات الداخليه .واعمال الديكور
                الداخليه . والجبس بورد .والكثير مما يدور ببالك فقط اطلب تجد امهر
                العماله المتخصصه مع امكانيه توافر جميع الخامات التي تناسب
                احتياجك وايضا علي خبره ودرايه تامه واصلاح الاعطال والتجديدات
                الداخليه .
              </p>
              <a
                href="tel:+966580624763"
                className="  bg-main  text-lg py-3 px-5 text-black  rounded-lg"
              >
                الدكتور للدهانات والتشطيبات الداخليه
              </a>
            </div>
          </div>
        </main>
        <main className=" relative h-height_bg ">
          <div className=" bg-bg   absolute  top-0 left-0 right-0 bottom-0"></div>
          <img src={info3} alt="info1" className="   h-full w-full     " />
          <div className=" absolute top-0 left-0 right-0 bottom-0 text-center flex justify-center items-center  text-alt  ">
            <div className=" flex flex-col text-center  md:items-center px-5">
              <h1 className=" text-4xl  lg:text-5xl ">
                الدكتور لخدمات التشطيبات الداخلية
              </h1>
              <p className="text-xl md:text-2xl   mb-9 px-2 md:px-28 lg:px-48">
                الدكتور للتشطيبات الداخلية هي شركة لخدمات التشطيبات الداخلية
                تقدم خدمات لجميع الأحجام من المشاريع التشطيبية الداخلية، من
                التصميم والتنفيذ إلى التعديلات الداخلية المتقدمة. تستخدم الدكتور
                للتشطيبات الداخلية المستوى العالي من العماله الماهره لضمان تحقيق
                النتائج
              </p>
              <a
                href="tel:+966580624763"
                className="bg-main  text-lg py-3 px-5 text-black  rounded-lg"
              >
                تواصل الان
              </a>
            </div>
          </div>
        </main>
        <main className=" py-20 px-6  bg-alt_bg">
          <h4 className="my-4 font-bold ">
            مرحبا بكم في الدكتور للتشطيبات الداخلية
          </h4>
          <div className=" md:ml-52">
            <p>
              في الدكتور للتشطيبات الداخلية ، نقدم خدمات المقاولات والتشطيبات
              الداخلية من الدرجة الأولى لجميع احتياجات منزلك والتجارية. لدينا
              فريق من المهنيين مدربين تدريباً عالياً وذوي خبرة في جميع جوانب
              التصميم الداخلي والبناء وإدارة المشاريع. سواء كنت تبحث عن تجديد
              غرفة واحدة أو تجديد المبنى بالكامل ، لدينا الخبرة والأدوات
              والتفاني لتحقيق ذلك.
            </p>
            <p>
              نسعى جاهدين لتزويد عملائنا بأفضل النتائج في جميع الأوقات ونلتزم
              بالاستماع إلى احتياجاتك وإيجاد الحلول الإبداعية التي تناسبك. سيعمل
              فريقنا من المصممين والبنائين والمقاولين ذوي الخبرة معًا للتأكد من
              اكتمال مشروعك في الوقت المحدد وفي حدود الميزانية. لذلك لا تتردد في
              التواصل معنا لتلبية جميع احتياجاتك في مجال المقاولات والتشطيبات
              الداخلية اليوم!
            </p>
          </div>
        </main>
      </section>
    </>
  );
}

export default Info;
