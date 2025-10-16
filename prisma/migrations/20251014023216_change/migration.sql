/*
  Warnings:

  - You are about to drop the column `nama` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `transaksi` DROP FOREIGN KEY `Transaksi_id_user_fkey`;

-- DropIndex
DROP INDEX `Transaksi_id_user_fkey` ON `transaksi`;

-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `nama`,
    DROP COLUMN `password`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `pasword` VARCHAR(191) NOT NULL DEFAULT '123';
