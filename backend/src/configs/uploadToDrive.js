const { google } = require('googleapis');
const fs = require('fs');
const path = require("path")
const { Readable } = require('stream'); 

const IDDRIVERFOLDER = "1KjM19fDvDXRjDhlQCnBxPmut6Z7TvA3I";

const auth = new google.auth.GoogleAuth({
  keyFile: path.resolve(__dirname, "..", "..", "credentials.json"),
  scopes: ['https://www.googleapis.com/auth/drive.file'],
});''

const drive = google.drive({ version: 'v3', auth });

async function uploadToDrive(fileBuffer, fileName) {
  const fileMetadata = {
    name: fileName,
    parents: [IDDRIVERFOLDER],
  };

  console.log("FILE BUFFER => ", fileBuffer)
  console.log("FILE NAME => ", fileName)



  const media = {
    mimeType: 'image/jpg', //
    body: Readable.from(fileBuffer),
  };

  try {
    const res = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });

    console.log(`Arquivo enviado com sucesso. ID: ${res.data.id}`);
    return res.data.id;
  } catch (error) {
    console.error('Erro ao enviar o arquivo para o Google Drive:', error);
  }
}

module.exports = uploadToDrive;

