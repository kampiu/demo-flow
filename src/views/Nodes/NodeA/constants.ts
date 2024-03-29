import { DataType } from "./types"

export const DataTypeOptions = [
	{label: DataType.TINYINT, key: DataType.TINYINT},
	{label: DataType.SMALLINT, key: DataType.SMALLINT},
	{label: DataType.MEDIUMINT, key: DataType.MEDIUMINT},
	{label: DataType.INT, key: DataType.INT},
	{label: DataType.BIGINT, key: DataType.BIGINT},
	{label: DataType.FLOAT, key: DataType.FLOAT},
	{label: DataType.DOUBLE, key: DataType.DOUBLE},
	{label: DataType.DECIMAL, key: DataType.DECIMAL},
	{label: DataType.CHAR, key: DataType.CHAR},
	{label: DataType.VARCHAR, key: DataType.VARCHAR},
	{label: DataType.TEXT, key: DataType.TEXT},
	{label: DataType.TINYTEXT, key: DataType.TINYTEXT},
	{label: DataType.MEDIUMTEXT, key: DataType.MEDIUMTEXT},
	{label: DataType.LONGTEXT, key: DataType.LONGTEXT},
	{label: DataType.BINARY, key: DataType.BINARY},
	{label: DataType.VARBINARY, key: DataType.VARBINARY},
	{label: DataType.BLOB, key: DataType.BLOB},
	{label: DataType.TINYBLOB, key: DataType.TINYBLOB},
	{label: DataType.MEDIUMBLOB, key: DataType.MEDIUMBLOB},
	{label: DataType.LONGBLOB, key: DataType.LONGBLOB},
	{label: DataType.BOOL, key: DataType.BOOL},
	{label: DataType.ENUM, key: DataType.ENUM},
	{label: DataType.SET, key: DataType.SET},
	{label: DataType.JSON, key: DataType.JSON},
]
