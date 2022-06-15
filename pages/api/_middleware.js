// Rate limit: 10 requests per minute (60 seconds)
// Rate Limit API Middleware without redis

import { ipRateLimit } from '../../lib/ip-rate-limit'

export async function middleware(req, res, next) {
    if (req.nextUrl.pathname === '/api') {
        const res = await ipRateLimit(req)
        if (res.status !== 200) return res

        res.headers.set('content-type', 'application/json')

        return new Response(JSON.stringify({ done: true }), {
            status: 200,
            headers: res.headers,
        })
    }
}