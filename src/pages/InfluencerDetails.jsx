import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { get, post } from '../services/authService'; // Assuming you have a 'get' method for fetching data
import AddedInfluencerModal from '../components/AddedInfluencerModal';
import { AuthContext } from '../context/auth.context';
import SentEmailRequestModal from '../components/SentEmailRequestModal';

const InfluencerDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const [influencer, setInfluencer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
const [emailStatus, setEmailStatus] = useState({ success: false, message: '' });

    const handleSaveInfluencer = () => {
        const companyProfileId = user.roleProfile; // Accessing roleProfile (company ID)
        if (companyProfileId) {
            post(`/company/${companyProfileId}/saveInfluencer/${id}`)
                .then(response => {
                    setModalContent("Influencer added successfully!");
                    setIsModalOpen(true);
                    console.log(response)
                })
                .catch(error => {
                    setModalContent("Error adding influencer.");
                    setIsModalOpen(true);
                    console.error(error)
                });
        } else {
            setModalContent("Error: Not able to save influencer into database.");
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        setLoading(true);
        get(`/influencer/${id}`) // Assuming this is your API endpoint to fetch influencer details
            .then((response) => {
                setInfluencer(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching influencer details:', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading influencer details.</div>;
    }

    if (!influencer) {
        return <div>No influencer found.</div>;
    }
    const handleSendEmailRequest = () => {
        const emailData = {
            to: 'bimbi.mf@gmail.com', // Recipient's email
            from: 'marvin.fajardo.s@icloud.com', // Your verified sender email
            subject: 'Interest in Collaboration',
            text: 'Hello, we are interested in talking more about collaborating with you. As a company, we will provide many benefits, not just dollar compensation. Hope we hear back from you.',
            html: '<strong>Hello,</strong> we are interested in talking more about collaborating with you. As a company, we will provide many benefits, not just dollar compensation. <strong>Hope we hear back from you.</strong>'
        };

        post('/email/send', emailData)
        .then(response => {
            setEmailStatus({ success: true, message: 'Email sent successfully.' });
            setIsEmailModalOpen(true);
            console.log(response)
        })
        .catch(error => {
            setEmailStatus({ success: false, message: 'Failed to send email.' });
            setIsEmailModalOpen(true);
            console.log(error)
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Influencer Details</h1>
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-2">{influencer.user.username}</h2>
                <div className="flex items-center space-x-4">
                    <img src={influencer.user.photo} alt={influencer.user.username} className="rounded-full w-24 h-24 object-cover" />
                    <div>
                        <p><strong>Name:</strong> {influencer.user.name}</p>
                        <p><strong>Location:</strong> {influencer.location}</p>
                        <p><strong>Category:</strong> {influencer.category}</p>
                        <p><strong>Followers Count:</strong> {influencer.followersCount}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <button onClick={handleSaveInfluencer} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mr-2">+ Add to Database</button>
                    <button
                        onClick={handleSendEmailRequest}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                        Send Email Request
                    </button>

                </div>
            </div>

            <AddedInfluencerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>{modalContent}</p>
            </AddedInfluencerModal>
            <SentEmailRequestModal
                isOpen={isEmailModalOpen}
                onRequestClose={() => setIsEmailModalOpen(false)}
                emailStatus={emailStatus}
            />

        </div>
    );
};

export default InfluencerDetails;