module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: "Email address is already in use."
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 20],
        isAlphanumeric: true
      }
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    numChildren: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 2],
        isInt: true
      }
    },
    hasPets: {
      type: DataTypes.BOOLEAN
    },
    provideTransport: {
      type: DataTypes.BOOLEAN
    },
    comments: {
      type: DataTypes.TEXT,
      len: [1]
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5, 5],
        inInt: true
      }
    },
    monday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    tuesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    wednesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    thursday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    friday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    saturday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    sunday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  return Parent;
};
