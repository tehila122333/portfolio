'use client';

import { useState, useRef, useEffect } from 'react';
import type { Metadata } from 'next';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I can answer questions about this portfolio. Try asking me about projects, skills, or experience.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;
    if (isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setError('');

    // Add user message to chat
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: userMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Add assistant response to chat
      setMessages([
        ...newMessages,
        { role: 'assistant', content: data.response },
      ]);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Ask My Portfolio</h1>
        <p className="text-lg text-zinc-400">
          Ask questions about my projects, skills, experience, or anything else in my portfolio.
        </p>
      </div>

      {/* Example questions */}
      <div className="mb-6 border border-zinc-800 rounded-lg p-4">
        <p className="text-sm text-zinc-400 mb-2">Try asking:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'What projects show React skills?',
            'Do you have cloud experience?',
            'Tell me about ActivityProgress',
            'What technologies do you use?',
          ].map((question) => (
            <button
              key={question}
              onClick={() => setInput(question)}
              className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md hover:bg-zinc-700 transition-colors"
              disabled={isLoading}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Chat messages */}
      <div className="border border-zinc-800 rounded-lg bg-zinc-900/50 mb-4 h-[500px] overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-white text-zinc-950'
                    : 'bg-zinc-800 text-zinc-100'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 text-zinc-100 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-800 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about my portfolio..."
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-white text-zinc-950 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
