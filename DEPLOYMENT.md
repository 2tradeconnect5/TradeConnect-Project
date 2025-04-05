# TradeConnect Platform Deployment Guide

This document provides instructions for deploying the TradeConnect platform to Vercel.

## Prerequisites

Before deploying, ensure you have:

1. A Vercel account
2. A GitHub account (for connecting to Vercel)
3. The following environment variables ready:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` - Your Stripe publishable key
   - `STRIPE_SECRET_KEY` - Your Stripe secret key
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `WHATSAPP_BUSINESS_API_TOKEN` - Your WhatsApp Business API token
   - `WHATSAPP_PHONE_NUMBER_ID` - Your WhatsApp phone number ID

## Deployment Steps

### 1. Push Code to GitHub

1. Create a new GitHub repository
2. Push the TradeConnect codebase to the repository

### 2. Connect to Vercel

1. Log in to your Vercel account
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Output Directory: .next

### 3. Configure Environment Variables

1. In the Vercel project settings, go to "Environment Variables"
2. Add all the required environment variables listed in the prerequisites

### 4. Deploy

1. Click "Deploy"
2. Wait for the build and deployment to complete
3. Once deployed, Vercel will provide a URL to access your application

### 5. Custom Domain (Optional)

1. In the Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow the instructions to configure DNS settings

## Post-Deployment

After deployment, verify:

1. User registration and authentication
2. Job posting functionality
3. Trade registration process
4. Payment processing
5. Admin dashboard access
6. WhatsApp notifications
7. Social media integration

## Troubleshooting

If you encounter issues:

1. Check Vercel deployment logs
2. Verify environment variables are correctly set
3. Ensure Supabase and Stripe are properly configured
4. Check browser console for client-side errors

## Support

For additional support, contact the development team.
