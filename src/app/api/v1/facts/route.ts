import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const API_URL = process.env.USELESS_FACTS_API_URL;

        if (!API_URL) {
            return new NextResponse("API URL is not configured", {status: 500});
        }

        const response = await fetch(API_URL);

        if (!response.ok) {
            return new NextResponse("Failed to fetch data from API", {status: 500});
        }

        const data = await response.json();

        return NextResponse.json({
            text: data.text,
            source: data.source,
            sourceUrl: data.source_url,
        });
        
    } catch (error) {
        console.log(error);
        return new NextResponse("Failed to get information", {status: 500});
    }
}