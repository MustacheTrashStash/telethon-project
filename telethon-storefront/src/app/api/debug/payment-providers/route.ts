import { sdk } from "@lib/config"

export async function GET() {
  try {
    // Get cart to see what payment methods are available
    const response = await fetch(`${process.env.MEDUSA_BACKEND_URL}/store/payment-providers`, {
      headers: {
        'x-publishable-api-key': process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || '',
      }
    })
    
    const data = await response.json()
    
    return Response.json({
      status: "success",
      paymentProviders: data,
      backendUrl: process.env.MEDUSA_BACKEND_URL,
      hasPublishableKey: !!process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
      hasStripeKey: !!process.env.NEXT_PUBLIC_STRIPE_KEY,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return Response.json({
      status: "error",
      error: String(error),
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
