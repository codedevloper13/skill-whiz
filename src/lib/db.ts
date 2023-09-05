/** @format */

import { PrismaClient } from "@prisma/client";
import "server-only"; // Importing something specific to your environment.

// Declare a global variable to hold the Prisma client.
declare global {
	var cachedPrisma: PrismaClient;
}

// Define the Prisma client instance.
export let prisma: PrismaClient;

// Check the environment and create the Prisma client accordingly.
if (process.env.NODE_ENV === "production") {
	// In production, create a new PrismaClient instance.
	prisma = new PrismaClient();
} else {
	// In other environments, use a cached PrismaClient instance if available.
	if (!global.cachedPrisma) {
		global.cachedPrisma = new PrismaClient();
	}
	prisma = global.cachedPrisma;
}
