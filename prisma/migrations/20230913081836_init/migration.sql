-- AlterTable
ALTER TABLE "Kampania" ADD COLUMN     "coreId" INTEGER;

-- CreateTable
CREATE TABLE "CoreKamp" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CoreKamp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Kampania" ADD CONSTRAINT "Kampania_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "CoreKamp"("id") ON DELETE SET NULL ON UPDATE CASCADE;
