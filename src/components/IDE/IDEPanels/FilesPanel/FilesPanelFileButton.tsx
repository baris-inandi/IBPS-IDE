import { AiOutlineFileText } from "react-icons/ai";
import { LiaPencilAltSolid } from "react-icons/lia";
import { PiFlower } from "react-icons/pi";
import { SlTrash } from "react-icons/sl";
import useFiles from "../../../../hooks/useFiles";

interface FilesPanelFileButtonProps {
  file: string;
}

const FilesPanelFileButton: React.FC<FilesPanelFileButtonProps> = (
  props,
) => {
  const { activeFile, deleteFile, renameFile, setActiveFile } =
    useFiles();

  return (
    <button
      key={props.file}
      onClick={() => {
        setActiveFile(props.file);
      }}
      className={`group flex items-center justify-between w-full px-2 py-1 rounded-md text-neutral-800 dark:text-onedark-200
              ${
                activeFile === props.file
                  ? "bg-neutral-200 dark:bg-onedark-800"
                  : "hover:bg-neutral-300 dark:hover:dark:bg-onedark-900"
              }
              `}
    >
      <div className="flex items-center gap-2">
        {props.file === "Welcome" ? (
          <PiFlower className="inline"></PiFlower>
        ) : (
          <AiOutlineFileText className="inline" />
        )}
        {props.file}
      </div>
      {props.file === "Welcome" ? null : (
        <div className="items-center gap-2 group-hover:flex hidden">
          <LiaPencilAltSolid
            onClick={() => {
              const n = prompt("Enter a name for the new file") ?? "";
              renameFile(props.file, n);
            }}
          ></LiaPencilAltSolid>
          <SlTrash
            onClick={() => {
              deleteFile(props.file);
            }}
          ></SlTrash>
        </div>
      )}
    </button>
  );
};

export default FilesPanelFileButton;
