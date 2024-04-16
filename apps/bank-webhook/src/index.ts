import express from "express";
import db from "@bitpay/db/client";
const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  //TODO: Add zod validation here?
  const body = req.body;

  const paymentInformation: { token: string; userId: number; amount: number } =
    {
      token: body.token,
      userId: Number(body.user_identifier),
      amount: Number(body.amount),
    };
  try {
    await db.$transaction([
      db.balance.update({
        where: {
          userId: paymentInformation.userId,
        },
        data: {
          amount: { increment: paymentInformation.amount },
        },
      }),
      db.onRampTransaction.update({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.json({
      message: "captured",
    });
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  `WebHook is listening on ${PORT}`;
});
