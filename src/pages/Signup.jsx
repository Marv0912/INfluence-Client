import { post } from '../services/authService'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        name:"",
        email: "",
        password: "",
        role: "influencer",
        location: "",
        companyName: "",
        industry: "",
        contactEmail: "",
        contactPhone: "",
        contactAddress: "",
        bio: "",
        website: "",
        instagramUrl: "",
        category: "",
        followersCount: ""
    });
    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleTextInput = (e) => {
        setNewUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

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
                            <option value="influencer">Influencer</option>
                            <option value="company">Company</option>
                        </select>
                    </div>
                    {/* Fields for Company Model */}
                    {newUser.role === "company" && (
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
                                value={newUser.contactEmail}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Contact Phone:</label>
                            <input
                                name="contactPhone"
                                type="text"
                                value={newUser.contactPhone}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                            <label className="block mb-1">Contact Address:</label>
                            <input
                                name="contactAddress"
                                type="text"
                                value={newUser.contactAddress}
                                onChange={handleTextInput}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    )}
                    {/* Fields for Influencer Model */}
                    {newUser.role === "influencer" && (
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
