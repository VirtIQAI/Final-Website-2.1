// src/pages/AITest.tsx
import { useState } from 'react';

export default function AITest() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: input },
        ],
      }),
    });
    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || 'No response');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">AI Proxy Test</h1>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Type your prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {response && (
        <div className="mt-4 border p-4 bg-gray-50 rounded">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}