// Rate limit: 10 requests per minute (60 seconds)
// Rate Limit API Middleware

export default function middleware(req, res, next) {
    // Set rate limit headers
    res.setHeader("X-RateLimit-Limit", "10");
    res.setHeader("X-RateLimit-Remaining", "9");
    res.setHeader("X-RateLimit-Reset", "60");

    // Reset rate limit in 60 seconds
    const reset = new Date(Date.now() + 60 * 1000);
    res.setHeader("X-RateLimit-Reset", reset.toUTCString());

    if (req.method === "POST") {
        if (req.headers["x-ratelimit-remaining"] === "0") {
            if (req.headers["x-ratelimit-reset"] > Date.now()) {
                res.status(429).send("Rate limit exceeded");
                return;
            } else {
                res.setHeader("X-RateLimit-Remaining", "10");
                res.setHeader("X-RateLimit-Reset", reset.toUTCString());
            }
        }
        // Update remaining requests
        res.setHeader("X-RateLimit-Remaining", req.headers["x-ratelimit-remaining"] - 1);
    }
    next();
}
