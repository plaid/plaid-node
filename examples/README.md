# Plaid Node.js Examples

This directory contains practical examples for using the Plaid Node.js client library.

## Available Examples

### Webhook Implementation

**File**: `webhook-example.ts`

A complete, production-ready example of how to implement Plaid webhooks in Next.js applications. This example specifically addresses the common issue of empty request bodies in Next.js webhook endpoints.

**Key Features**:
- ✅ Handles all webhook types (`INITIAL_UPDATE`, `HISTORICAL_UPDATE`, etc.)
- ✅ Proper error handling and logging
- ✅ TypeScript types for type safety
- ✅ Multiple implementation approaches
- ✅ Next.js body parsing fix

**Usage**:
```bash
# Install dependencies
npm install micro

# Copy the example to your Next.js project
cp examples/webhook-example.ts pages/api/webhook.ts
```

**Quick Start**:
1. Copy the example file to your Next.js API routes
2. Install the `micro` package: `npm install micro`
3. Configure your webhook URL in the Plaid dashboard
4. Test with sandbox environment

## Getting Help

If you encounter issues with webhooks or need help implementing other Plaid features:

1. **Check the troubleshooting guide**: `../WEBHOOK_TROUBLESHOOTING.md`
2. **Review the main README**: `../README.md`
3. **Open an issue** on GitHub
4. **Check Plaid documentation**: https://plaid.com/docs/

## Contributing

Want to add more examples? Great! Please:

1. Follow the existing code style
2. Include proper TypeScript types
3. Add error handling
4. Include usage instructions
5. Test your examples thoroughly

## Related Resources

- [Plaid API Documentation](https://plaid.com/docs/api/)
- [Plaid Webhooks Guide](https://plaid.com/docs/api/webhooks/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
