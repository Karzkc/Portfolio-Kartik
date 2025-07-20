import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import View from '@/models/View'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  await connectToDatabase()

  const slug = params.slug

  let view = await View.findOne({ slug })

  if (!view) {
    view = await View.create({ slug, count: 1 })
  } else {
    view.count += 1
    await view.save()
  }

  return NextResponse.json({ views: view.count })
}
