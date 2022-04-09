/*
  Warnings:

  - You are about to drop the column `AuthUserId` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authUserId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Customer_AuthUserId_key";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "AuthUserId",
ADD COLUMN     "authUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_authUserId_key" ON "Customer"("authUserId");
