let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    console.log(user);
    if (!user.name) {
        throw new Error('There is no name');
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log('Finaly')
}