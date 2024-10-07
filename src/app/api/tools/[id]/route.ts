import { NextResponse } from 'next/server';
import { tools } from '../../../../data/tools';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const tool = tools.find(t => t.id === params.id);
  
  if (!tool) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.json(tool);
}
