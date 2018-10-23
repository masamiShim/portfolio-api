import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

/**
 * これはテスト用のエンドポイント
 */
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

// サービスアカウント使う場合はファイル読み込み
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

/**
 * Skill追加用
 */
exports.skill = functions.https.onRequest((request, response) => {

    if (request.method === "GET") {
        admin.database().ref("/skills")
            .once("value")
            .then(snapshot => {
                    const skills = snapshot.val();
                    const array = Object.keys(skills).map(key => skills[key]);

                    console.log("reference success", array);
                    response.status(200).json(array).end();
                }
            ).catch(error => {
                console.log("reference error", error);
                response.status(500).end();
            }
        );

    }else if (request.method === 'POST') {
        const body = request.body
        const pushRef = admin.database().ref('/skills').push()

        pushRef.set({
            category: body['category'],
            name: body['name'],
        }, error => {

            if (error) {
                console.log('save error', error.message)
                response.status(500).send(error.message).end()
            } else {
                console.log('save success')
                response.status(200).end()
            }
        })

    } else {
        response.status(404).end()
    }
})
