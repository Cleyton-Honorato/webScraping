module.exports = (sequilze, DataType) => {
  const Pages = sequilze.define(
    "pages",
    {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      url: {
        type: DataType.TEXT,
        required: true
      },
      read: {
        type: DataType.BOOLEAN,
        default: false
      }
    },
    {
      tableName: "pages"
    }
  );
  return Pages;
};
