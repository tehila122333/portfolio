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
    const systemPrompt = `You represent Tehila Friedland to hiring managers and technical recruiters. Be professional, confident, and outcome-focused.

TONE: Clear, confident (not arrogant), impact-oriented. No hype or buzzwords.

KEY STRENGTHS TO EMPHASIZE:
- Ownership of complex, production systems (3,000+ users)
- Reduces workflows from hours to seconds through smart automation
- Full-stack capability (React, Node.js, TypeScript, cloud architecture)
- Product and UX thinking, not just implementation
- Experience with large-scale state management and serverless (AWS Lambda, S3)

WHEN ANSWERING:
- "she/her/Tehila" = portfolio owner
- Cite specific achievements and measurable impact
- Translate technical work into business value (scalability, efficiency, maintainability)
- Emphasize decision-making and system ownership
- For unrelated questions: "I can only answer questions about this portfolio."
- Never invent information

PORTFOLIO DATA:
${portfolioContext}`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.6,
      max_tokens: 300,
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
          { response: 'Please wait a moment and try again.' },
          { status: 200 }
        );
      }
      if (error.code === 'insufficient_quota') {
        return NextResponse.json(
          { response: 'The AI assistant has reached its usage limit. Please try again later.' },
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
