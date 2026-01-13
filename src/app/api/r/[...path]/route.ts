import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

/**
 * shadcn Registry API Route
 * 
 * Handles requests like:
 * - /api/r/theme → returns the theme registry
 * - /api/r/index.json → returns the registry index
 * - /api/r/liquid-glass-theme.json → returns the theme JSON
 */

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const requestPath = pathSegments.join("/");
  
  try {
    // Map routes to files
    let filePath: string;
    
    if (requestPath === "theme" || requestPath === "liquid-glass-theme") {
      filePath = path.join(process.cwd(), "public/r/liquid-glass-theme.json");
    } else if (requestPath === "index" || requestPath === "index.json") {
      filePath = path.join(process.cwd(), "public/r/index.json");
    } else if (requestPath.endsWith(".json")) {
      filePath = path.join(process.cwd(), "public/r", requestPath);
    } else {
      // Try with .json extension
      filePath = path.join(process.cwd(), "public/r", `${requestPath}.json`);
    }
    
    const content = await readFile(filePath, "utf-8");
    const json = JSON.parse(content);
    
    return NextResponse.json(json, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  } catch (error) {
    console.error("Registry error:", error);
    return NextResponse.json(
      { error: "Registry item not found", path: requestPath },
      { status: 404 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
