const path = require('path');
const { Router } = require('express');
const Product = require('../models/Product');
const Category = require('../models/Category');
const CyrillicToTranslit = require('cyrillic-to-translit-js');
const sharp = require('sharp');
const router = Router();
const cyrillicToTranslit = new CyrillicToTranslit();

router.get('/create-product', async (req, res) => {
    try {
        if (req.query.password === 'true') {
            const categoryData = await Product.find({ isSubcategory: true });
            const categories = categoryData.map(obj => obj.name);

            res.render('admin/create-product', {
                title: 'Создать',
                categories
            });
            return;
        }
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
});

router.post('/create-product', async (req, res) => {
    try {
        let types = req.body.types;
        const keysBody = Object.keys(req.body);
        const keysFiles = Object.keys(req.files);
        let fileCounter = 0;
        let typeCounter = 0;
        const content = [];

        if (!Array.isArray(types)) types = [types];
        types.forEach(type => {
            const key = keysBody[typeCounter];
            typeCounter++;
            switch (type) {
                case 'paragraph':
                    content.push({
                        type: 'paragraph',
                        data: req.body[key]
                    });
                    break;
                case 'title':
                    content.push({
                        type: 'title',
                        title: req.body[key]
                    });
                    break;
                case 'list':
                    content.push({
                        type: 'list',
                        data: req.body[key]
                    });
                    break;
                case 'images':
                    content.push({
                        type: 'images',
                        images: getFiles(keysFiles, fileCounter, req.files)
                    });
                    fileCounter++;
                    typeCounter--;
                    break;
                case 'images-and-i':
                    content.push({
                        type: 'images',
                        images: getFiles(keysFiles, fileCounter, req.files, req.body[key])
                    });
                    fileCounter++;
                    break;
                default:
                    console.log('Default');
            }
        });

        const file = fileUpload(req.files.image, '/assets/product/img-db/');
        const product = new Product({
            isSubcategory: !!req.body.isSubcategory,
            name: req.body.name,
            translit: toTranslit(req.body.name),
            image: {
                src: file.fullPath,
                alt: file.name
            },
            content
        });

        await product.save(async () => {
            const category = new Category({
                category: req.body.category,
                translit: toTranslit(req.body.category),
                product: product._id
            });
            await category.save();
            res.redirect('/products/routes?reload=true');
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;

function toTranslit(words) {
    const result = cyrillicToTranslit
        .transform(words, '-')
        .toLowerCase();
    return result;
}

function getFiles(keysFiles, counter, reqFiles, key) {
    const keyFile = keysFiles[counter];
    let files = reqFiles[keyFile];

    if (!Array.isArray(files)) files = [files];

    if (key) {
        if (!Array.isArray(key)) key = [key];
        return getFilesHandler(files, key);
    } else {
        return getFilesHandler(files, null);
    }
}

function getFilesHandler(files, key) {
    const result = [];
    files.forEach((file, index) => {
        const f = fileUpload(file, '/assets/product/img-db/');
        result.push({
            src: f.fullPath,
            alt: f.name,
            name: key ? key[index] : null
        });
    });
    return result;
}

function fileUpload(file, direction) {
    const extension = path.extname(file.name);
    const name = path.basename(file.name, extension).toLowerCase();
    const fullPath = direction + file.md5 + extension;
    const absolutePath = path.resolve('./public/assets/product/img-db');
    sharp(file.data)
        .resize(null, 300)
        .toFile(absolutePath + '/' + file.md5 + extension, err => {
            if (err) console.log(err);
        });
    return {
        name,
        fullPath
    }
}