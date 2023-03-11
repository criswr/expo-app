import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('notes.db')

export const init = () => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists notes (id integer primary key not null, value text not null, timestamp text not null, locationLat real, locationLng real);',
                [],
                () => res(),
                (_, err) => rej(err)
            )
        })
    })
    return promise
}

export const insertNote = (value, timestamp, lat, lng) => {
    const promise = new Promise ((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'insert into notes (value, timestamp, locationLat, locationLng) VALUES (?, ?, ?, ?);',
                [value, timestamp, lat, lng],
                (_, result) => res(result),
                (_, err) => rej(err)
            )
        })
    })
    return promise
}

export const fetchNotes = () => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM notes',
                [],
                (_, result) => res(result),
                (_, err) => rej(err)
            )
        })
    })
    return promise
}

export const deleteNote = (value) => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM notes WHERE value=(?)',
                [value],
                (_, result) => res(result),
                (_, err) => rej(err)
            )
        })
    })
    return promise
}
