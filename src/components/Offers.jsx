import React from 'react'
import styles, {layout} from '../style'
import { services } from '../constants'
import { Link, useNavigate } from 'react-router-dom'

const ServiceCard = ({title, content, index, onClick}) => (
  <div className={`flex flex-rw p-6 rounded-[20px] ${index !== services.length-1 ? 'mb-6' : 
  'mb-0'} feature-card bg-secondary cursor-pointer`} onClick={onClick}>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] 
      leading-[23px] mb-3'>{title}</h4>
      <p className={`${styles.desc}`}>{content}</p>
    </div>
  </div>
)

const Offers = () => {

  const navigate = useNavigate();

  return (
    <section id='services' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Discover <br className="sm:block hidden"/> what we can offer
        </h2>
        <p className={`${styles.desc} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Mollitia eum commodi laborum fuga soluta et voluptas error ex pariatur enim.</p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} onClick={() => navigate(`/${service.id}`)}/>
        ))}
      </div>
    </section>
  )
}

export default Offers