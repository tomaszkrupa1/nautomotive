import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-primary text-white py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/images/Logo1.png" 
              alt="O'Byrne Automotive Logo" 
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary-light transition">Services</a>
            <a href="#about" className="hover:text-primary-light transition">About</a>
            <a href="#contact" className="hover:text-primary-light transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Professional Mobile Mechanic</h2>
          <p className="text-xl mb-2">Fully Qualified • 10+ Years Experience</p>
          <p className="text-lg text-primary-light">Recovery • Breakdowns • Repairs • Maintenance</p>
          <p className="mt-6 text-sm">🔧 Work completed at your home or workplace 🔧</p>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Coverage Area</h3>
          <p className="text-lg font-semibold">Leeds Based • Covering All of Yorkshire</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">Full & Interim Servicing</h3>
                <p className="text-gray-700">Complete vehicle maintenance and servicing</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">Brake Work</h3>
                <p className="text-gray-700">Discs, pads, calipers, flexi's, and brake pipes</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">Suspension Work</h3>
                <p className="text-gray-700">Coil springs, shock absorbers, bottom arms, ball joints</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">Engine Work</h3>
                <p className="text-gray-700">Turbos, injectors, exhausts, and more</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">Diagnostics</h3>
                <p className="text-gray-700">Batteries, alternators, start motors & electrical work</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">Recovery & Breakdowns</h3>
                <p className="text-gray-700">Roadside assistance, jump starts, MOT collection & returns</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">Additional Services</h3>
                <p className="text-gray-700">Car key batteries, bulbs, MOT work & failure repairs</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">✓ Fully Qualified & Insured</h3>
                <p className="text-gray-700">Professional and reliable service every time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">About Us</h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p className="text-lg">
              <span className="font-bold text-primary">O'Byrne Automotive</span> is a professional mobile mechanic service operating across Yorkshire. With over 10 years of experience, we provide comprehensive vehicle repairs and maintenance at a time and location that suits you.
            </p>
            <p className="text-lg">
              Whether your vehicle needs attention at your home, workplace, or roadside, we bring professional expertise and quality workmanship to you. We're fully qualified and insured to handle all types of mechanical repairs and maintenance.
            </p>
            <p className="text-lg">
              Our mission is to make vehicle repairs that little bit easier by coming to you, saving you time and hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">📞 Phone</h3>
                <a href="tel:07740022028" className="text-xl hover:text-primary-light transition">07740 022028</a>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">📧 Email</h3>
                <a href="mailto:obyrneautomotive@gmail.com" className="text-xl hover:text-primary-light transition">obyrneautomotive@gmail.com</a>
              </div>
            </div>

            <div className="text-center border-t border-primary-light pt-8">
              <h3 className="text-xl font-bold mb-4">📱 Social Media</h3>
              <p className="mb-2">Follow us on Facebook & Instagram</p>
              <p className="text-lg font-semibold">O'Byrne Automotive</p>
            </div>

            <div className="mt-8 bg-primary-dark bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Enquiry Form</h3>
              <p className="mb-4">Please call or email with the following information:</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Your name and contact number</li>
                <li>✓ Vehicle registration and make/model</li>
                <li>✓ Your location</li>
                <li>✓ Description of the issue</li>
              </ul>
              <p className="mt-4 text-sm text-primary-light">We'll get back to you as soon as possible!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 O'Byrne Automotive. All rights reserved.</p>
          <p className="text-sm mt-2">Professional Mobile Mechanic Services • Yorkshire</p>
        </div>
      </footer>
    </main>
  )
}
