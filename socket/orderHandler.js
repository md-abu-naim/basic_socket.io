import { validateOrder } from "../utils/halper.js";

export const orderHandler = (io, socket) => {
    console.log('user connect', socket.id);

    // Place order
    socket.on('placeOrder', async (data, callback) => {
        try {
            console.log(`Place oder from ${socket.id}`);
            const validation = validateOrder(data)

            if (!validation.valid) {
                return callback({ success: false, message: validation.message })
            }
        } catch (error) {
            console.log(error);
        }
    })
}