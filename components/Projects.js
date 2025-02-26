function Projects() {
    try {
        const projects = [
            {
                id: 1,
                title: "website lowongan pekerjaan",
                description: "Untuk mengisi kegiatan akhir tahun saya mengerjakan projek partner dengan membuat website lowongan pekerjaan khusus untuk lulusan pesantren. Latarbelakangnya adalah kesulitan mendapatkan pekerjan yang match untuk lulusan pesantren. Dengan adanya ini diharapkan kedepannya bisa mewadahi fresh graduate lulusan pesantren.",
                image: "/img/loker2.jpg",
                link: "https://lulusanpesantrenid.vercel.app/"
            },
            {
                id: 2,
                title: "website kopi",
                description: "Website ini merupakan simulasi pembayaran VA. Berisi beberapa produk kopi yang bisa ditambahkan ke cart, di checkout dan lanjut ke payment untuk generate kode pembayaran (va).",
                image: "/img/kopi2.jpg",
                link: "https://payment-va.vercel.app/"
            },
            {
                id: 3,
                title: "website sekolah",
                description: "Untuk memenuhi salah satu tugas, saya membuat sample website sekolah.",
                image: "/img/sekul2.jpg",
                link: "https://mapersis.vercel.app/"
            },
          
        ];

        return (
            <section id="projects" data-name="projects-section" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="projects-title" className="text-3xl font-bold text-center mb-12">On going Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map(project => (
                            <div key={project.id} data-name={`project-card-${project.id}`} className="project-card bg-white rounded-lg overflow-hidden">
                                <img src={project.image} alt={project.title} className="project-image w-full" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-700 font-medium"
                                    >
                                        View Project <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
