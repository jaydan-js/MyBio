function Gallery() {
    try {
        // Ganti dengan URL foto Anda sendiri
        const galleryImages = [
            { id: 1, url: '/img/01.png' },
            { id: 2, url: '/img/1.png' },
            { id: 3, url: '/img/2.jpeg' },
            { id: 4, url: '/img/3.jpg' },
            { id: 5, url: '/img/4.jpg' },
            { id: 6, url: '/img/5.jpg' },
            { id: 7, url: '/img/8.jpg' },
            { id: 8, url: '/img/11.jpg' },
            { id: 9, url: '/img/blockcore.jpeg' },
            { id: 10, url: '/img/15.jpg' },
            { id: 11, url: '/img/16.jpg' },
            { id: 12, url: '/img/17.jpg' },
            { id: 13, url: '/img/18.jpg' },
            { id: 14, url: '/img/20.jpg' },
            { id: 15, url: '/img/21.jpg' },
            { id: 16, url: '/img/22.jpg' },
            { id: 17, url: '/img/23.jpg' },
            { id: 18, url: '/img/24.jpg' },
            { id: 19, url: '/img/25.jpg' },
            { id: 20, url: '/img/26.png' },
            { id: 21, url: '/img/27.png' },
            { id: 22, url: '/img/28.png' },
            { id: 23, url: '/img/29.png' },
            { id: 24, url: '/img/30.png' },
            { id: 25, url: '/img/blockcore2.jpeg' },
            { id: 26, url: '/img/calvin.jpg' },
            { id: 27, url: '/img/cikole.jpg' },
            { id: 28, url: '/img/ipan.jpg' },
            { id: 29, url: '/img/kopgun.jpg' },
            { id: 30, url: '/img/pantai.jpg' },
            { id: 31, url: '/img/kerja.jpg' },
            { id: 32, url: '/img/blockcore.jpeg' },
            { id: 33, url: '/img/6.jpg' },
            { id: 34, url: '/img/7.jpg' },
            { id: 35, url: '/img/9.jpg' },
            { id: 36, url: '/img/10.jpg' },
            { id: 37, url: '/img/31.jpg' },
            { id: 38, url: '/img/32.jpg' },
            { id: 39, url: '/img/33.png' },
            { id: 40, url: '/img/13.jpg' },
            { id: 41, url: '/img/14.jpg' },
            { id: 42, url: '/img/19.jpg' },




            
        ];

        return (
            <section id="gallery" data-name="gallery-section" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="gallery-title" className="text-3xl font-bold text-center mb-12">Random Gallery</h2>
                    <div className="gallery-grid">
                        {galleryImages.map(image => (
                            <div key={image.id} data-name={`gallery-item-${image.id}`} className="relative overflow-hidden rounded-lg">
                                <img 
                                    src={image.url} 
                                    alt={`Gallery image ${image.id}`} 
                                    className="gallery-image rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        reportError(error);
        return null;
    }
}
