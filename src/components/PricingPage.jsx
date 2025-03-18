import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import Navbar from "./navbar"

function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
<<<<<<< HEAD
{/*       <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-black"
              >
                <path d="M3 3h18v18H3z" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
            <span className="text-xl font-bold">SQuerrel</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How it Works
            </Link>
            <Link to="/examples" className="text-gray-300 hover:text-white transition-colors">
              Examples
            </Link>
            <Link to="/pricing" className="text-white font-medium">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/signin" className="text-gray-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              to="/page"
              className="bg-green-500 hover:bg-green-600 text-black font-medium px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header> */}
=======
      <Navbar />
>>>>>>> e7c5538 (Navbar inconsistency fixed)

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-12 h-12 bg-gray-900 rounded transform rotate-45 top-40 left-1/4">
            <div className="w-6 h-6 m-3 text-green-500">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M3 3h18v18H3z" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute w-12 h-12 bg-gray-900 rounded transform rotate-45 top-60 right-1/3">
            <div className="w-6 h-6 m-3 text-green-500">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M3 3h18v18H3z" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute w-12 h-12 bg-gray-900 rounded transform rotate-45 bottom-40 left-1/3">
            <div className="w-6 h-6 m-3 text-green-500">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M3 3h18v18H3z" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple and Affordable <span className="text-green-500">Pricing Plans</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            Interact with databases using natural language - Generate, optimize and execute SQL queries effortlessly.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 flex flex-col h-full transition-transform hover:scale-105">
              <h3 className="text-xl font-medium mb-4">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Great for trying out SQuerrel and for personal projects</p>
              <Link
                to="/signup"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-md transition-colors mb-8"
              >
                Start for Free
              </Link>

              <div className="border-t border-gray-800 pt-6 mt-auto">
                <h4 className="text-sm text-gray-500 mb-4">FEATURES</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>10 SQL queries per day</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Basic query optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Single database connection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Community support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Basic query history</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Individual Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 flex flex-col h-full relative transition-transform hover:scale-105">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
              <h3 className="text-xl font-medium mb-4">Individual</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹400</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Best for individual developers and freelancers</p>
              <Link
                to="/signup/individual"
                className="bg-green-500 hover:bg-green-600 text-black font-medium py-3 px-4 rounded-md transition-colors mb-8"
              >
                Sign Up for Individual
              </Link>

              <div className="border-t border-gray-800 pt-6 mt-auto">
                <h4 className="text-sm text-gray-500 mb-4">FEATURES</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Unlimited SQL queries</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Advanced query optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Multiple database connections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Query history & analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 flex flex-col h-full transition-transform hover:scale-105">
              <h3 className="text-xl font-medium mb-4">Business</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹1600</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Best for teams and businesses with advanced needs</p>
              <Link
                to="/signup/business"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-md transition-colors mb-8"
              >
                Sign Up for Business
              </Link>

              <div className="border-t border-gray-800 pt-6 mt-auto">
                <h4 className="text-sm text-gray-500 mb-4">FEATURES</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Everything in Individual</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Team collaboration features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Advanced security features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Can I switch between plans?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Do you offer a free trial for paid plans?</h3>
              <p className="text-gray-400">
                Yes, we offer a 14-day free trial for both Individual and Business plans. No credit card required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards, debit cards, and UPI payments for Indian customers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Is there a discount for annual billing?</h3>
              <p className="text-gray-400">
                Yes, you can save 20% by choosing annual billing for any of our paid plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform how you work with SQL?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands of developers who are saving time and improving productivity with SQuerrel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-md transition-colors"
            >
              Get Started for Free
            </Link>
            <Link
              to="/demo"
              className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium px-6 py-3 rounded-md transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/examples" className="text-gray-400 hover:text-white transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link to="/changelog" className="text-gray-400 hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://twitter.com/squerrel" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/squerrel" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/squerrel" className="text-gray-400 hover:text-white transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/squerrel"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-black"
                >
                  <path d="M3 3h18v18H3z" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <span className="text-xl font-bold">SQuerrel</span>
            </div>

            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SQuerrel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PricingPage

