function App() {
    try {
        return (
            <div data-name="app-container">
                <Navbar />
                <Hero />
                <About/>
                <Projects />
                <Gallery />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
