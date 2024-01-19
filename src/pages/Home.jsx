const Home = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600">
            {/* Hero Section */}
            <section className="bg-opacity-50 text-black py-16 mt-10 shadow-lg mx-40 border-2 border-gray-400 rounded-lg">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to <span className="" >IN</span>fluence</h1>
                    <p className="mt-4 text-xl">Your Gateway to Connecting with Influencers</p>
                    
                </div>
            </section>

            {/* Introduction */}
            <section className="bg-blue-300 bg-opacity-50 py-16 border border-blue-500 mx-40 my-10 sm:px-8 rounded-lg ">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold">About Us</h2>
                    <p className="mt-4 text-lg text-black">
                        InfluencerHub is a platform that helps you discover and connect with influencers in your niche. We make it easy for companies and influencers to collaborate, create authentic partnerships, and reach a wider audience.
                    </p>
                </div>
            </section>

            {/* Key Features */}
            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold">Key Features</h2>
                    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <li>
                            <p className="mt-2 text-lg text-black">Search and filter influencers by category, location, and followers count.</p>
                        </li>
                        <li>
                            <p className="mt-2 text-lg text-black">Create and manage database to collaborate with influencers.</p>
                        </li>
                        <li>
                            <p className="mt-2 text-lg text-black">Contact the influencer by sending them an email.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-gradient-to-r from-yellow-500 to-purple-600 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold">How It Works</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <p className="mt-2 text-lg text-black">Create an account on InfluencerHub.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mt-2 text-lg text-black">Search for influencers that match your criteria.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mt-2 text-lg text-black">Connect with influencers and start collaborating.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p className="mt-4 text-lg text-black">If you have any questions or need assistance, feel free to contact us:</p>
                    <p className="mt-4 text-lg text-black">Schedule a meeting with us: <a href="https://calendly.com/marvintest/30min" target="_blank" rel="noopener noreferrer">here</a></p>
                    <p className="mt-4 text-lg text-black">Email: contact@influencerhub.com</p>
                    {/* You can also add a contact form here */}
                </div>
            </section>
        </div>
    );
};

export default Home;
