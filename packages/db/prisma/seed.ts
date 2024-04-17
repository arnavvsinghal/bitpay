import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: "9999999999" },
    update: {},
    create: {
      number: "9999999999",
      password: "$2a$10$HrUqOeZxzXXh9KE/X8keS.Pu6wKuI8kjOoNKI6D1ONqZjeEKW8ULy",
      // password: 'alice',
      name: "alice",
      email: "alice@email.com",
      Balance: {
        create: {
          amount: 20000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { number: "9999999998" },
    update: {},
    create: {
      number: "9999999998",
      password: "$2a$10$TR6z4nZMtCMjcvy9/LW/5OS95AJlhOXblzD.6dEzKjDRNw3TYV/DS",
      // password: 'bob',
      name: "bob",
      email: "bob@email.com",
      Balance: {
        create: {
            amount: 2000,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "token__2",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
