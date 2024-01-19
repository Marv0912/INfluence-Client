import ReactModal from 'react-modal';

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onConfirmDelete }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Delete Confirmation"
            className="bg-gray-800 p-4 rounded-lg text-white shadow-lg modal-content"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="font-semibold text-xl mb-2">Confirm Delete</h2>
            <hr className="border-gray-700" />
            <p className="font-light mb-4">Are you sure you want to delete your account? This action cannot be undone.</p>
            <div className="flex justify-end space-x-2">
                <button
                    onClick={onConfirmDelete}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow"
                >
                    Delete
                </button>
                <button
                    onClick={onRequestClose}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded shadow"
                >
                    Cancel
                </button>
            </div>
        </ReactModal>
    );
};

export default DeleteConfirmationModal;
