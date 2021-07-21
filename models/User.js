const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // Table column definitions
        // define id column
        id: {
            // use the special Squelize DataTypes object provide what type
            type: DataTypes.INTEGER,
            // equal to SQL's 'NOT NULL' option
            allowNull: false,
            // instruct that this is the Primary key
            primaryKey: true,
            // turn on an auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicate email values in this table
            unique: true,
            // if allowNull false we can run data through validate before goes to table
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password has to be at least 4 characters long
                len: [4]
            }
        }
    },
    {

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;