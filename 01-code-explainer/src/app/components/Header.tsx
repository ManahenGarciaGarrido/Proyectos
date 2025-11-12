export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg p-2 bg-gray-50 border border-gray-200">
              <svg
                className="w-7 h-7 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">CodeExplainer</h1>
              <p className="text-sm text-gray-500">AI-Powered Code Analysis</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="rounded-lg px-4 py-2 bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-600">Powered by Google Gemini</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
