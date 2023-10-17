/*
  Warnings:

  - You are about to alter the column `publishedAt` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `startAt` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `endAt` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `lastLogin` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `publishedAt` TIMESTAMP NOT NULL,
    MODIFY `startAt` TIMESTAMP NOT NULL,
    MODIFY `endAt` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `lastLogin` TIMESTAMP NULL;

-- CreateTable
CREATE TABLE `cart` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `sessionId` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NOT NULL,
    `status` VARCHAR(100) NOT NULL,
    `userId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
