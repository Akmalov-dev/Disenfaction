import React from 'react'
import Pishpish from '../homePage/images/pishpish.png'
import Dizen from '../homePage/images/dizen.jpg'
import '../homePage/HomePage.css'
import Brain from '../homePage/images/brain.avif'
import Medal from '../homePage/images/medal.png'
import Shake from '../homePage/images/shake.png'
import Back from '../homePage/images/back.png'
import Dizen2 from '../homePage/images/dizen2.png'
import Secure from '../homePage/images/secure.png'

const homepage = () => {
  return (
    <>
     <div className='service'>
      <div className='fonts-dizen'>
        <p className='f-xizmat'>Dizenfektsiya Xizmati</p>
        <p className='f-mijoz'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
        <button className='btn-contact'>Bog'lanish</button>
      </div>
      <div>     
        <img className='img-pishpish' src={Pishpish} alt="pic" />
      </div>
      <div>
        <img className='img-dizen' src={Dizen} alt="pic" />
      </div>
     </div>
     <p className='f-afzallik'>Afzalliklarimiz</p>
     <hr />

     <div className='afzallik'>
      <div className='first-afzallik'>
        <img className='img-brain' src={Brain} alt="alt" />
        <p className='f-tezda'>Tezda xizmat ko’rsatish</p>
        <p className='f-bizning'> Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
      </div>
        <div className='first-afzallik'>
        <img className='img-medal' src={Medal} alt="alt" />
        <p className='f-tezda'>Yetuk mutahasislaimiz</p>
        <p className='f-bizning'> Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
      </div>
        <div className='first-afzallik'>
        <img className='img-brain' src={Shake} alt="alt" />
        <p className='f-tezda'>Sizga maqul vaqtda</p>
        <p className='f-bizning'> Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
      </div>
     </div>

     <div>
      <img className='img-back' src={Back} alt="alt" />
      <div className='klapa-font'>
        <p className='f-klapa'>Klapa va zararli hashorot endi yo’q deb hisoblang !!!</p>
        <p className='f-bizning1'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
        <button className='btn-contact'>Bog'lanish</button>
      </div>
     </div>

     <hr />

     <div>
      <p className='f-service'>SERVICE</p>
      <p className='f-darslik'>Bu darsliklar sizning yuqori daraja olishingizga yordam beradi</p>
     </div>

     <div className='boxes'>
      <div className='first-box'>
        <div className='box-fonts'>
          <p className='f-tushuncha'>Boshlang’ich tushunchalar</p>
          <p className='f-nazariy'>nazariy bilimlar</p>
          <p className='f-dars'>16 dars</p>
        </div>
        <div>
          <button className='btn-yozilish'>Yozilish</button>
        </div>
      </div>

      <div className='first-box'>
        <div className='box-fonts'>
          <p className='f-tushuncha'>O'rta Tushunchalar</p>
          <p className='f-nazariy'>nazariy va amaliy bilimlar</p>
          <p className='f-dars'>23 dars</p>
        </div>
        <div>
          <button className='btn-yozilish'>Yozilish</button>
        </div>
      </div>

      <div className='first-box'>
        <div className='box-fonts'>
          <p className='f-tushuncha'>Yuqori Tushunchalar</p>
          <p className='f-nazariy'>amaliy bilimlar</p>
          <p className='f-dars'>16 dars</p>
        </div>
        <div>
          <button className='btn-yozilish'>Darslikni olish</button>
        </div>
      </div>
     </div>

     <div className='after-mid'>
      <div>
        <img className='img-dizen2' src={Dizen2} alt="" />
      </div>
      <div className='after-mid-fonts'>
        <img className='img-secure' src={Secure} alt="" />
        <p className='f-talaygina'>Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</p>
        <button className='btn-contact'>Bog'lanish</button>
      </div>
     </div>

     
    </>
  )
}

export default homepage