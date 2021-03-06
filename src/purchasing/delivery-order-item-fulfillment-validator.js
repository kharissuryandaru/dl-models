require("should");
var validateProduct = require('../master/product-validator');
var validateSupplier = require('../master/supplier-validator');
var validateUom = require('../master/uom-validator');
var validateDeliveryOrderItem = require('../purchasing/delivery-order-item-validator');

module.exports = function (data) {

    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceOf(Object);

    data.should.have.property('purchaseOrder');
    data.purchaseOrder.should.instanceOf(Object);

    data.should.have.property('productId');
    data.productId.should.instanceOf(Object);

    data.should.have.property('product');
    data.product.should.instanceOf(Object);

    data.product.should.have.property('code');
    data.product.code.should.instanceOf(String);

    data.product.should.have.property('name');
    data.product.name.should.instanceOf(String);

    data.should.have.property('purchaseOrderQuantity');
    data.purchaseOrderQuantity.should.instanceOf(Number);

    data.should.have.property('purchaseOrderUom');
    data.purchaseOrderUom.should.instanceOf(Object);

    data.purchaseOrderUom.should.have.property('unit');
    data.purchaseOrderUom.unit.should.instanceOf(String);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceOf(Number);

    data.should.have.property('realizationQuantity');
    data.realizationQuantity.should.instanceOf(Array);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
};