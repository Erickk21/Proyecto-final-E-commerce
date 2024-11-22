import { connectToDatabase } from "../utils/mysql.js";

export const nuevaVentaControllers = async (req, res) => {
  try {
    const { producto, cantidad, total } = req.body;

    const connection = await connectToDatabase();

    connection.query(`
            INSERT INTO ventas (
                producto, cantidad, total
            ) VALUES (?,?,?)
        `,
      [producto, cantidad, total]
    );

    return res.status(201).json({ message: "Venta realizada" });
  } catch (error) {
    return res.status(500).json({ message: "ERROR[NUEVA_VENTA]: " + error });
  }
};
