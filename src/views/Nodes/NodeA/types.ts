/** 数据类型 */
export const enum DataType {
	// 整数类型
	TINYINT = "TINYINT",
	SMALLINT = "SMALLINT",
	MEDIUMINT = "MEDIUMINT",
	INT = "INT",
	BIGINT = "BIGINT",
	// 浮点数类型
	FLOAT = "FLOAT",
	DOUBLE = "DOUBLE",
	// 定点数类型
	DECIMAL = "DECIMAL",
	// 字符串类型
	CHAR = "CHAR",
	VARCHAR = "VARCHAR",
	// 文本类型
	TEXT = "TEXT",
	TINYTEXT = "TINYTEXT",
	MEDIUMTEXT = "MEDIUMTEXT",
	LONGTEXT = "LONGTEXT",
	//二进制字符串类型
	BINARY = "BINARY",
	VARBINARY = "VARBINARY",
	// 二进制文本类型：
	BLOB = "BLOB",
	TINYBLOB = "TINYBLOB",
	MEDIUMBLOB = "MEDIUMBLOB",
	LONGBLOB = "LONGBLOB",
	// 布尔型：
	BOOL = "BOOL",
	// 枚举类型
	ENUM = "ENUM",
	// 集合类型
	SET = "SET",
	// JSON 类型：
	JSON = "JSON"
}
