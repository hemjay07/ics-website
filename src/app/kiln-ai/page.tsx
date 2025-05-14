
import Navigation from '@/components/Navigation'

export default function KilnAIPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="text-center max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Kiln <span className="text-primary">AI</span>
          </h1>
          <p className="text-xl text-gray-600">
            This is the Kiln AI page. Here we'll explain Kiln AI's role in generating management systems that meet government needs.
          </p>
        </div>
      </div>
    </main>
  )
}