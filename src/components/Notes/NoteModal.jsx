
import React, { useEffect, useRef } from 'react';

const NoteModal = ({ modalActive, setModalActive, pdfUrl }) => {
    const modalRef = useRef(null);

    const closeModal = () => setModalActive(false);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (modalActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalActive]);

    if (!modalActive) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div ref={modalRef} className={`bg-white p-4 rounded w-[90%] lg:w-[50%] h-[70vh] md:h-[90vh] max-w-4xl relative `}>
                <button onClick={closeModal} className="absolute -top-6 -right-6 bg-gray-700 rounded-full text-4xl font-bold text-white-500 hover:text-red-700 w-14 p-2">X</button>
                <iframe src={pdfUrl} className="border-none w-[100%] h-[68vh] md:h-[85vh]" />
            </div>
        </div>
    );
};

export default NoteModal;
