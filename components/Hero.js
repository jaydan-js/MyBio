function Hero() {
    try {
        return (
            <div data-name="hero-section" className="hero-gradient text-white min-h-screen flex items-center pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6"> Hola! </h1>
                        <p data-name="hero-subtitle" className="text-xl md:text-2xl mb-8">Let introduce my self, projects, photography, work, design.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#projects" data-name="hero-projects-btn" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all">
                                View Projects
                            </a>
                            <a href="#gallery" data-name="hero-gallery-btn" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all">
                                View Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
