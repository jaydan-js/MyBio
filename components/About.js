function About() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 data-name="footer-title" className="text-2xl font-bold mb-4">About Me</h3>
                        <p data-name="footer-copyright" className="text-gray-400">
                        Bisa dipanggil Jay, saya lahir di kota Bandung, saya seorang pelajar . Saya berpengalaman di organisasi osis selama 4 tahun terakhir, kini saya melanjutkan pendidikan berfokus pada IT dan Design. Saya menyukai traveling, hiking, design brand clothing, photography, dan selalu mencari cara untuk menyelesaikan masalah, berkembang dan belajar lebih banyak. Di halaman ini, Anda akan menemukan informasi tentang latar belakang saya, pengalaman, dan tempat-tempat pernah saya kunjungi. Jangan ragu untuk menjelajahi dan menghubungi saya jika ada pertanyaan.


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

