import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Lazy initialization of OpenAI
let openai: OpenAI | null = null;
function getOpenAI() {
  if (!openai) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY environment variable is required");
    }
    openai = new OpenAI({ apiKey });
  }
  return openai;
}

export async function POST(req: Request) {
  try {
    const { prompt, model, resolution } = await req.json();

    if (model === 'gemini') {
      return NextResponse.json({ error: "Gemini generation must be handled on the client side." }, { status: 400 });
    }

    // Refined Pixel Art Prompt
    const refinedPrompt = `Professional high-quality pixel art of: ${prompt}. 
    Style: crisp pixel edges, 16-bit aesthetic, limited vibrant color palette, clean sprites, no anti-aliasing, grid-aligned, game-ready asset, dark premium game-tech vibe. 
    Avoid: blurry edges, photographic realism, 3D gradients, messy pixels.`;

    try {
      const ai = getOpenAI();
      const response = await ai.images.generate({
        model: "dall-e-3",
        prompt: refinedPrompt,
        n: 1,
        size: "1024x1024",
        quality: model === 'gpt-image-1' ? 'hd' : 'standard',
      });

      return NextResponse.json({ imageUrl: response.data[0].url });
    } catch (error: any) {
      console.error("OpenAI Error:", error);
      return NextResponse.json({ error: `OpenAI Generation Failed: ${error.message}` }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
