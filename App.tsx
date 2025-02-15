import React from 'react';
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Component6,
  Component7,
  Component8,
  Component9,
  Component10
} from './NestedComponents';
import { Layers } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Layers className="w-12 h-12 text-gray-300" />
          </div>
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Nested Dimensions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the beauty of nested components, each featuring 10 layers of depth with unique color gradients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component1 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component2 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component3 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component4 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component5 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component6 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component7 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component8 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component9 />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Component10 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
