export default function ThreadDeletionPopup({ onDelete, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <p>Are you sure you want to delete this thread?</p>
        <div className="flex justify-end mt-4">
          <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>Yes</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}
