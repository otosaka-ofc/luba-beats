-- CreateTable
CREATE TABLE `beats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_productor` INTEGER NULL,
    `titulo` VARCHAR(100) NULL,
    `genero` VARCHAR(50) NULL,
    `bpm` INTEGER NULL,
    `mood` VARCHAR(50) NULL,
    `precio` DECIMAL(8, 2) NULL,
    `archivo_preview` VARCHAR(255) NULL,
    `archivo_full` VARCHAR(255) NULL,
    `estado` ENUM('publico', 'oculto', 'eliminado') NULL DEFAULT 'publico',
    `fecha_subida` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `duracion` VARCHAR(10) NULL,
    `nota_musical` VARCHAR(10) NULL,
    `archivo_visual` VARCHAR(255) NULL,

    INDEX `id_productor`(`id_productor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favoritos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `id_beat` INTEGER NOT NULL,
    `fecha_agregado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `licencias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_beat` INTEGER NULL,
    `tipo` ENUM('leasing', 'exclusivo') NULL,
    `condiciones` TEXT NULL,
    `precio` DECIMAL(8, 2) NULL,
    `archivo_licencia` VARCHAR(255) NULL,
    `disponible` BOOLEAN NULL DEFAULT true,

    INDEX `id_beat`(`id_beat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mensajes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `remitente` INTEGER NULL,
    `destinatario` INTEGER NULL,
    `asunto` VARCHAR(100) NULL,
    `mensaje` TEXT NULL,
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `leido` BOOLEAN NULL DEFAULT false,

    INDEX `destinatario`(`destinatario`),
    INDEX `remitente`(`remitente`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlist_beats` (
    `id_playlist` INTEGER NOT NULL,
    `id_beat` INTEGER NOT NULL,

    INDEX `id_beat`(`id_beat`),
    PRIMARY KEY (`id_playlist`, `id_beat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NULL,
    `nombre` VARCHAR(100) NULL,
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_usuario` VARCHAR(50) NULL,
    `correo` VARCHAR(100) NULL,
    `contrasena` VARCHAR(255) NULL,
    `tipo` ENUM('productor', 'comprador') NOT NULL,
    `foto_perfil` VARCHAR(255) NULL,
    `banner` VARCHAR(255) NULL,
    `bio` TEXT NULL,
    `fecha_registro` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `nombre_usuario`(`nombre_usuario`),
    UNIQUE INDEX `correo`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ventas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_beat` INTEGER NULL,
    `id_usuario` INTEGER NULL,
    `id_licencia` INTEGER NULL,
    `monto` DECIMAL(8, 2) NULL,
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `archivo_entregado` VARCHAR(255) NULL,

    INDEX `id_beat`(`id_beat`),
    INDEX `id_licencia`(`id_licencia`),
    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `beats` ADD CONSTRAINT `beats_ibfk_1` FOREIGN KEY (`id_productor`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `licencias` ADD CONSTRAINT `licencias_ibfk_1` FOREIGN KEY (`id_beat`) REFERENCES `beats`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mensajes` ADD CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`remitente`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mensajes` ADD CONSTRAINT `mensajes_ibfk_2` FOREIGN KEY (`destinatario`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlist_beats` ADD CONSTRAINT `playlist_beats_ibfk_1` FOREIGN KEY (`id_playlist`) REFERENCES `playlists`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlist_beats` ADD CONSTRAINT `playlist_beats_ibfk_2` FOREIGN KEY (`id_beat`) REFERENCES `beats`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlists` ADD CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ventas` ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_beat`) REFERENCES `beats`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ventas` ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ventas` ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`id_licencia`) REFERENCES `licencias`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
