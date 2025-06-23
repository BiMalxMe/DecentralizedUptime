import express from "express";
import { prismaClient } from "db/client";
import { authMidleware } from "./middleware";
import { WebsiteStatus } from "../../packages/db/generated/prisma";
const app = express();

app.post("/api/v1/website", authMidleware, async (req, res) => {
  const userId = req.userId!;
  const { url } = req.body.url;
  const response = await prismaClient.website.create({
    data: {
      userId,
      url,
    },
  });

  res.json({
    msg: "Sucessfull",
    id: response.id,
  });
});
app.get("/api/v1/website/status", authMidleware, async (req, res) => {
  const websiteid = req.query.websiteid as unknown as string;
  const userId = req.userId;
  const data = await prismaClient.website.findFirst({
    where: {
      id: websiteid,
      userId,
    },
    include: {
      ticks: true,
    },
  });
  res.json(data);
});
app.get("/api/v1/websites", authMidleware, async (req, res) => {
  const userId = req.userId;
  const websites = await prismaClient.website.findMany({
    where: {
      userId,
      diabled: false,
    },
  });
  res.json({
    websites,
  });
});
app.delete("/api/v1/website/", authMidleware, async (req, res) => {
  const websiteId = req.body.websiteId;
  const userId = req.userId;

  await prismaClient.website.update({
    where  :{
        id : websiteId,
        userId
    },
    data : {
        diabled : true
    }
  })

  res.json({
    message : "Deleted Website Sucessfully"
  })
});

app.listen(300);
