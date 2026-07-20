import express from 'express';
import userroute from "./routes/user.routes.mjs";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const app = express();
const port = 3000;

// Middleware 
app.use("/users", users); 

app.get('/',(req,res)=>{

    res.send("Hello  World 2")

}); 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})


const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {

  const user = await prisma.user.create({

    data: { email: "test@example.com", name: "Test User" },

  });

  console.log("Created:", user);

  const all = await prisma.user.findMany();

  console.log("All users:", all);
  
}

main().finally(() => prisma.$disconnect());