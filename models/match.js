const db = require('./conn');

class Match {
    constructor(id, current_user_id, viewed_user_id, liked, blocked) {
        this.id = id;
        this.currentUserId = current_user_id;
        this.viewedUserId = viewed_user_id;
        this.liked = liked;
        this.blocked = blocked;
    }

    static getAllUsers(user) {
        return db.any(`select * from users where id!=$1`, [user]);
    }

    static getMatchById(id) {
        return db.one(`select * from matches where id=$1`, [id]);
    }

}

module.exports= Match;