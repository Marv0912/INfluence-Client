import{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../services/authService'; // Assuming you have a 'get' method for fetching data

const InfluencerDetails = () => {
    const { id } = useParams();
    const [influencer, setInfluencer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Influencer Details</h1>
            <div>
                <h2 className="text-xl font-bold">{influencer.user.username}</h2>
                <p>Name:{influencer.user.name}</p>
                <img src={influencer.user.photo} alt="" />
                <p>Location: {influencer.location}</p>
                <p>Category: {influencer.category}</p>
                <p>Followers Count: {influencer.followersCount}</p>
                
            </div>
        </div>
    );
};

export default InfluencerDetails;