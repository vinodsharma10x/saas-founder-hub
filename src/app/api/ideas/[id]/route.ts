import { NextResponse } from 'next/server';
import { ideas } from '../../../../data/ideas';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const idea = ideas.find(i => i.id === params.id);
  
  if (!idea) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.json(idea);
}
