function Navbar() {
    try {
        return (
            <nav data-name="navbar" className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" data-name="nav-logo" className="text-xl font-bold text-gray-800">Portfolio</a>
                        </div>
                        <div className="flex items-center space-x-8">
                            <a href="#projects" data-name="nav-projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                            <a href="#gallery" data-name="nav-gallery" className="text-gray-600 hover:text-gray-900">Gallery</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
