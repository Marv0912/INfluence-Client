import { useState } from 'react';
import { post } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const SearchInfluencers = () => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        category: '',
        fromOption: '',
        toOption: '',
    });

    const [influencers, setInfluencers] = useState([]);

    const navigate = useNavigate();

    const navigateToInfluencerDetails = (influencerId) => {
        navigate(`/influencer/${influencerId}`)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({ ...searchParams, [name]: value });
    };

    const handleSearch = () => {
        // Make a POST request to the backend with searchParams
        post('/influencer/search', searchParams)
            .then((response) => {
                setInfluencers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search Influencers</h1>
            <div className="flex space-x-4 mb-4">
                <div className="flex-grow">
                    <label className="block mb-2">
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={searchParams.location}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1 w-full"
                        />
                    </label>
                </div>
                <div className="flex-grow">
                    <label className="block mb-2">
                        Category:
                        <input
                            type="text"
                            name="category"
                            value={searchParams.category}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1 w-full"
                        />
                    </label>
                </div>
                <div className="flex-grow">
                    <label className="block mb-2">
                        From:
                        <select
                            name="fromOption"
                            value={searchParams.fromOption}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1 w-full"
                        >
                            <option value="0">0</option>
                            <option value="5000">5,000</option>
                            <option value="15000">15,000</option>
                            <option value="50000">50,000</option>
                            <option value="100000">100,000</option>
                            <option value="250000">250,000</option>
                        </select>
                    </label>
                </div>
                <div className="flex-grow">
                    <label className="block mb-2">
                        To:
                        <select
                            name="toOption"
                            value={searchParams.toOption}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1 w-full"
                        >
                            <option value="0">0</option>
                            <option value="5000">5,000</option>
                            <option value="15000">15,000</option>
                            <option value="50000">50,000</option>
                            <option value="100000">100,000</option>
                            <option value="250000">250,000</option>
                            <option value="1000000">1,000,000</option>
                            {/* Add more options as needed */}
                        </select>
                    </label>
                </div>
                {/* You can add the "toOption" input similarly */}
                <div className="flex items-end">
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div>
                {/* SEARCH RESULTS */}
                {influencers.length === 0 ? (
                    <p className="text-gray-500">No influencers found. Start searching!</p>
                ) : (
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr className="bg-gray-400 text-gray-600 text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Location</th>
                                <th className="py-3 px-6 text-left">Category</th>
                                <th className="py-3 px-6 text-left">Followers Count</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-light">
                            {influencers.map((influencer) => (
                                <tr key={influencer._id} className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer" onClick={() => navigateToInfluencerDetails(influencer._id)}>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.user.name}</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.location}</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.category}</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{influencer.followersCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default SearchInfluencers;
