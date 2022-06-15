// Rate limit: 10 requests per minute (60 seconds)
// Rate Limit API Middleware
import { NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { getCookie, getCookies, setCookies } from 'cookies-next'

export default function middleware(req, res, next) {
    // Set rate limit cookie
    const rateLimitCookie = getCookie(req, 'rateLimit')
    if (!rateLimitCookie) {
        setCookies(res, {
            rateLimit: '10',
            maxAge: 60,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        })
    }

    // Check rate limit
    const rateLimit = getCookie(req, 'rateLimit')
    if (rateLimit === '0') {
        res.status(429).end()
        return
    }

    // Update rate limit
    setCookies(res, {
        rateLimit: (parseInt(rateLimit) - 1).toString(),
        maxAge: 60,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    })

    // Continue
    NextResponse.next()
}
