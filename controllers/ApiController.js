const Instagram = require("instagram-url-direct")

module.exports = {
    instagram: async (req, res) => {
        let url = req.body.url;
        try {
            Instagram(url).then(response => {
                return res.status(200).json({
                    status: true,
                    data: {
                        url: response
                    }
                })
            })
        } catch (err) {
            return res.status(500).json({
                status: false,
                error: err
            })
        }

    }
}