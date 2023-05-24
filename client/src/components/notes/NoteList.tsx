import NoteCard from "./NoteCard";
import { useQuery } from "@tanstack/react-query";
import { getNotesRequest } from "../../api/notes";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import NoteFormPage from "../../pages/NoteFormPage";

function NoteList() {
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery(["notes"], getNotesRequest);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message} </div>;

  if (notes?.length === 0)
    return (
      <div className="flex items-center justify-center flex-col ">
        <ArchiveBoxIcon className="h-20 w-20 text-gray-300  m-auto" />
        <h1 className="text-center text-2xl">You don't have notes yet</h1>
        <NoteFormPage />
      </div>
    );

  return (
    <div className="flex items-center flex-col ">
      <NoteFormPage />
      <div className="flex w-full mt-5 p-5 flex-col h-80 overflow-y-auto ">
        {notes.map((note) => (
          <NoteCard note={note} key={note._id} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
