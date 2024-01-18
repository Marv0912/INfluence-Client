import { useContext, useEffect, useState } from 'react';
import { get } from '../services/authService'; // Assuming this is set up for authenticated GET requests
import { AuthContext } from '../context/auth.context';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [roleProfile, setroleProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = () => setIsDeleteModalOpen(true);
    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    const handleDelete = () => {
        // Make DELETE request to backend
        // For example: delete(`/user/${user._id}`)
        // Redirect to home page after deletion
    };

    useEffect(() => {
        if (user) {
            get(`/user/${user._id}`) // Adjust this endpoint as per your route configuration
                .then((response) => {
                    setroleProfile(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Error fetching profile:', err);
                    setError(err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) return <div>Loading profile...</div>;
    if (error) return <div>Error loading profile.</div>;
    if (!roleProfile) return <div>Role details not found.</div>;

    return (
        <div>
            <h1>Hello, {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>

            {user.role === 'influencer' && roleProfile.influencer && (
                <div>
                    <p>Bio: {roleProfile.influencer.bio}</p>
                    <p>Website: {roleProfile.influencer.website}</p>
                    <p>Instagram URL: {roleProfile.influencer.instagramUrl}</p>
                    <p>Followers Count: {roleProfile.influencer.followersCount}</p>
                    {/* Add more influencer-specific fields as needed */}
                </div>
            )}

            {user.role === 'company' && roleProfile.company && (
                <div>
                    <p>Company Name: {roleProfile.company.companyName}</p>
                    <p>Company Website: {roleProfile.company.website}</p>
                    <p>industry: {roleProfile.company.website}</p>
                    <p>location: {roleProfile.company.website}</p>
                    <p>contactInformation:
                        <span> email: {roleProfile.company.contactInformation}</span>
                        <span> phone: {roleProfile.company.contactInformation}</span>
                        <span> address: {roleProfile.company.contactInformation}</span>
                    </p>
                    <button onClick={openDeleteModal}>Delete Account</button>

                    <DeleteConfirmationModal
                        isOpen={isDeleteModalOpen}
                        onRequestClose={closeDeleteModal}
                        onConfirmDelete={handleDelete}
                    />


                </div>
            )}
        </div>
    );
};

export default Profile;
