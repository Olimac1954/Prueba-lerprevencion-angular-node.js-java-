package app;
import dao.UsuarioDao;
import model.Usuario;

import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        UsuarioDao dao = new UsuarioDao();
        Scanner sc = new Scanner(System.in);
        int opcion;

        do {
            System.out.println("\n===== MENU CRUD USUARIOS =====");
            System.out.println("1. Agregar usuario");
            System.out.println("2. Listar usuarios");
            System.out.println("3. Actualizar usuario");
            System.out.println("4. Eliminar usuario");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");
            opcion = sc.nextInt();
            sc.nextLine(); // limpiar buffer

            switch (opcion) {
                case 1 -> {
                    System.out.print("Nombre: ");
                    String nombre = sc.nextLine();
                    System.out.print("Correo: ");
                    String correo = sc.nextLine();
                    System.out.print("Edad: ");
                    int edad = sc.nextInt();
                    sc.nextLine();

                    Usuario nuevo = new Usuario(0, nombre, correo, edad);
                    dao.agregarUsuario(nuevo);
                }

                case 2 -> {
                    List<Usuario> usuarios = dao.listarUsuarios();
                    System.out.println("\n--- LISTA DE USUARIOS ---");
                    for (Usuario u : usuarios) {
                        System.out.println(u);
                    }
                }

                case 3 -> {
                    System.out.print("ID del usuario a actualizar: ");
                    int id = sc.nextInt();
                    sc.nextLine();

                    System.out.print("Nuevo nombre: ");
                    String nombre = sc.nextLine();
                    System.out.print("Nuevo correo: ");
                    String correo = sc.nextLine();
                    System.out.print("Nueva edad: ");
                    int edad = sc.nextInt();
                    sc.nextLine();

                    Usuario actualizado = new Usuario(id, nombre, correo, edad);
                    dao.actualizarUsuario(actualizado);
                }

                case 4 -> {
                    System.out.print("ID del usuario a eliminar: ");
                    int id = sc.nextInt();
                    sc.nextLine();

                    dao.eliminarUsuario(id);
                }

                case 0 -> System.out.println("Saliendo...");
                default -> System.out.println("Opción inválida.");
            }
        } while (opcion != 0);

        sc.close();
    }
}
