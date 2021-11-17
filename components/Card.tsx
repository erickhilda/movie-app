import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";

const Card = ({
  image,
  title,
  releasedYear,
  id,
}: {
  image: string;
  title: string;
  releasedYear: string;
  id: string;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const hideModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
    },
  };
  return (
    <div className="flex flex-col rounded-lg border">
      <img
        src={image}
        alt={title}
        className="w-full rounded-t-lg max-h-72"
        onClick={showModal}
      />
      <div className="flex flex-1 flex-col p-2">
        <span className="font-bold text-lg text-gray-800 tracking-normal text-left">
          {title}
        </span>
        <span className="text-sm">{releasedYear}</span>
        <div className="flex h-full justify-end items-end">
          <Link href={`/movie/${encodeURIComponent(id)}`}>
            <a className="py-1 px-4 bg-gray-200 text-gray-400 text-sm font-bold tracking-wide uppercase rounded-full">
              Details
            </a>
          </Link>
        </div>
      </div>
      <div>modal components</div>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <button
          className="absolute bg-white p-2 right-0 rounded-full m-2"
          onClick={hideModal}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
          </svg>
        </button>
        <img
          src={image}
          alt={title}
          className="w-full rounded-t-lg max-h-72"
          onClick={showModal}
        />
      </Modal>
    </div>
  );
};

export default Card;
