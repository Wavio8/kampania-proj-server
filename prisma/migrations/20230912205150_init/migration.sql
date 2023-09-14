-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kampania" (
    "id" SERIAL NOT NULL,
    "selectNet" TEXT[],
    "text" TEXT NOT NULL,
    "inline" BOOLEAN DEFAULT false,
    "butStand" TEXT[],
    "butInl" TEXT[],
    "userId" INTEGER,

    CONSTRAINT "Kampania_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialNetwork" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maxButStand" INTEGER,
    "maxLenStand" INTEGER,
    "linkStand" BOOLEAN,
    "maxButInl" INTEGER,
    "maxLenInl" INTEGER,
    "linkInl" BOOLEAN,
    "kampaniaId" INTEGER,

    CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Kampania" ADD CONSTRAINT "Kampania_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialNetwork" ADD CONSTRAINT "SocialNetwork_kampaniaId_fkey" FOREIGN KEY ("kampaniaId") REFERENCES "Kampania"("id") ON DELETE SET NULL ON UPDATE CASCADE;
