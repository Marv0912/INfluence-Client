import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // This should be set to your app's root element

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onConfirmDelete }) => {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Delete Confirmation">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
            <button onClick={onConfirmDelete}>Delete</button>
            <button onClick={onRequestClose}>Cancel</button>
        </ReactModal>
    );
};

export default DeleteConfirmationModal;