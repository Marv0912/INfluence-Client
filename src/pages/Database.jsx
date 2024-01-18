import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getSavedInfluencers } from '../services/databaseService'; 

const Database = () => {
    const [influencers, setInfluencers] = useState([]);

    useEffect(() => {
        // Fetch saved influencers from the database when the component mounts
        getSavedInfluencers()
            .then((data) => {
                setInfluencers(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Database</h1>
            <Link to="/search">
                <button>Search for Influencers</button>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Followers Count</th>
                    </tr>
                </thead>
                <tbody>
                    {influencers.length === 0 ? (
                        <tr>
                            <td colSpan="4">There are no influencers saved into the database. Let us start searching!</td>
                        </tr>
                    ) : (
                        influencers.map((influencer) => (
                            <tr key={influencer._id}>
                                <td>{influencer.username}</td>
                                <td>{influencer.location}</td>
                                <td>{influencer.category}</td>
                                <td>{influencer.followersCount}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Database;
