import React from 'react';

export default function App() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mein Küchenplaner</h1>
      <details className="mb-4" open>
        <summary className="cursor-pointer text-lg font-semibold">1. Wand & Boden</summary>
        <div className="mt-3 space-y-2">
          <label className="block">Wandmaterial
            <select className="block w-full border p-2 rounded">
              <option>Mauerwerk</option>
              <option>Leichtbau</option>
            </select>
          </label>
          <label className="block">Fußbodenmaterial
            <input className="block w-full border p-2 rounded" />
          </label>
          <label className="block">Fußboden - Farbton
            <input className="block w-full border p-2 rounded" />
          </label>
        </div>
      </details>
    </div>
  );
}
