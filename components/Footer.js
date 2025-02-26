function Footer() {
    try {
        return (
            
                    <footer id="footer" data-name="footer" className="bg-gray-900 text-white py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h3 data-name="footer-title" className="text-2xl font-bold mb-4">Contact Me</h3>
                                <div className="flex justify-center space-x-6 mb-8">
                                    <a href="https://ngl.link/zaiidnn71506" data-name="social-message" className="text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                    </svg>

                                    </a>
                                    <a href="https://www.instagram.com/zaiidnn/" data-name="social-instagram" className="text-gray-400 hover:text-white">
                                        <i className="fab fa-instagram text-2xl"></i>
                                    </a>
                                </div>
                                <p data-name="footer-copyright" className="text-gray-400">
                                    © {new Date().getFullYear()} MyBio. All rights reserved.
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

