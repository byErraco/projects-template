import { Note } from "../../types/Note.interface";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { deleteNoteRequest } from "../../api/notes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  note: Note;
}

function NoteCard({ note }: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteNoteRequest, {
    onSuccess: () =>
      queryClient.setQueriesData(["notes"], (old) =>
        old.filter((n: Note) => n._id !== note._id)
      ),
  });

  return (
    <div
      key={note._id}
      className="relative m-2  flex flex-col items-center w-full ring-1 shadow border-l-black ring-gray-200 border-l-4 p-1 rounded-lg max-w-xs mx-auto"
      onDoubleClick={() => {
        mutation.mutate(note._id);
      }}
    >
      <p className="text-sm font-medium text-black-100">{note.title}</p>
      <p className="truncate text-sm text-black-200">{note.description}</p>
      {/* <p className="truncate text-sm text-black-200">{note.description}</p> */}
      {/* <div className="flex-shrink-0">
        <PencilSquareIcon className="h-7 w-7 rounded-full" />
      </div>
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-100">{note.title}</p>
          <p className="truncate text-sm text-gray-500">{note.description}</p>
        </a>
      </div> */}
    </div>
  );
}

export default NoteCard;
