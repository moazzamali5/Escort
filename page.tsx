import { ModelGrid } from './ModelGrid'
import { Header } from './Header'
import { Footer } from './Footer'
import { Services } from './Services'
import { FAQ } from './FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-pink-500">
          VIP Escort Services
        </h1>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Experience luxury and discretion with our elite companions. Browse our selection of stunning models and discover the perfect match for your desires.
        </p>
        <ModelGrid />
        <Services />
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
