const { DataTypes, UUID, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Products", {
    distribuidor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingreso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: true,
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
};


//lista de DataTypes:
// STRING, CHAR, TEXT, BLOB, INTEGER, BIGINT, FLOAT, REAL, DOUBLE, DECIMAL, NUMERIC, BOOLEAN, DATE, DATEONLY, TIME, TIMEONLY,
// ARRAY, JSON, UUID, UUIDV4, HSTORE, GEOMETRY, GEOGRAPHY, RANGE, ENUM, BLOB, RANGE, REAL, DOUBLE, DECIMAL, NUMERIC, BOOLEAN, DATE, DATEONLY, TIME, TIMEONLY,

//lista de UUID:
// UUID, UUIDV1, UUIDV2, UUIDV3, UUIDV4, UUIDV5

//STRING = VARCHAR(255), se usa para texto largo
//CHAR = CHAR(1), se usa para texto corto
//TEXT = TEXT, se usa para texto largo
//BLOB = BLOB, se usa para archivos binarios
//INTEGER = INTEGER, se usa para numeros enteros
//BIGINT = BIGINT, se usa para numeros enteros grandes
//FLOAT = FLOAT, se usa para numeros flotantes
//REAL = REAL, se usa para numeros flotantes
//DOUBLE = DOUBLE, se usa para numeros flotantes
//DECIMAL = DECIMAL, se usa para numeros decimales
//NUMERIC = NUMERIC, se usa para numeros enteros y decimales
//BOOLEAN = BOOLEAN, se usa para valores logicos
//DATE = DATE, se usa para fechas
//DATEONLY = DATEONLY, se usa para fechas
//TIME = TIME, se usa para horas
//TIMEONLY = TIMEONLY, se usa para horas
//ARRAY = ARRAY, se usa para arreglos
//JSON = JSON, se usa para objetos
//UUID = UUID, se usa para identificadores univocos
//UUIDV1 = UUIDV1, se usa para identificadores univocos
//UUIDV2 = UUIDV2, se usa para identificadores univocos
//UUIDV3 = UUIDV3, se usa para identificadores univocos
//UUIDV4 = UUIDV4, se usa para identificadores univocos
//HSTORE = HSTORE, se usa para objetos
//GEOMETRY = GEOMETRY, se usa para geometrias
//GEOGRAPHY = GEOGRAPHY, se usa para geografias
//RANGE = RANGE, se usa para rangos
//ENUM = ENUM, se usa para enumeraciones
//BLOB = BLOB, se usa para archivos binarios  
//RANGE = RANGE, se usa para rangos
//REAL = REAL, se usa para numeros flotantes
//DOUBLE = DOUBLE, se usa para numeros flotantes
//DECIMAL = DECIMAL, se usa para numeros decimales


// allowNull = true, se usa para permitir que el campo sea nulo, por defecto es false