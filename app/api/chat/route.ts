import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getPortfolioContext } from '@/data/portfolio';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          response: 'The AI assistant is not configured yet. Please add your OpenAI API key to the environment variables.'
        },
        { status: 200 }
      );
    }

    // Initialize OpenAI client (lazy initialization to avoid build-time errors)
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Get portfolio context
    const portfolioContext = getPortfolioContext();

    // Create system prompt
    const systemPrompt = `You are an AI assistant for a portfolio website. Your job is to answer questions ONLY about the portfolio content provided below.

IMPORTANT RULES:
1. Only answer questions based on the portfolio information provided
2. If asked about something not in the portfolio, respond with: "I can only answer questions about this portfolio."
3. Be concise and professional
4. Highlight relevant projects, skills, or experience when appropriate
5. Do not make up or hallucinate information

PORTFOLIO INFORMATION:
${portfolioContext}

Answer questions naturally and helpfully, but stay strictly within the bounds of the portfolio information.`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('OpenAI API error:', error);

    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { response: 'Invalid API key. Please check your OpenAI API key configuration.' },
          { status: 200 }
        );
      }
      if (error.status === 429) {
        return NextResponse.json(
          { response: 'Rate limit exceeded. Please try again in a moment.' },
          { status: 200 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
