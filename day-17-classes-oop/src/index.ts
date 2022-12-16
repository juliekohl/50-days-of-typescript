// Class, Attributes, Constructors and Methods
export class User {
    id: number;
    username: string;
    followers: number;
    following: number;

    constructor(userId: number = 0, username: string = "") {
        this.id = userId;
        this.username = username;
        this.followers = 0;
        this.following = 0;
    }

    public follow(user: any): void {
        user.followers += 1;
        this.following += 1;
    }
}

const oneUser = new User(1, "Julie");
// console.log(oneUser); // User { id: 1, username: 'Julie', followers: 0, following: 0 }
// console.log(oneUser.id); // 1
// console.log(oneUser.username) // Julie

const twoUser = new User(2, "César");
// console.log(twoUser); // { id: 2, username: 'César', followers: 0, following: 0 }

console.log(twoUser.follow(oneUser));
// console.log("followers", oneUser.followers); // followers 1
// console.log("following", oneUser.following); // following 0
console.log(oneUser); // { id: 1, username: 'Julie', followers: 1, following: 0 }
