/*
  Warnings:

  - You are about to drop the column `budgetRange` on the `ProjectInquiry` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `ProjectInquiry` table. All the data in the column will be lost.
  - You are about to drop the column `projectType` on the `ProjectInquiry` table. All the data in the column will be lost.
  - You are about to drop the column `timeline` on the `ProjectInquiry` table. All the data in the column will be lost.
  - The `status` column on the `ProjectInquiry` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `linkedin` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TeamMember` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `duration` to the `ProjectInquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectBudget` to the `ProjectInquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `services` to the `ProjectInquiry` table without a default value. This is not possible if the table is not empty.
  - Made the column `bio` on table `TeamMember` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'CLOSED', 'ARCHIVED');

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_categoryId_fkey";

-- AlterTable
ALTER TABLE "ProjectInquiry" DROP COLUMN "budgetRange",
DROP COLUMN "company",
DROP COLUMN "projectType",
DROP COLUMN "timeline",
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "otherService" TEXT,
ADD COLUMN     "projectBudget" TEXT NOT NULL,
ADD COLUMN     "services" JSONB NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "InquiryStatus" NOT NULL DEFAULT 'NEW';

-- AlterTable
ALTER TABLE "TeamMember" DROP COLUMN "linkedin",
DROP COLUMN "photoUrl",
DROP COLUMN "twitter",
DROP COLUMN "updatedAt",
ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "linkedInUrl" TEXT,
ADD COLUMN     "xUrl" TEXT,
ALTER COLUMN "bio" SET NOT NULL;

-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "featured",
ADD COLUMN     "highlight" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "ServiceCategory";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "UserRole";
