import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context'; // Import your AuthContext
import { get, axiosDelete } from '../services/authService'; // Assuming you have a 'get' method for making API calls

const Database = () => {
    const [influencers, setInfluencers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext); // Get the logged-in user from context
    console.log(user)

    useEffect(() => {
        const companyId = user.roleProfile;
        if (user && user.role === 'Company') {
            get(`/company/${companyId}/savedInfluencers`)
                .then((response) => {
                    setInfluencers(response.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching saved influencers:', error);
                    setIsLoading(false);
                });
        }
    }, [user]);

    const handleDeleteInfluencer = (influencerId) => {
        // Make a DELETE request to delete the influencer
        const companyId = user.roleProfile;
        const influencerToDelete = influencers.find((influencer) => influencer._id === influencerId);

        if (!influencerToDelete) {
            console.error('Influencer not found in influencers array');
            return;
        }
        axiosDelete(`/company/${companyId}/delete/${influencerId}`)
            .then(() => {
                setInfluencers((prevInfluencers) =>
                    prevInfluencers.filter((influencer) => influencer._id !== influencerId)
                );
            })
            .catch((error) => {
                console.error('Error deleting influencer:', error);
            });
    };

    return (

        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Database</h1>
            <Link to="/search" className="text-blue-500 hover:text-blue-700">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Search for Influencers
                </button>
            </Link>

            <table className="min-w-full leading-normal mt-4">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Username</th>
                        <th className="py-3 px-6 text-left">Location</th>
                        <th className="py-3 px-6 text-left">Category</th>
                        <th className="py-3 px-6 text-left">Followers Count</th>
                        <th className="py-3 px-6 text-left"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {influencers.length === 0 ? (
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td colSpan="4" className="py-3 px-6 text-left whitespace-nowrap">
                                There are no influencers saved into the database. Let us start searching!
                            </td>
                        </tr>
                    ) : (
                        influencers.map((influencer) => (
                            <tr key={influencer._id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.user.username}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.location}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.category}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.followersCount}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <button
                                        onClick={() => handleDeleteInfluencer(influencer._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Database;
