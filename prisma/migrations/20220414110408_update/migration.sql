-- AlterTable
ALTER TABLE "bookmarks" ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP DEFAULT;
