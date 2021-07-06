module.exports = {
    index(req, res) {

        console.log("entrou no controller")

        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        console.log(`room = ${roomId}
                     question ID = ${questionId}                
                     ação = ${action}
                     password = ${password}`)
    }
}