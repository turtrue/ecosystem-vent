const path = require('path');
const { Router } = require('express');
const Product = require('../models/Product');
const sharp = require('sharp');
const router = Router();

router.get('/create-product', (req, res) => {
    try {
        res.render('admin/create-product', {
            title: 'Создать продукт'
        });
    } catch (e) {
        console.log(e);
    }
});

router.post('/create-product', async (req, res) => {
    try {
        let types = req.body.types;
        delete req.body.types;
        const keysBody = Object.keys(req.body);
        const keysFiles = Object.keys(req.files);
        let fileCounter = 0;
        let typeCounter = 0;
        const content = [];

        if (!Array.isArray(types)) types = [types];
        types.forEach(type => {
            const keyBody = keysBody[typeCounter];
            typeCounter++;
            switch (type) {
                case 'paragraph':
                    content.push({
                        type: 'paragraph',
                        data: req.body[keyBody]
                    });
                    break;
                case 'title':
                    content.push({
                        type: 'title',
                        title: req.body[keyBody]
                    });
                    break;
                case 'list':
                    content.push({
                        type: 'list',
                        data: req.body[keyBody]
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
                        images: getFiles(keysFiles, fileCounter, req.files, req.body[keyBody])
                    });
                    fileCounter++;
                    break;
                default:
                    console.log('Default');
                    break;
            }
        });

        const f = fileUpload(req.files.productImage, '/assets/product/img-db/');
        const product = new Product({
            category: req.body.productCategory,
            title: req.body.productName,
            image: {
                src: f.fullPath,
                alt: f.name
            },
            content
        });
        await product.save();

        res.render('admin/id-product', {
            title: 'ID',
            id: product._id
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;

function getFiles(keysFiles, counter, reqFiles, keyBody = null) {
    const keyFile = keysFiles[counter];
    let files = reqFiles[keyFile];
    if (!Array.isArray(files)) files = [files];

    if (keyBody) {
        if (!Array.isArray(keyBody)) keyBody = [keyBody];
        return getFilesHandler(files, keyBody);
    } else {
        return getFilesHandler(files, null);
    }
}

function getFilesHandler(files, keyBody) {
    const result = [];
    files.forEach((file, index) => {
        const f = fileUpload(file, '/assets/product/img-db/');
        result.push({
            src: f.fullPath,
            alt: f.name,
            name: keyBody ? keyBody[index] : null
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
        .toFile(absolutePath + '/' + file.md5 + extension, (err, info) => {
            if (err) console.log(err);
            if (info) console.log(info);
        });

    return {
        name,
        fullPath
    }
}