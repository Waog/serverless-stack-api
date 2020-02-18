import stripePackage from "stripe";
import { calculateCost } from "./libs/billing-lib";
import { failure, success } from "./libs/response-lib";

export async function main(event, context) {
  // storage: number of notes to store
  // source: stripe token for the card to be charged
  const { storage, source } = JSON.parse(event.body);
  const amount = calculateCost(storage);
  const description = "Scratch charge";

  // Load our secret key from the  environment variables
  const stripe = stripePackage(process.env.stripeSecretKey);

  try {
    await stripe.charges.create({
      source,
      amount,
      description,
      currency: "usd"
    });
    return success({ status: true });
  } catch (e) {
    return failure({ message: e.message });
  }
}
