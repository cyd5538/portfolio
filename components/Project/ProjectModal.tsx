import { X } from "lucide-react";

interface ProjectModalProps {
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string | React.ReactElement;
  body?: React.ReactElement;
  disabled?: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ onClose, title, body, }) => {

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-hidden 
          fixed 
          tpo-0
          left-0
          inset-0 
          z-50
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
          
        "
      >
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto ">
          <div className="
            h-full
            lg:h-auto
            border-0 
            dark:bg-zinc-800
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white 
            outline-none 
            focus:outline-none
            "
          >
            <div className="
              flex 
              items-center 
              justify-between 
              p-10
              pb-2 
              rounded-t
              "
            >
              <h3 className="text-3xl font-semibold text-black  dark:text-white">
                {title}
              </h3>
              <button
                className="
                  p-1 
                  ml-auto
                  border-0 
                  text-black 
                  dark:text-white
                  hover:opacity-70
                  transition
                "
                onClick={onClose}
              >
                <X size={20}/>
              </button>
            </div>
            <div className="relative p-10 flex-auto overflow-y-auto max-h-screen">
              {body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectModal;