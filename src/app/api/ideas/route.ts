import { NextResponse } from 'next/server';
import { ideas } from '../../../data/ideas';

export async function GET(request: Request) {
  // You can add query parameter handling here for search and filtering
  return NextResponse.json(ideas);
}
