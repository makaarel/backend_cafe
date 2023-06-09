'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_transaksi', {
      id_detail_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_transaksi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "transaksi",
          key: "id_transaksi"
        }
      },
      id_menu: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "menu",
          key: "id_menu"
        }
      },
      qty: {
        type: Sequelize.INTEGER
      },
      harga: {
        type: Sequelize.INTEGER(11),
      },
      jumlah: {
        type: Sequelize.INTEGER(11),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_transaksi');
  }
};