import { Sequelize } from "sequelize-typescript";
import * as pg from "pg";
import { Orders } from "@/models/order.model";
import { Users } from "@/models/user.model";
import { Rooms } from "@/models/room.model";
import { Bets } from "@/models/bet.model";

export const initializeSequelize = async () => {
  const DB_NAME = process.env.DB_NAME;
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = process.env.DB_PORT;

  if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT) {
    throw new Error("One or more required environment variables are not set.");
  }

  const DB_URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  const sequelize = new Sequelize(DB_URI, {
    models: [Users, Orders, Rooms, Bets],
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
    dialectModule: pg,
  });

  try {
    await sequelize.authenticate();

    console.log("Successfully connected to DB");
  } catch (e) {
    console.error("Failed to connect to DB", e);

    throw e;
  }

  return sequelize;
};
