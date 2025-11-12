'use client';

import { useState } from 'react';
import { detectLanguage } from '@/app/lib/utils';

interface CodeInputProps {
  onExplain: (code: string, language: string) => void;
  isLoading: boolean;
}

const EXAMPLE_CODES = [
  {
    title: 'React useState Hook',
    language: 'javascript',
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
  },
  {
    title: 'Python List Comprehension',
    language: 'python',
    code: `# Generate squares of even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)`
  },
  {
    title: 'JavaScript Promise',
    language: 'javascript',
    code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}`
  }
];

export default function CodeInput({ onExplain, isLoading }: CodeInputProps) {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      const detectedLang = detectLanguage(code);
      onExplain(code, language || detectedLang);
    }
  };

  const loadExample = (exampleCode: string, exampleLang: string) => {
    setCode(exampleCode);
    setLanguage(exampleLang);
  };

  const clearCode = () => {
    setCode('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="code-input" className="text-lg font-semibold text-gray-700">
              Paste Your Code
            </label>
            <div className="flex items-center space-x-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
                <option value="typescript">TypeScript</option>
                <option value="php">PHP</option>
                <option value="ruby">Ruby</option>
              </select>
              {code && (
                <button
                  type="button"
                  onClick={clearCode}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <textarea
            id="code-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
            disabled={isLoading}
          />

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              {code.length} / 10,000 characters
            </div>
            <button
              type="submit"
              disabled={!code.trim() || isLoading}
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Analyzing...</span>
                </span>
              ) : (
                'Explain Code'
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Examples */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Try an Example:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EXAMPLE_CODES.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example.code, example.language)}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors text-left"
              disabled={isLoading}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800">{example.title}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                  {example.language}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 font-mono">
                {example.code.split('\n')[0]}...
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
