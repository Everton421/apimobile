/*
  Warnings:

  - Added the required column `CPF` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clients` ADD COLUMN `CPF` VARCHAR(191) NOT NULL;
