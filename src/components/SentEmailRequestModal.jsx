import ReactModal from 'react-modal';

const SentEmailRequestModal = ({ isOpen, onRequestClose, emailStatus }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Email Sent Confirmation"
            className="bg-gray-800 p-4 rounded-lg text-white shadow-lg modal-content"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="font-semibold text-xl mb-2">{emailStatus.success ? 'Email Sent Successfully' : 'Email Sending Failed'}</h2>
            <hr className="border-gray-700" />
            <p className="font-light mb-4">{emailStatus.message}</p>
            <div className="flex justify-end">
                <button
                    onClick={onRequestClose}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow"
                >
                    Close
                </button>
            </div>
        </ReactModal>
    );
};

export default SentEmailRequestModal;
