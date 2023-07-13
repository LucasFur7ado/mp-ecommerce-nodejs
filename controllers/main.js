export const main = {}

main.main = function (req, res) {
    res.render('home')
}

main.success = (req, res) => {
    res.render('success', req.query)
}

main.pending = (req, res) => {
    res.render('pending', req.query)
}

main.failure = (req, res) => {
    res.render('failure', req.query)
}

main.renderDetail = function (req, res) {
    res.render('detail', req.query)
}