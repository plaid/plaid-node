# Webhook Troubleshooting Guide

This guide helps resolve common issues when implementing Plaid webhooks, particularly in Next.js applications.

## Common Issues

### 1. Empty Request Body in Next.js

**Problem**: Webhook endpoints receive empty request bodies, causing parsing errors.

**Symptoms**:
- `JSON.parse()` fails with empty string
- `req.body` is undefined or empty
- Webhook processing fails silently

**Root Cause**: Next.js API routes use `bodyParser` by default, which can interfere with raw webhook payloads.

**Solution**: Disable Next.js body parsing and handle raw body manually.

#### Next.js Fix

```typescript
import { buffer } from 'micro'

export default async function handler(req, res) {
  try {
    // Get raw body data
    const rawBody = await buffer(req)
    const body = JSON.parse(rawBody.toString())
    
    // Process webhook
    const webhookCode = body.webhook_code
    const itemId = body.item_id
    
    // Handle different webhook types
    switch (webhookCode) {
      case 'INITIAL_UPDATE':
        // Handle initial update
        break
      case 'HISTORICAL_UPDATE':
        // Handle historical update
        break
      default:
        console.log(`Unhandled webhook code: ${webhookCode}`)
    }
    
    res.status(200).json({ status: 'ok' })
  } catch (error) {
    console.error('Webhook processing error:', error)
    res.status(400).json({ error: 'Webhook processing failed' })
  }
}

// Disable Next.js body parser for this route
export const config = {
  api: {
    bodyParser: false,
  },
}
```

#### Installation

```bash
npm install micro
```

### 2. Alternative Solutions

#### Option A: Custom Middleware

```typescript
// middleware/webhookParser.ts
import { NextApiRequest, NextApiResponse } from 'next'

export function webhookParser(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk.toString()
      })
      
      req.on('end', () => {
        try {
          req.body = JSON.parse(body)
          return handler(req, res)
        } catch (error) {
          res.status(400).json({ error: 'Invalid JSON' })
        }
      })
    } else {
      return handler(req, res)
    }
  }
}
```

#### Option B: Express-style Body Parsing

```typescript
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Parse body manually
  const chunks: Buffer[] = []
  
  req.on('data', (chunk: Buffer) => {
    chunks.push(chunk)
  })
  
  req.on('end', () => {
    try {
      const body = JSON.parse(Buffer.concat(chunks).toString())
      // Process webhook...
      res.status(200).json({ status: 'ok' })
    } catch (error) {
      res.status(400).json({ error: 'Invalid JSON' })
    }
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
```

## Webhook Implementation Best Practices

### 1. Always Verify Webhook Source

```typescript
import crypto from 'crypto'

function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}
```

### 2. Handle All Webhook Types

```typescript
const WEBHOOK_HANDLERS = {
  INITIAL_UPDATE: handleInitialUpdate,
  HISTORICAL_UPDATE: handleHistoricalUpdate,
  DEFAULT_UPDATE: handleDefaultUpdate,
  ITEM_LOGIN_REQUIRED: handleLoginRequired,
  ITEM_ERROR: handleItemError,
}

function processWebhook(webhookCode: string, data: any) {
  const handler = WEBHOOK_HANDLERS[webhookCode] || WEBHOOK_HANDLERS.DEFAULT_UPDATE
  return handler(data)
}
```

### 3. Implement Proper Error Handling

```typescript
export default async function handler(req, res) {
  try {
    const rawBody = await buffer(req)
    const body = JSON.parse(rawBody.toString())
    
    // Validate webhook data
    if (!body.webhook_code || !body.item_id) {
      return res.status(400).json({ error: 'Invalid webhook payload' })
    }
    
    // Process webhook
    await processWebhook(body.webhook_code, body)
    
    res.status(200).json({ status: 'ok' })
  } catch (error) {
    console.error('Webhook error:', error)
    
    // Log detailed error for debugging
    if (error instanceof SyntaxError) {
      console.error('JSON parsing failed. Raw body:', req.body)
    }
    
    res.status(500).json({ error: 'Internal server error' })
  }
}
```

## Testing Webhooks

### 1. Use Plaid Sandbox

```typescript
// Test webhook locally
const testWebhook = {
  webhook_code: 'INITIAL_UPDATE',
  item_id: 'test_item_id',
  new_transactions: 5,
  timestamp: new Date().toISOString()
}

// Send test request
fetch('/api/webhook', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(testWebhook)
})
```

### 2. Verify with ngrok

```bash
# Expose local server
ngrok http 3000

# Update webhook URL in Plaid dashboard
# Test with real webhooks
```

## Common Webhook Codes

| Code | Description | When Sent |
|------|-------------|-----------|
| `INITIAL_UPDATE` | First data sync complete | After initial item setup |
| `HISTORICAL_UPDATE` | Historical data sync complete | After historical data fetch |
| `DEFAULT_UPDATE` | Regular data updates | Daily/hourly updates |
| `ITEM_LOGIN_REQUIRED` | User needs to re-authenticate | When credentials expire |
| `ITEM_ERROR` | Error occurred with item | When sync fails |

## Troubleshooting Checklist

- [ ] Disabled Next.js bodyParser (`bodyParser: false`)
- [ ] Using raw body parsing (micro buffer or manual)
- [ ] Proper error handling and logging
- [ ] Webhook signature verification (if enabled)
- [ ] Testing with sandbox environment
- [ ] Checking webhook URL configuration
- [ ] Verifying environment variables

## Getting Help

If you're still experiencing issues:

1. **Check the logs** for detailed error messages
2. **Verify webhook configuration** in Plaid dashboard
3. **Test with sandbox** to isolate the issue
4. **Open a support ticket** with Plaid if the issue persists
5. **Check this troubleshooting guide** for common solutions

## Related Resources

- [Plaid Webhooks Documentation](https://plaid.com/docs/api/webhooks/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Plaid Support](https://support.plaid.com/)
