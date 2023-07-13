import mercadopago from 'mercadopago'

export const mp = {}

mp.createPayment = (req, res) => {
    const { title, image_url } = req.body

    const preference = {
        items: [
            {
                id: 1234,
                title,
                description: 'Dispositivo móvil de Tienda e-commerce',
                image_url,
                unit_price: 100,
                quantity: 1,
            },
        ],
        back_urls: {
            success: process.env.URL + "/success",
            failure: process.env.URL + "/failure",
            pending: process.env.URL + "/pending"
        },
        auto_return: "approved",
        notification_url: process.env.URL + '/notifications'
    }

    mercadopago.preferences
        .create(preference)
        .then(response => {
            res.send({
                id: response.body.id
            })
        })
        .catch(error => {
            console.log({ error })
            res.status(400).send('something went wrong')
        })
}