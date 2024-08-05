import React, { useEffect, useState } from 'react'
import Navbar from '../components/Notes/NavBar'
import { styles } from '../style'
import NoteCard from '../components/Notes/NoteCard'
import NoteModal from '../components/Notes/NoteModal'
import axios from 'axios'
import { useQuery } from 'react-query'
import Skeleton from '../components/Notes/Skeleton'



const Notes = () => {
  const [modalActive, setModalActive] = useState(false);

  const [notes, setNotes] = useState([])

  const [pdfUrl, setPdfUrl] = useState('');

  const getNotes = async () => {
    const response = await axios.get("http://localhost:8080/api/notes");
    setNotes(response.data);
    // console.log(response)
  }

  const {  isLoading, isError } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  })


  if (isError) {
    return <>
      <Navbar />
      <div className={`${styles.paddingX} mt-20 w-full min-h-[100dvh] flex item-center py-5   bg-primary`}>
        <div className=' w-full item-center max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>

          <h1 className='text-4xl'>Error Occured</h1>
        </div>
      </div>
    </>
  }

  if (isLoading) {
    return <>
      <Navbar />
      <div className={`${styles.paddingX} mt-20 w-full min-h-[100dvh] flex item-center py-5   bg-primary`}>
        <div className=' w-full item-center max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>

          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </>
  }

  return (
    <div>
      <Navbar />
      <div className={`${styles.paddingX} mt-20 w-full min-h-[100dvh] flex item-center py-5   bg-primary`}>
        <div className=' w-full item-center max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>

          {
            notes?.map((note) => {
              return <NoteCard key={note.id} id={note.id} thumbnail={note.image} title={note.title} category={note.category} created_at={note.created_at} setModalActive={setModalActive} setPdfUrl={setPdfUrl} url={note.url} downloadurl={note.download} />
            })
          }


        </div>
      </div>
      <NoteModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        pdfUrl={pdfUrl}
      />
    </div>
  )
}

export default Notes