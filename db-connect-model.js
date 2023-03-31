import connectDB from "../lib/db-lib-model";

export default async function handler(req, res) {
  await connectDB();

  // Perform database operations here...

  res.json({ message: "Success" });
}
