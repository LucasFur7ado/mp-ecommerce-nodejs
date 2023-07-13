export const main = {}

main.main = function (req, res) {
    res.render('home')
}

main.renderDetail = function (req, res) {
    res.render('detail', req.query)
}