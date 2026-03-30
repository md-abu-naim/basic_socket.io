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


// Generate order id
export function generateOrderId() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')

    return `ORD-${year}${month}${day}-${random}`
}