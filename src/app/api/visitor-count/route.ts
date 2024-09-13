import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const countFilePath = path.join(process.cwd(), 'visitor-count.txt');

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const increment = searchParams.get('increment') === 'true';

  let count = 0;
  if (fs.existsSync(countFilePath)) {
    count = parseInt(fs.readFileSync(countFilePath, 'utf-8'));
  }

  if (increment) {
    count++;
    fs.writeFileSync(countFilePath, count.toString());
  }

  return NextResponse.json({ count });
}

export async function POST() {
  let count = 1;
  if (fs.existsSync(countFilePath)) {
    count = parseInt(fs.readFileSync(countFilePath, 'utf-8')) + 1;
  }
  fs.writeFileSync(countFilePath, count.toString());
  return NextResponse.json({ count });
}