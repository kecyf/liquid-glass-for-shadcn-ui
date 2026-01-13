import { NextRequest, NextResponse } from "next/server";

// TODO: Add Stripe integration
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // TODO: Create Stripe Checkout Session
    // const session = await stripe.checkout.sessions.create({
    //   mode: "payment",
    //   customer_email: email,
    //   line_items: [
    //     {
    //       price: process.env.STRIPE_PRICE_ID,
    //       quantity: 1,
    //     },
    //   ],
    //   success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
    // });
    // return NextResponse.json({ url: session.url });

    // For demo purposes, redirect to success page
    return NextResponse.json({ 
      url: "/success",
      message: "Demo mode - Stripe not configured" 
    });

  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
