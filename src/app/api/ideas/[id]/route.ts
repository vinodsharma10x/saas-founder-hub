import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'ideas', `${id}.md`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContent);
    return NextResponse.json({ content });
  } catch (err) {
    return NextResponse.json({ content: null });
  }
}
