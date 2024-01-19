import { post } from '../services/authService'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [newUser, setNewUser] = useState({
        username: "", // User-Specific
        name: "", // User-Specific
        email: "", // User-Specific
        password: "", // User-Specific
        role: "Influencer", // User-Specific
        location: "", //Company- specific
        companyName: "", //Company- specific
        industry: "", //Company- specific
        contactInformation: {
            contactEmail: "", //Company- specific
            contactPhone: "", //Company- specific
            contactAddress: "" //Company- specific
        },
        bio: "", // Influencer-specific
        website: "", // Influencer-specific
        instagramUrl: "", // Influencer-specific
        category: "", // Influencer-specific
        followersCount: "" // Influencer-specific
    });
    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext)

    // Check if the field belongs to contactInformation
    const handleTextInput = (e) => {
        const { name, value } = e.target;
        if (["contactEmail", "contactPhone", "contactAddress"].includes(name)) {
            setNewUser(prev => ({
                ...prev,
                contactInformation: {
                    ...prev.contactInformation,
                    [name]: value
                }
            }));
        } else {
            setNewUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Sending newUser to the backend:", newUser);
        post('/auth/signup', newUser)
            .then((response) => {
                storeToken(response.data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Username:</label>
                        <input
                            name="username"
                            type="text"
                            value={newUser.username}
                            onChange={handleTextInput}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Name:</label>
                        <input
                            name="name"
                            type="text"
                            value={newUser.name}
                            onChange={handleTextInput}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Email:</label>
                        <input
                            name="email"
                            type="email"
                            value={newUser.email}
                            onChange={handleTextInput}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Password:</label>
                        <input
                            name="password"
                            type="password"
                            value={newUser.password}
                            onChange={handleTextInput}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Location:</label>
                        <input
                            name="location"
                            type="text"
                            value={newUser.location}
                            onChange={handleTextInput}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Role:</label>
                        <select
                            name="role"
                            value={newUser.role}
                            onChange={handleTextInput}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="Influencer">Influencer</option>
                            <option value="Company">Company</option>
                        </select>
                    </div>
                    {/* Fields for Company Model */}
                    {newUser.role === "Company" && (
                        <div>
                            <label className="block mb-1">Company Name:</label>
                            <input
                                name="companyName"
                                type="text"
                                value={newUser.companyName}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Industry:</label>
                            <input
                                name="industry"
                                type="text"
                                value={newUser.industry}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Contact Email:</label>
                            <input
                                name="contactEmail"
                                type="email"
                                value={newUser.contactInformation.contactEmail}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Contact Phone:</label>
                            <input
                                name="contactPhone"
                                type="text"
                                value={newUser.contactInformation.contactPhone}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Contact Address:</label>
                            <input
                                name="contactAddress"
                                type="text"
                                value={newUser.contactInformation.contactAddress}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    )}
                    {/* Fields for Influencer Model */}
                    {newUser.role === "Influencer" && (
                        <div>
                            <label className="block mb-1">Bio:</label>
                            <textarea
                                name="bio"
                                value={newUser.bio}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Website:</label>
                            <input
                                name="website"
                                type="text"
                                value={newUser.website}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Category:</label>
                            <input
                                name="category"
                                type="text"
                                value={newUser.category}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Instagram Url:</label>
                            <input
                                name="instagramUrl"
                                type="text"
                                value={newUser.instagramUrl}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Followers Count:</label>
                            <input
                                name="followersCount"
                                type="text"
                                value={newUser.followersCount}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
