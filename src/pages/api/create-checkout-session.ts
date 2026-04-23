import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-01-27.acacia'
});

const PRICE_MAP: Record<string, { amount: number; currency: string; name: string }> = {
  'brazil': { amount: 26000, currency: 'BRL', name: 'Leitura de Tarot - Brasil' },
  'europe': { amount: 15000, currency: 'EUR', name: 'Tarot Reading - Europe' }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { package: packageType, email, name, country, nif } = body;

    if (!packageType || !email || !name) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const pricing = PRICE_MAP[packageType];
    if (!pricing) {
      return new Response(
        JSON.stringify({ error: 'Invalid package' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const metadata: Record<string, string> = {
      package: packageType,
      customer_name: name,
      country: country || ''
    };

    if (country === 'PT' && nif) {
      metadata.nif = nif;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: pricing.currency,
            product_data: {
              name: pricing.name,
              description: `Sessão completa via áudio/video + fotos + análise escrita`
            },
            unit_amount: pricing.amount
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${import.meta.env.PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${import.meta.env.PUBLIC_SITE_URL}/#pricing`,
      customer_email: email,
      metadata,
      billing_address_collection: 'required',
      tax_id_collection: {
        enabled: country === 'PT'
      }
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Stripe error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create checkout session' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};