import { useInView } from 'framer-motion';
import React from 'react';




const NoteCard = ({ id, thumbnail, title, category, created_at, setModalActive, setPdfUrl, url, downloadurl }) => {

  const cardRef = React.useRef(null)

  const isInView = useInView(cardRef, { once: true });

  const handleViewClick = () => {
    // Set the PDF URL and activate the modal
    setPdfUrl(url); // Replace with the actual PDF URL
    setModalActive(true);
  };


  return (
    <div ref={cardRef} className={`w-[300px] h-[455px] bg-slate-800 p-5 rounded-xl mb-5  `} style={{
      transform: isInView ? "none" : "translateY(50px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
    }}
    >
      <div className='w-full h-[235px] mb-6 rounded-xl '>
        <img className='rounded-xl w-full h-full object-cover' src={thumbnail} alt="" />
      </div>
      <h3 className=' text-lg font-semibold h-14'>{title}</h3>
      <hr className='text-slate-400 bg-slate-400 w-[80%] m-auto opacity-20 border-dashed' />
      <h3 className=' text-md ' >Category: {category}</h3>
      <h3 className='text-slate-400'>Created At: {created_at.slice(0, 10)}</h3>
      <div className='my-5 w-full flex justify-between '>


        <button onClick={handleViewClick} className='p-2 bg-green-500  rounded-md cursor-pointer hover:bg-green-600'>View Notes</button>

        <a href={downloadurl}>

          <button

            className='p-2 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600'
          >
            Download
          </button>
        </a>
      </div>
    </div>
  )
}

export default NoteCard