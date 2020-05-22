const newDb = db.getSiblingDB('main')

newDb.createUser({
    user: 'admin',
    pwd: 'Admin564',
    roles: [
        { role: 'dbAdmin', db: 'main' },
        { role: 'readWrite', db: 'main' }
    ]
});

newDb.createUser({
    user: 'test',
    pwd: 'Test897',
    roles: [
        { role: 'dbAdmin', db: 'test' },
        { role: 'readWrite', db: 'test' }
    ]
});

newDb.createCollection('collection')
newDb['collection'].insert({ a: 'b' })

db.shutdownServer();
