
import ReactModal from 'react-modal';

const AddedInfluencerModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onClose} className="bg-gray-800 p-4 rounded-lg text-white shadow-lg modal-content" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="font-light mb-4">{children}</div>
            <div className="flex justify-end">
                <button
                    onClick={onClose}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow"
                >
                    Close
                </button>
            </div>
        </ReactModal>
    );
};

export default AddedInfluencerModal;
