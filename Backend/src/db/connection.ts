import{Sequelize}from 'sequelize'

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('postgres', 'postgres', '1234', {//USUARIO Y CONTRASEÑA DE LA BASE DE DATOS
  host: 'localhost',
  dialect: 'postgres' 
});
export default sequelize