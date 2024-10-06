import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';
import Navbar from '../components/Notes/NavBar';
import NoteCard from '../components/Notes/NoteCard';
import NoteModal from '../components/Notes/NoteModal';
import Skeleton from '../components/Notes/Skeleton';
import { styles } from '../style';
import { validateToken } from '../utils/validateToken';

const fetchNotes = async ({pageParam=0, queryKey}) => {
  const searchText = queryKey[1];
  // console.log(pageParam)
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/notes${searchText ? `/search?query=${searchText}&` : '?'}pageNumber=${pageParam}&pageSize=10`);
  // console.log("response.data ", response.data)
  // console.log("response.data ", response.data)
  return response.data;
};

const Notes = () => {
  const [modalActive, setModalActive] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText] = useDebounce(searchText, 500); // Debounce search text

  // Query for notes
  const { data: notes, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['notes', debouncedSearchText],
    fetchNotes,
    {
      getNextPageParam: (lastPage) => {
        // console.log("lastPage", lastPage)
        // console.log("lastPage", lastPage)
        return lastPage.last ? undefined : lastPage.pageable.pageNumber+1;
      },
      keepPreviousData: true,
      // Ensure the query runs initially when debouncedSearchText is an empty string
      enabled: true,
    }
  );

  const setter = async () => {
    const valid = await validateToken();
    setLoggedIn(valid);
  };

  useEffect(() => {
    setter();
  }, []);

  if (isError) {
    return (
      <>
        <Navbar />
        <div className={`${styles.paddingX} mt-20 w-full min-h-[100dvh] flex item-center py-5 bg-primary`}>
          <div className='w-full item-center max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>
            <h1 className='text-4xl'>Error Occurred</h1>
          </div>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className={`${styles.paddingX} mt-20 w-full min-h-[100dvh] flex item-center py-5 bg-primary`}>
          <div className='w-full item-center max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>
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
    );
  }

  return (
    <div>
      <Navbar setSearchText={setSearchText} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className={`${styles.paddingX} mt-20 w-full min-h-[100dvh] item-center py-5 bg-primary`}>
        <div className='pb-4 flex justify-center'>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            name="search"
            className='bg-slate-300 rounded-lg w-[300px] px-4 py-2 text-black md:hidden'
            placeholder='Type to search'
          />
        </div>
        <div className='w-full item-center max-w-7xl mx-auto flex flex-wrap gap-6 m-auto justify-evenly'>
          {/* {
            console.log(notes)
          } */}
          {notes?.pages.flatMap((page) => page.content).map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              thumbnail={note.image}
              title={note.title}
              category={note.category}
              created_at={note.created_at}
              setModalActive={setModalActive}
              setPdfUrl={setPdfUrl}
              url={note.url}
              downloadurl={note.download}
            />
          ))}
        </div>
         {isFetchingNextPage ? (
          <Skeleton />
        ) : hasNextPage ? (
          <div className="flex w-full item-center justify-center">
            <button
            onClick={() => fetchNextPage()}
            className="bg-blue-600 p-4 text-black rounded-xl cursor-pointer text-center items-center "
          >
            Load More
          </button>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center">

          <p
            className="bg-blue-600 p-4 text-black rounded-xl cursor-not-allowed "
            >No more data</p>
            </div>
        )}
      </div>
      <NoteModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        pdfUrl={pdfUrl}
      />
    </div>
  );
};

export default Notes;
