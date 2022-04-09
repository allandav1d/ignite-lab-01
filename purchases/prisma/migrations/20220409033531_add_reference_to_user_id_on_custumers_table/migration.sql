/*
  Warnings:

  - A unique constraint covering the columns `[AuthUserId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "AuthUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_AuthUserId_key" ON "Customer"("AuthUserId");
