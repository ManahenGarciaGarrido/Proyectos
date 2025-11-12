import { NextRequest, NextResponse } from 'next/server';
import { explainCode } from '@/app/lib/gemini';
import { ExplanationRequest, ExplanationResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ExplanationRequest = await request.json();

    const { code, language } = body;

    // Validación
    if (!code || code.trim() === '') {
      return NextResponse.json(
        { error: 'Code is required' } as ExplanationResponse,
        { status: 400 }
      );
    }

    if (code.length > 10000) {
      return NextResponse.json(
        { error: 'Code is too long. Maximum 10,000 characters allowed.' } as ExplanationResponse,
        { status: 400 }
      );
    }

    // Llamar a Gemini API
    const explanation = await explainCode(code, language);

    return NextResponse.json(
      { explanation } as ExplanationResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in /api/explain:', error);

    return NextResponse.json(
      { error: 'Failed to generate explanation. Please try again.' } as ExplanationResponse,
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Use POST method to explain code' },
    { status: 405 }
  );
}
