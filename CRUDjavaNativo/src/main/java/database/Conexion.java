package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

    private static final String URL = "jdbc:postgresql://localhost:5432/postgres";
    private static final String USER = "postgres";
    private static final String PASSWORD = "1234";

    // Método para obtener la conexión a la base de datos
    public static Connection getConnection() {
        Connection connection = null;

        try {
            // Intento de conexión usando DriverManager
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("✅ Conexión exitosa a PostgreSQL");
        } catch (SQLException e) {
            System.out.println("❌ Error al conectar a la base de datos");
            e.printStackTrace();
        }

        // Retorno la conexión (puede ser null si hubo error)
        return connection;
    }
    // Método main para probar la conexión rápidamente
    public static void main(String[] args) {
        getConnection();
    }
}

