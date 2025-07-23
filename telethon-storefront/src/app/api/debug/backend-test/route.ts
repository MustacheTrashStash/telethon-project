import { sdk } from "@lib/config"

export async function GET() {
  try {
    // Test basic backend connection
    const regionsResponse = await sdk.admin.region.list()
    
    // Try to get payment providers
    let paymentProviders = null
    try {
      paymentProviders = await sdk.admin.paymentProvider.list()
    } catch (e) {
      paymentProviders = { error: "Could not fetch payment providers", details: e }
    }
    
    return Response.json({
      backendConnection: "SUCCESS",
      regions: regionsResponse.regions?.map(r => ({
        id: r.id,
        name: r.name,
        countries: r.countries?.map(c => c.name),
        payment_providers: r.payment_providers
      })),
      paymentProviders,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return Response.json({
      backendConnection: "FAILED",
      error: error,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}