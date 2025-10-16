package visual;
import dao.UsuarioDao;
import model.Usuario;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.*;
import java.util.List;


public class usuarios extends JFrame {

    private UsuarioDao dao;
    private JTable table;
    private DefaultTableModel tableModel;

    private JTextField tfNombre, tfCorreo, tfEdad, tfId;

    public usuarios() {
        dao = new UsuarioDao();
        initComponents();
        cargarTabla();
    }

    private void initComponents() {
        setTitle("CRUD Usuarios - Swing");
        setSize(800, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Panel superior - Formulario
        JPanel panelForm = new JPanel();
        panelForm.setLayout(new BorderLayout(10, 10));

        // Panel de campos (etiqueta + input)
        JPanel panelCampos = new JPanel(new GridLayout(4, 2, 5, 5));
        panelCampos.add(new JLabel("ID (solo actualizar/eliminar):"));
        tfId = new JTextField();
        panelCampos.add(tfId);

        panelCampos.add(new JLabel("Nombre:"));
        tfNombre = new JTextField();
        panelCampos.add(tfNombre);

        panelCampos.add(new JLabel("Correo:"));
        tfCorreo = new JTextField();
        panelCampos.add(tfCorreo);

        panelCampos.add(new JLabel("Edad:"));
        tfEdad = new JTextField();
        panelCampos.add(tfEdad);

        // Panel de botones
        JPanel panelBotones = new JPanel(new FlowLayout(FlowLayout.CENTER, 10, 0));
        JButton btnAgregar = new JButton("Agregar");
        JButton btnActualizar = new JButton("Actualizar");
        JButton btnEliminar = new JButton("Eliminar");
        panelBotones.add(btnAgregar);
        panelBotones.add(btnActualizar);
        panelBotones.add(btnEliminar);

        // Añadir subpaneles al panel principal
        panelForm.add(panelCampos, BorderLayout.CENTER);
        panelForm.add(panelBotones, BorderLayout.SOUTH);

        // Agregar el panel completo al JFrame
        add(panelForm, BorderLayout.NORTH);

        // Tabla
        tableModel = new DefaultTableModel(new String[]{"ID", "Nombre", "Correo", "Edad"}, 0);
        table = new JTable(tableModel);
        JScrollPane scroll = new JScrollPane(table);
        add(scroll, BorderLayout.CENTER);

        // Eventos botones
        btnAgregar.addActionListener(e -> agregarUsuario());
        btnActualizar.addActionListener(e -> actualizarUsuario());
        btnEliminar.addActionListener(e -> eliminarUsuario());

        // Click en la tabla para llenar campos
        table.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int fila = table.getSelectedRow();
                if (fila >= 0) {
                    tfId.setText(tableModel.getValueAt(fila, 0).toString());
                    tfNombre.setText(tableModel.getValueAt(fila, 1).toString());
                    tfCorreo.setText(tableModel.getValueAt(fila, 2).toString());
                    tfEdad.setText(tableModel.getValueAt(fila, 3).toString());
                }
            }
        });
    }

    private void cargarTabla() {
        tableModel.setRowCount(0);
        List<Usuario> usuarios = dao.listarUsuarios();
        for (Usuario u : usuarios) {
            tableModel.addRow(new Object[]{u.getId(), u.getNombre(), u.getCorreo(), u.getEdad()});
        }
    }

    private void agregarUsuario() {
        try {
            String nombre = tfNombre.getText();
            String correo = tfCorreo.getText();
            int edad = Integer.parseInt(tfEdad.getText());

            Usuario u = new Usuario(0, nombre, correo, edad);
            dao.agregarUsuario(u);
            cargarTabla();
            limpiarCampos();
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Edad inválida");
        }
    }

    private void actualizarUsuario() {
        try {
            int id = Integer.parseInt(tfId.getText());
            String nombre = tfNombre.getText();
            String correo = tfCorreo.getText();
            int edad = Integer.parseInt(tfEdad.getText());

            Usuario u = new Usuario(id, nombre, correo, edad);
            dao.actualizarUsuario(u);
            cargarTabla();
            limpiarCampos();
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "ID o Edad inválidos");
        }
    }

    private void eliminarUsuario() {
        try {
            int id = Integer.parseInt(tfId.getText());
            dao.eliminarUsuario(id);
            cargarTabla();
            limpiarCampos();
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "ID inválido");
        }
    }

    private void limpiarCampos() {
        tfId.setText("");
        tfNombre.setText("");
        tfCorreo.setText("");
        tfEdad.setText("");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new usuarios().setVisible(true));
    }
}