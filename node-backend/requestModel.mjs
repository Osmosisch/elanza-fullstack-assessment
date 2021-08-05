import { Sequelize } from 'sequelize';

export default async function RequestModel(sequelize) {
  const Request = sequelize.define('Request', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    posterId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    careKind: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    startDateAndTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDateAndTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    extraInfo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  await Request.sync();

  async function create(newRequestProps) {
    const newRequest = Request.build(newRequestProps);
    await newRequest.save();
    return newRequest;
  }

  return {
    create,
  };
}
