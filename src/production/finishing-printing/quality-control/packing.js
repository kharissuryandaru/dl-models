'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var PackingItemModel = require("./packing-item");

module.exports = class Packing extends BaseModel {
    constructor(source) {
        super('packing', '1.0.0');

        // Define properties.
        this.code = '';
        this.productionOrderId = {};
        this.productionOrderNo = "";
        this.orderType = "";
        this.salesContractNo = "";
        this.designCode = "";
        this.designNumber = "";

        //Buyer detail
        this.buyerId = {};
        this.buyerCode = "";
        this.buyerName = "";
        this.buyerAddress = "";
        this.buyerType = "";

        this.date = new Date();
        this.packingUom = "";
        this.colorCode = "";
        this.colorName = "";
        this.colorType = "";

        this.materialConstructionFinishId = {};
        this.materialConstructionFinishName = "";

        this.materialId = {};
        this.material = "";

        this.materialWidthFinish = "";

        this.construction = "";

        // Jenis Pengiriman dan Jenis Barang Jadi
        this.deliveryType = "";
        this.finishedProductType = "";

        this.motif = "";
        this.items = [];
        this.status = "";
        this.accepted = false;
        this.declined = false;
        this.copy(source);
        this.items = this.items.map(item => new PackingItemModel(item));
    }
};
