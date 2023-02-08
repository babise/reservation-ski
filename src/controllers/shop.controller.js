const Shop = require("../models/shop.model");

const ShopController = {
	getAll: async (req, res) => {
		const shops = await Shop.find();
		res.send(shops);
	},
	getOne: async (req, res) => {
		const shop = await Shop.findById(req.params.id);
		res.send(shop);
	},
	create: async (req, res) => {
		const shop = await Shop.create(req.body);
		res.send(shop);
	},
	update: async (req, res) => {
		const shop = await Shop.findByIdAndUpdate(req.params.id, req.body);
		res.send(shop);
	},
	delete: async (req, res) => {
		const shop = await Shop.findByIdAndRemove(req.params.id);
		res.send(shop);
	},
};

module.exports = ShopController;
