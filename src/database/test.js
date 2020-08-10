const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: "Bruno Reis",
        avatar: "https://avatars3.githubusercontent.com/u/61256415?s=460&u=5c50949d9b85c7317477e493ea3ce5d804894713&v=4",
        whatsapp: "99982521177",
        bio: "hello",
    }

    classValue = {
        subject: 1,
        cost: "20", 
    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    //criar dados
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar dados
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar determinados classes e proffys
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "520"
    `)
    //console.log(selectClassesSchedules)
})