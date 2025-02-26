function Projects() {
    try {
        const projects = [
            {
                id: 1,
                title: "E-Commerce Platform",
                description: "A full-featured online shopping platform built with React",
                image: "/img/kopi2.jpg",
                link: "https://payment-va.vercel.app/"
            },
            {
                id: 2,
                title: "Task Management App",
                description: "Collaborative task management solution for teams",
                image: "/img/loker2.jpg",
                link: "https://lulusanpesantrenid.vercel.app/"
            },
            {
                id: 3,
                title: "Social Media Dashboard",
                description: "Analytics and management dashboard for social media",
                image: "/img/sekul2.jpg",
                link: "https://mapersis.vercel.app/"
            },
            {
                id: 4,
                title: "Weather Application",
                description: "Real-time weather forecasting application",
                image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
                link: "https://example.com/project4"
            },
            {
                id: 5,
                title: "Portfolio Website",
                description: "Professional portfolio website template",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
                link: "https://example.com/project5"
            },
            {
                id: 6,
                title: "Portfolio Website",
                description: "Professional portfolio website template",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
                link: "https://example.com/project5"
            }
        ];

        return (
            <section id="projects" data-name="projects-section" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="projects-title" className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
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
