import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailJs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { toast } from 'react-toastify'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(form);
    if (form.name.trim() !== "" && form.email.trim() !== "" && form.message.trim() !== "") {


      emailJs.send('service_atfid0j', 'template_aqyvgu5', {
        from_name: form.name,
        to_name: 'Rohan',
        from_email: form.email,
        to_email: 'thaparohan2019@gmail.com',
        message: form.message,
      }, 'B0mroziaVb3hqrnnk').then(() => {
        setLoading(false)
        alert("Thank you. I will get back to you as soon as possible")
        setForm({ name: "", email: "", message: "", })
      }, (error) => {
        setLoading(false)
        // console.log(error);
        alert("Something went wrong")
      })
    } else {
      toast.warn("Enter all details");
      setLoading(false);
    }
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handlesubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.value} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows={"7"} name='message' value={form.message} onChange={handleChange} placeholder="What do you wan't to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? "sending..." : "send"} </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")