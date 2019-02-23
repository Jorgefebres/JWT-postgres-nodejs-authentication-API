const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
	login: Sequelize.STRING,
	password: Sequelize.STRING,
},
{
	timestamps: true, //en true agrega el createdAt y updatedAt a las tablas
	underscored: true, // don't use camelcase for automatically added attributes but underscore style, so updatedAt will be updated_at
}
);

const Order = sequelize.define('order', {
	title: Sequelize.STRING,
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	},
	user_id: {
		type: Sequelize.INTEGER,
		references: {
			model: User,
			key: 'id'
		}
	}
},
{
	timestamps: true, //en true agrega el createdAt y updatedAt a las tablas
	underscored: true, // don't use camelcase for automatically added attributes but underscore style, so updatedAt will be updated_at
}
);

User.hasMany(Order, {foreignKey: 'user_id'});

module.exports = {
	User,
	Order
}
