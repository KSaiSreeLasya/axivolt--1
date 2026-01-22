import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1">
              <svg
                className="w-10 h-10"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Cyan A Shape */}
                <path
                  d="M 40 100 L 70 40 L 100 100 L 85 100 L 75 75 L 55 75 L 65 100 Z"
                  fill="#048286"
                />
                {/* Cyan arch shape */}
                <path
                  d="M 50 120 Q 70 100 100 115"
                  stroke="#048286"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Yellow-green checkmark right */}
                <path
                  d="M 130 50 L 160 80 L 150 130 Q 140 140 130 135 L 115 100 Z"
                  fill="#afe332"
                />
                {/* Yellow-green swoosh */}
                <path
                  d="M 145 60 Q 160 75 155 110"
                  stroke="#afe332"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white tracking-wide">
                AXIVOLT
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-cyan text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm md:text-base">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
