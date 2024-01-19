import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import { get, post } from '../services/authService'; // Assuming post is used for update
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',

        // Common user fields
        username: '', // Add other common user fields as necessary

        // Role-specific fields
        roleData: {
            // Influencer-specific fields
            bio: '',
            website: '',
            instagramUrl: '',
            category: '',
            followersCount: '',

            // Company-specific fields
            companyName: '',
            industry: '',
            location: '',
            contactEmail: '',
            contactPhone: '',
            contactAddress: '',
        }
    });

    useEffect(() => {
        if (user) {
            get(`/user/${user._id}`)
                .then(response => {
                    const userProfile = response.data;
                    setFormData({
                        name: userProfile.name,
                        email: userProfile.email,
                        username: userProfile.username,

                        // For roleData
                        roleData: user.role === 'Influencer' ? {
                            // Influencer specific fields
                            bio: userProfile.roleData.bio,
                            website: userProfile.roleData.website,
                            instagramUrl: userProfile.roleData.instagramUrl,
                            category: userProfile.roleData.category,
                            followersCount: userProfile.roleData.followersCount
                        } : {
                            // Company specific fields
                            companyName: userProfile.roleData.companyName,
                            industry: userProfile.roleData.industry,
                            location: userProfile.roleData.location,
                            contactEmail: userProfile.roleData.contactInformation.email,
                            contactPhone: userProfile.roleData.contactInformation.phone,
                            contactAddress: userProfile.roleData.contactInformation.address
                        }
                    });
                })
                .catch(error => console.error(error));
        }
    }, [user]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name in formData.roleData) {
            setFormData(prevState => ({
                ...prevState,
                roleData: {
                    ...prevState.roleData,
                    [name]: value
                }
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Construct the payload based on user role
        const payload = {
            user: {
                name: formData.name,
                email: formData.email,
                // Other user fields
            },
            roleData: formData.roleData
        };

        post(`/user/update/${user._id}`, payload)
            .then(response => {
                // Handle success and redirect to profile page
                console.log("Profile updated:", response.data);
                navigate('/profile');
            })
            .catch(error => {
                // Handle errors
                console.error("Error updating profile:", error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                {/* User fields */}
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                {/* Conditional rendering for role-specific fields */}
                {user.role === 'Influencer' && (
                    <>
                        {/* Influencer-specific fields */}
                        <div>
                            <label>Bio:</label>
                            <textarea name="bio" value={formData.roleData.bio} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Website:</label>
                            <input type="text" name="website" value={formData.roleData.website} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Instagram URL:</label>
                            <input type="text" name="instagramUrl" value={formData.roleData.instagramUrl} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Category:</label>
                            <input type="text" name="category" value={formData.roleData.category} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Followers Count:</label>
                            <input type="text" name="followersCount" value={formData.roleData.followersCount} onChange={handleInputChange} />
                        </div>
                    </>
                )}
                {user.role === 'Company' && (
                    <>
                        {/* Company-specific fields */}
                        <div>
                            <label>Company Name:</label>
                            <input type="text" name="companyName" value={formData.roleData.companyName} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Industry:</label>
                            <input type="text" name="industry" value={formData.roleData.industry} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Location:</label>
                            <input type="text" name="location" value={formData.roleData.location} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Contact Email:</label>
                            <input type="email" name="contactEmail" value={formData.roleData.contactEmail} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Contact Phone:</label>
                            <input type="text" name="contactPhone" value={formData.roleData.contactPhone} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Contact Address:</label>
                            <input type="text" name="contactAddress" value={formData.roleData.contactAddress} onChange={handleInputChange} />
                        </div>
                    </>
                )}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Update Profile</button>
            </form>
        </div>
    );
};

export default EditProfile;
