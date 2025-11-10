import AddDipendenti from "./AddDipendenti";

const AddDipeMob = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-90"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-section-light dark:bg-section-dark p-6 rounded-2xl shadow-lg w-11/12 max-w-md"
      >
        <AddDipendenti onClose={onClose} />
      </div>
    </div>
  );
};
export default AddDipeMob;
