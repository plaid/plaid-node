/**
 * Plaid Webhook Example for Next.js
 * 
 * This example shows how to properly handle Plaid webhooks in Next.js
 * to avoid the empty request body issue.
 */

import { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'

// Webhook event types
type WebhookCode = 
  | 'INITIAL_UPDATE'
  | 'HISTORICAL_UPDATE'
  | 'DEFAULT_UPDATE'
  | 'ITEM_LOGIN_REQUIRED'
  | 'ITEM_ERROR'
  | 'TRANSACTIONS_REMOVED'
  | 'PENDING_EXPIRATION'
  | 'USER_PERMISSION_REVOKED'

interface PlaidWebhook {
  webhook_code: WebhookCode
  webhook_type: string
  item_id: string
  environment: string
  [key: string]: any
}

// Webhook handlers
const webhookHandlers = {
  INITIAL_UPDATE: async (data: PlaidWebhook) => {
    console.log('Initial update received for item:', data.item_id)
    // Handle initial data sync completion
    // e.g., notify user, update UI, etc.
  },

  HISTORICAL_UPDATE: async (data: PlaidWebhook) => {
    console.log('Historical update received for item:', data.item_id)
    // Handle historical data sync completion
    // e.g., enable features that require historical data
  },

  DEFAULT_UPDATE: async (data: PlaidWebhook) => {
    console.log('Default update received for item:', data.item_id)
    // Handle regular data updates
    // e.g., refresh transaction data, update balances
  },

  ITEM_LOGIN_REQUIRED: async (data: PlaidWebhook) => {
    console.log('Login required for item:', data.item_id)
    // Handle when user needs to re-authenticate
    // e.g., send email notification, update item status
  },

  ITEM_ERROR: async (data: PlaidWebhook) => {
    console.log('Error occurred for item:', data.item_id, data.error)
    // Handle item errors
    // e.g., log error, notify support, retry logic
  },

  TRANSACTIONS_REMOVED: async (data: PlaidWebhook) => {
    console.log('Transactions removed for item:', data.item_id)
    // Handle when transactions are removed
    // e.g., update local database, notify user
  },

  PENDING_EXPIRATION: async (data: PlaidWebhook) => {
    console.log('Pending expiration for item:', data.item_id)
    // Handle when item is about to expire
    // e.g., send reminder email, prompt re-authentication
  },

  USER_PERMISSION_REVOKED: async (data: PlaidWebhook) => {
    console.log('User permission revoked for item:', data.item_id)
    // Handle when user revokes access
    // e.g., update permissions, notify admin
  }
}

// Main webhook handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get raw body data (this is the key fix for Next.js)
    const rawBody = await buffer(req)
    const webhookData: PlaidWebhook = JSON.parse(rawBody.toString())

    // Validate webhook data
    if (!webhookData.webhook_code || !webhookData.item_id) {
      console.error('Invalid webhook payload:', webhookData)
      return res.status(400).json({ error: 'Invalid webhook payload' })
    }

    // Log webhook for debugging
    console.log('Received webhook:', {
      code: webhookData.webhook_code,
      type: webhookData.webhook_type,
      itemId: webhookData.item_id,
      environment: webhookData.environment,
      timestamp: new Date().toISOString()
    })

    // Get the appropriate handler
    const handler = webhookHandlers[webhookData.webhook_code]
    
    if (handler) {
      // Process the webhook
      await handler(webhookData)
      console.log('Webhook processed successfully')
    } else {
      console.warn('No handler found for webhook code:', webhookData.webhook_code)
    }

    // Always return 200 to acknowledge receipt
    res.status(200).json({ 
      status: 'ok',
      message: 'Webhook received and processed',
      webhook_code: webhookData.webhook_code
    })

  } catch (error) {
    console.error('Webhook processing error:', error)
    
    // Log detailed error for debugging
    if (error instanceof SyntaxError) {
      console.error('JSON parsing failed. Raw body length:', req.body?.length || 0)
    }
    
    // Return 400 for client errors, 500 for server errors
    const statusCode = error instanceof SyntaxError ? 400 : 500
    res.status(statusCode).json({ 
      error: 'Webhook processing failed',
      message: error.message
    })
  }
}

// Disable Next.js body parser for this route
export const config = {
  api: {
    bodyParser: false,
  },
}

// Alternative implementation without micro dependency
export async function alternativeHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  return new Promise((resolve) => {
    const chunks: Buffer[] = []
    
    req.on('data', (chunk: Buffer) => {
      chunks.push(chunk)
    })
    
    req.on('end', async () => {
      try {
        const rawBody = Buffer.concat(chunks).toString()
        const webhookData: PlaidWebhook = JSON.parse(rawBody)
        
        // Process webhook...
        const handler = webhookHandlers[webhookData.webhook_code]
        if (handler) {
          await handler(webhookData)
        }
        
        res.status(200).json({ status: 'ok' })
        resolve(undefined)
      } catch (error) {
        console.error('Webhook error:', error)
        res.status(500).json({ error: 'Internal server error' })
        resolve(undefined)
      }
    })
  })
}
