const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-white text-black py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to <span className="text-blue-600" >IN</span>fluence</h1>
                    <p className="mt-4 text-xl">Your Gateway to Connecting with Influencers</p>
                    <img src="/images/hero-image.jpg" alt="InfluencerHub" className="mt-8 rounded-lg shadow-lg mx-auto" />
                </div>
            </section>

            {/* Introduction */}
            <section className="bg-blue-300 py-16">
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
                            <img src="/images/icon1.png" alt="Feature 1" className="mx-auto" />
                            <p className="mt-4 text-lg text-black">Search and filter influencers by category, location, and followers count.</p>
                        </li>
                        <li>
                            <img src="/images/icon2.png" alt="Feature 2" className="mx-auto" />
                            <p className="mt-4 text-lg text-black">Create and manage campaigns to collaborate with influencers.</p>
                        </li>
                        <li>
                            <img src="/images/icon3.png" alt="Feature 3" className="mx-auto" />
                            <p className="mt-4 text-lg text-black">Track campaign performance and measure ROI.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-blue-300 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold">How It Works</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <img src="/images/step1.png" alt="Step 1" className="mx-auto" />
                            <p className="mt-4 text-lg text-black">Create an account on InfluencerHub.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/step2.png" alt="Step 2" className="mx-auto" />
                            <p className="mt-4 text-lg text-black">Search for influencers that match your criteria.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/step3.png" alt="Step 3" className="mx-auto" />
                            <p className="mt-4 text-lg text-black">Connect with influencers and start collaborating.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p className="mt-4 text-lg text-black">If you have any questions or need assistance, feel free to contact us:</p>
                    <p className="mt-4 text-lg text-black">Email: contact@influencerhub.com</p>
                    {/* You can also add a contact form here */}
                </div>
            </section>
        </div>
    );
};

export default Home;
