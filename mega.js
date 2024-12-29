const mega = require('mega');
const fs = require('fs');

/**
 * Fonction pour uploader un fichier sur Mega
 * @param {ReadStream} fileStream - Le fichier à uploader.
 * @param {string} fileName - Nom du fichier sur Mega.
 * @returns {Promise<string>} - L'URL du fichier uploadé.
 */
async function upload(fileStream, fileName) {
    return new Promise((resolve, reject) => {
        const storage = mega({ email: 'christorjaime@gmail.com', password: 'jarix55&' });
        const upload = storage.upload({ name: fileName });

        fileStream.pipe(upload);

        upload.on('complete', function (file) {
            resolve(file.downloadLink);
        });

        upload.on('error', function (err) {
            reject(err);
        });
    });
}

module.exports = { upload };