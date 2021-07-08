const Database = require("../db/config");

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password;
        let roomId = ""
        let isRoom = true

        while (isRoom) {

            //Gera o numero da sala
            for (let i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10)
            }
            roomId = parseInt(roomId);

            //Verifica se esse numero já existe
            const everyRoomId = await db.all(`SELECT id FROM rooms`)

            isRoom = everyRoomId.some(checkRoomId => checkRoomId === roomId)

            console.log(isRoom)

            if (!isRoom) {
                //Insere a nova sala no banco de dados assim que clicamos em criar sala com a senha preenchida
                await db.run(`
            INSERT INTO rooms(
                id,
                pass
                ) VALUES (
                    ${roomId},
                    ${pass}
                )`)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res) {
        const db = await Database()

        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId}`)
        let isQuestion = true

        if (questions.length == 0) {
            isQuestion = false
        }

        res.render("room", { roomId: roomId, questions: questions, isQuestion })
    },

    async enter(req, res) {
        const db = await Database()

        const roomId = req.body.roomId

        const existingRooms = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        console.log(existingRooms)

        if (existingRooms != undefined) {
            res.redirect(`/room/${roomId}`)
        } else {
            res.render("parts/noRoom", { roomId: roomId })
        }
    }
}

