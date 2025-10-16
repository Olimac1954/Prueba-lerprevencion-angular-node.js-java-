package dao;

import database.Conexion;
import model.Usuario;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDao {

    // metodo para agregar un usuario a la base
    public boolean agregarUsuario(Usuario usuario) {
        String sql = "INSERT INTO usuarios (nombre, correo, edad) VALUES (?, ?, ?)";

        try (Connection conn = Conexion.getConnection();//conexion a la base de datos
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            // Asignar los valores a los parámetros
            stmt.setString(1, usuario.getNombre());
            stmt.setString(2, usuario.getCorreo());
            stmt.setInt(3, usuario.getEdad());

            stmt.executeUpdate();// Ejecuta el INSERT
            System.out.println("Usuario agregado correctamente");
            return true;

        } catch (SQLException e) {
            System.out.println("Error al agregar usuario");
            e.printStackTrace();// Muestra el detalle del error
            return false;
        }
    }

    // Listar usuarios
    public List<Usuario> listarUsuarios() {
        List<Usuario> lista = new ArrayList<>();
        String sql = "SELECT * FROM usuarios";

        try (Connection conn = Conexion.getConnection();
             Statement stmt = conn.createStatement();// Sentencia simple
             ResultSet rs = stmt.executeQuery(sql)) {// Resultado de la consulta

            // Recorrer el ResultSet y crear objetos Usuario
            while (rs.next()) {
                Usuario u = new Usuario(
                        rs.getInt("id"),
                        rs.getString("nombre"),
                        rs.getString("correo"),
                        rs.getInt("edad")
                );
                lista.add(u);// Añadir a la lista
            }

        } catch (SQLException e) {
            System.out.println("Error al listar usuarios");
            e.printStackTrace();
        }

        return lista;// Devuelve la lista de usuarios
    }

    // Actualizar usuario
    public boolean actualizarUsuario(Usuario usuario) {
        String sql = "UPDATE usuarios SET nombre=?, correo=?, edad=? WHERE id=?";//query

        try (Connection conn = Conexion.getConnection();//conexion a base
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, usuario.getNombre());
            stmt.setString(2, usuario.getCorreo());
            stmt.setInt(3, usuario.getEdad());
            stmt.setInt(4, usuario.getId());

            stmt.executeUpdate();// Ejecuta el UPDATE
            System.out.println("Usuario actualizado correctamente");
            return true;

        } catch (SQLException e) {
            System.out.println("Error al actualizar usuario");
            e.printStackTrace();
            return false;
        }
    }

    // 🔹 Eliminar usuario
    public boolean eliminarUsuario(int id) {
        String sql = "DELETE FROM usuarios WHERE id=?";

        try (Connection conn = Conexion.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, id);// ID del usuario a eliminar
            stmt.executeUpdate();// Ejecuta el DELETE osea envia el query con toda la informacion a la base de datos
            System.out.println("Usuario eliminado correctamente");
            return true;

        } catch (SQLException e) {
            System.out.println("Error al eliminar usuario");
            e.printStackTrace();
            return false;
        }
    }
}
