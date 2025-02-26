function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 data-name="footer-title" className="text-2xl font-bold mb-4">Let's Connect</h3>
                        <div className="flex justify-center space-x-6 mb-8">
                            <a href="#" data-name="social-github" className="text-gray-400 hover:text-white">
                                <i className="fab fa-github text-2xl"></i>
                            </a>
                            <a href="#" data-name="social-linkedin" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="#" data-name="social-instagram" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                        </div>
                        <p data-name="footer-copyright" className="text-gray-400">
                            © {new Date().getFullYear()} Portfolio. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
