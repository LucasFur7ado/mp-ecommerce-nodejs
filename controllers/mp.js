import mercadopago from 'mercadopago'

export const mp = {}

mp.notifications = (req, res) => {
    console.log("HEADERS => ", req.headers)
    console.log("QUERY => ", req.query)
    console.log("PARAMS => ", req.params)
    console.log("BODY => ", req.body)
    console.log("USER => ", req.user)
    console.log("COOKIES => ", req.cookies)
    console.log("URL => ", req.url)
    res.send('ok')
}

mp.createPayment = (req, res) => {
    let { title, image_url } = req.body

    if(!title || !image_url)
        return res.status(400).send('bad request')

    image_url = image_url.replace('./assets', process.env.URL)

    const preference = {
        items: [
            {
                id: '0007',
                title,
                description: 'Dispositivo móvil de Tienda e-commerce',
                picture_url: image_url,
                unit_price: 7000,
                currency_id: 'UYU',
                quantity: 1,
            },
        ],
        payer: {
            name: 'Lalo',
            surname: 'Landa',
            email: 'test_user_17805074@testuser.com',
            phone: {
                area_code: '598',
                number: 98564878
            },
            address: {
                zip_code: '60000',
                street_name: 'calle falsa 123',
                street_number: 7,
            }
        },
        payment_methods: {
            excluded_payment_methods: [{ id: 'visa' }],
            installments: 6,
        },
        back_urls: {
            success: process.env.URL + "/success",
            failure: process.env.URL + "/failure",
            pending: process.env.URL + "/pending"
        },
        auto_return: "approved",
        statement_descriptor: 'Compra Móvil',
        external_reference: process.env.EXTERNAL_REFERENCE,
        notification_url: process.env.URL + '/notifications',
    }

    mercadopago.preferences
        .create(preference)
        .then(response => {
            res.send({
                id: response.body.id
            })
        })
        .catch(error => {
            console.log({
                mp_error: error
            })
            res.status(400).send('something went wrong')
        })
}