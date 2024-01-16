import { post } from '../services/authService'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        role: "influencer"

    })
    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleTextInput = (e) => {
        setNewUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
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
        // TODO: FIX SIGNUP 
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input name="username" type="text" value={newUser.username} onChange={handleTextInput} />
                </label>
                <label>
                    Email
                    <input name="email" type="email" value={newUser.email} onChange={handleTextInput} />
                </label>
                <label>
                    Password
                    <input name="password" type="password" value={newUser.password} onChange={handleTextInput} />
                </label>
                <label>
                    Role
                    <select name="role" value={newUser.role} onChange={handleTextInput}>
                        <option value="influencer">Influencer</option>
                        <option value="company">Company</option>
                    </select>
                </label>
                {/* Fields for Company Model */}
                {newUser.role === "company" && (
                    <div>
                        <label>
                            Company Name
                            <input name="companyName" type="text" value={newUser.companyName} onChange={handleTextInput} />
                        </label>
                        <label>
                            Industry
                            <input name="industry" type="text" value={newUser.industry} onChange={handleTextInput} />
                        </label>
                        <label>
                            Location
                            <input name="location" type="text" value={newUser.location} onChange={handleTextInput} />
                        </label>
                        <label>
                            Contact Email
                            <input name="contactEmail" type="email" value={newUser.contactEmail} onChange={handleTextInput} />
                        </label>
                        <label>
                            Contact Phone
                            <input name="contactPhone" type="text" value={newUser.contactPhone} onChange={handleTextInput} />
                        </label>
                        <label>
                            Contact Address
                            <input name="contactAddress" type="text" value={newUser.contactAddress} onChange={handleTextInput} />
                        </label>
                    </div>
                )}
                {/* Fields for inclfuencer Model */}
                {newUser.role === "influencer" && (
                    <div>
                        <label>
                            Bio
                            <textarea name="bio" value={newUser.bio} onChange={handleTextInput} />
                        </label>
                        <label>
                            Website
                            <input name="website" type="text" value={newUser.website} onChange={handleTextInput} />
                        </label>
                        <label>
                            Instagram Handle
                            <input name="instagramHandle" type="text" value={newUser.instagramHandle} onChange={handleTextInput} />
                        </label>
                        <label>
                            Followers Count
                            <input name="followersCount" type="text" value={newUser.followersCount} onChange={handleTextInput} />
                        </label>
                        {/* TODO: Add options for categories in form and model(enum) */}
                        {/* <label>x
                            Categories
                            <select name="categories" multiple value={newUser.categories} onChange={handleCategoryChange}>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                {/* Add more category options */}
                            {/* </select> */}
                        {/* </label> */}
                        <label>
                            Location
                            <input name="location" type="text" value={newUser.location} onChange={handleTextInput} />
                        </label>
                    </div>
                )}
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}




export default Signup;
