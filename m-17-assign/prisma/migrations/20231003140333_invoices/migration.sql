-- CreateTable
CREATE TABLE `invoices` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `total` DECIMAL NOT NULL DEFAULT 0,
    `discount` DECIMAL NOT NULL DEFAULT 0,
    `vat` DECIMAL NOT NULL DEFAULT 0,
    `payable` DECIMAL NOT NULL DEFAULT 0,
    `user_id` BIGINT NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
