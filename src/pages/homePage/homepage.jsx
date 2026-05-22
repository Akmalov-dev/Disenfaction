import React from 'react'
import Pishpish from '../homePage/images/pishpish.png'
import Dizen from '../homePage/images/dizen.jpg'
import '../homePage/HomePage.css'

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
        <img className='img-pishpish' src={Pishpish} alt="" />
      </div>
      <div>
        <img className='img-dizen' src={Dizen} alt="" />
      </div>
     </div>
    </>
  )
}

export default homepage