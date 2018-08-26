const News = require('../../db/models/news');

exports.getNews = () => new Promise(async (resolve, reject) => {
    try {
        const result = await News.find();

        resolve({
            success: true,
            data: result
        });
    }
    catch (err) {
        reject(err);
    }
});

exports.getNewsById = ({id}) => new Promise(async (resolve, reject) => {
    try {
        if (!id) {
            resolve({
                success: false,
                message: "Id required"
            });
            return;
        }

        const result = await News.findById(id);

        resolve({
            success: true,
            data: result
        });
    }
    catch (err) {
        reject(err);
    }
});

exports.setNews = ({title, text, date}) => new Promise(async (resolve, reject) => {
    try {
        if (!title) {
            resolve({
                success: false,
                message: "Title required"
            });
            return;
        }
        const newNews = new News({
            title,
            text,
            date
        });

        const result = await newNews.save();

        resolve({
            success: true,
            data: result
        });
    }
    catch (err) {
        reject(err);
    }
})

