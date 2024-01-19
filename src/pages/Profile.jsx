import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { get } from '../services/authService'; // Assuming this is set up for authenticated GET requests
import { AuthContext } from '../context/auth.context';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
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
                    setProfileData(response.data);
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
    if (!profileData) return <div>Role details not found.</div>;

    return (
        <section className="profile-section bg-gray-800 p-4 shadow-lg rounded-lg text-white">
            <header className="mb-4">
                <h1 className="font-semibold text-xl ml-0">Profile:</h1>
                <hr className="border-gray-700" />
                <p className="font-light">Email: {user.email}</p>
                <p className="font-light">Role: {user.role}</p>
            </header>
            <div className="profile-content space-y-4">
                {user.role === 'Influencer' && profileData.roleData && (
                    <div className="influencer-info space-y-2">
                        <p>Bio: <span> {profileData.roleData.bio}</span></p>
                        <hr className="border-gray-700" />
                        <p>Website: <span> <a href={profileData.roleData.website} className="text-blue-500 hover:text-blue-600">{profileData.roleData.website}</a></span></p>
                        <hr className="border-gray-700" />
                        <p>Instagram URL: <span> <a href={profileData.roleData.instagramUrl} className="text-blue-500 hover:text-blue-600">{profileData.roleData.instagramUrl}</a></span></p>
                        <hr className="border-gray-700" />
                        <p>Followers Count: <span> {profileData.roleData.followersCount}</span></p>
                        <hr className="border-gray-700" />
                        <p>Category: <span> {profileData.roleData.category}</span></p>
                    </div>
                )}

                {user.role === 'Company' && profileData.roleData && (
                    <div className="company-info space-y-2">
                        <p>Company Name: {profileData.roleData.companyName}</p>
                        <hr className="border-gray-700" />
                        <p>Industry: {profileData.roleData.industry}</p>
                        <hr className="border-gray-700" />
                        <p>Location: {profileData.roleData.location}</p>
                        <hr className="border-gray-700" />
                        <div>Contact Information:
                            <p>Email: {profileData.roleData.contactInformation.email}</p>
                            <p>Phone: {profileData.roleData.contactInformation.phone}</p>
                            <p>Address: {profileData.roleData.contactInformation.address}</p>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <Link
                to={`/edit/profile/${user._id}`} // Using user ID for dynamic routing
                className="edit-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow mr-2"
            >
                Edit Profile
            </Link>
            <button
                className="delete-btn mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow"
                onClick={openDeleteModal}>Delete Account</button>
            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onRequestClose={closeDeleteModal}
                onConfirmDelete={handleDelete}
            />
            </div>
        </section>
    )
}

export default Profile;
