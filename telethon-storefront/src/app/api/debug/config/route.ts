import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const config = {
    MEDUSA_BACKEND_URL: process.env.MEDUSA_BACKEND_URL,
    NEXT_PUBLIC_MEDUSA_BACKEND_URL: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL,
    NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ? "SET" : "NOT SET",
    NODE_ENV: process.env.NODE_ENV,
    allMedusaEnvVars: Object.keys(process.env)
      .filter(key => key.includes('MEDUSA'))
      .reduce((obj, key) => {
        obj[key] = key.includes('KEY') ? (process.env[key] ? 'SET' : 'NOT SET') : process.env[key]
        return obj
      }, {} as Record<string, string | undefined>)
  }

  return NextResponse.json(config)
}
