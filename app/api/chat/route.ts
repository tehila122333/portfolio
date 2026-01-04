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
    const systemPrompt = `You are an AI assistant for Tehila Friedland's portfolio website. Your job is to answer questions about her background, skills, projects, and experience based on the portfolio information provided below.

IMPORTANT RULES:
1. Answer questions about Tehila Friedland (the portfolio owner) based on the portfolio data
2. Understand that "she", "her", "Tehila", or "Tehila Friedland" all refer to the portfolio owner
3. When asked if she's "good" or "recommended", cite specific achievements, projects, and skills from the portfolio
4. Be conversational, professional, and helpful
5. Highlight relevant projects, skills, or experience when answering questions
6. If asked about something completely unrelated to Tehila's portfolio (e.g., "What's the weather?"), politely redirect: "I can only answer questions about Tehila's portfolio and professional background."
7. Do not make up or hallucinate information not in the portfolio

PORTFOLIO INFORMATION:
${portfolioContext}

Answer questions naturally and helpfully about Tehila's background and qualifications, staying within the portfolio information provided.`;

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
