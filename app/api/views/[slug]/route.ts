// app/api/views/[slug]/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import View from '@/models/View';

// Workaround for Next.js type issue
export async function GET(request: NextRequest) {
  try {
    // Extract slug from URL path
    const slug = request.nextUrl.pathname.split('/').pop();
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter is missing' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    let view = await View.findOne({ slug });

    if (!view) {
      view = await View.create({ slug, count: 1 });
    } else {
      view.count += 1;
      await view.save();
    }

    return NextResponse.json({ views: view.count });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}