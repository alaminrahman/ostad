/*
  Warnings:

  - You are about to drop the column `user_id` on the `invoice_products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `invoice_products` DROP COLUMN `user_id`;

-- AddForeignKey
ALTER TABLE `invoice_products` ADD CONSTRAINT `invoice_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
