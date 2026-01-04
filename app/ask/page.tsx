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
      content: 'Hi! I can help you learn about Tehila\'s professional background and technical expertise. Ask me anything about her experience, projects, or qualifications.',
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
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Ask My Portfolio</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mb-6"></div>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Ask questions about my background, technical skills, and professional experience. This AI assistant provides hiring-focused insights based on my portfolio.
        </p>
      </div>

      {/* Example questions */}
      <div className="mb-8 border border-[var(--border-subtle)] rounded-xl p-6 bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)]">
        <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">Suggested Questions:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Is she recommended for a frontend role?',
            'What complex systems has she built?',
            'Does she have production experience?',
            'What is her biggest technical achievement?',
          ].map((question) => (
            <button
              key={question}
              onClick={() => setInput(question)}
              className="text-xs bg-[var(--accent-tertiary-light)] text-[var(--accent-tertiary)] border border-[var(--accent-tertiary)]/30 px-4 py-2 rounded-lg hover:border-[var(--accent-tertiary)] transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-[var(--accent-tertiary)]/20"
              disabled={isLoading}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Chat messages */}
      <div className="border border-[var(--border-subtle)] rounded-xl bg-gradient-to-br from-[var(--surface-dark)] to-[#0a0a0d] mb-6 h-[500px] overflow-y-auto p-6 flex flex-col">
        <div className="space-y-4 flex-1">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-xl p-4 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary-hover)] text-black font-medium shadow-lg shadow-[var(--accent-primary)]/30'
                    : 'bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-dark)] text-zinc-100 border border-[var(--border-subtle)]'
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
              <div className="bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-dark)] text-zinc-100 rounded-xl p-4 border border-[var(--border-subtle)]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-[var(--accent-secondary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-[var(--accent-tertiary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300 text-sm font-medium">
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
          className="flex-1 bg-gradient-to-r from-[var(--surface-mid)] to-[var(--surface-dark)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[var(--accent-primary)] transition-colors duration-300"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary-hover)] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[var(--accent-primary)]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
