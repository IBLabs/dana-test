export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-red-900 dark:text-red-100 mb-6">
            Next-Gen Weather Prediction
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Leveraging cutting-edge satellite technology to deliver the most accurate weather forecasts on Earth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Satellite Technology */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-red-100 dark:border-red-900">
            <div className="h-12 w-12 bg-red-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-900 dark:text-red-100">Advanced Satellites</h3>
            <p className="text-gray-700 dark:text-gray-300">State-of-the-art satellite network providing real-time atmospheric data</p>
          </div>

          {/* AI Predictions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-red-100 dark:border-red-900">
            <div className="h-12 w-12 bg-red-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-900 dark:text-red-100">AI-Powered Forecasts</h3>
            <p className="text-gray-700 dark:text-gray-300">Machine learning algorithms process satellite data for unprecedented accuracy</p>
          </div>

          {/* Global Coverage */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-red-100 dark:border-red-900">
            <div className="h-12 w-12 bg-red-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-900 dark:text-red-100">Global Coverage</h3>
            <p className="text-gray-700 dark:text-gray-300">Comprehensive weather monitoring across every corner of the globe</p>
          </div>

          {/* Gen Z Appeal */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-xl p-6 shadow-lg text-white transform transition-transform hover:scale-105">
            <div className="h-12 w-12 bg-white/20 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">No Cap Weather 🔥</h3>
            <p className="text-white/90">
              Fr fr - our AI hits different. Get weather predictions that pass the vibe check, straight to your phone. Literally so accurate you&apos;ll be the main character of weather planning.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                #WeatherTech
              </span>
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                #OnPoint
              </span>
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                #Slay
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-red-100 dark:border-red-900">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 dark:text-gray-400">© 2024 WeatherSat Technologies</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">About</a>
            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">Contact</a>
            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
