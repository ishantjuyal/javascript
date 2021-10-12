const Player = (username, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getUsername = () => username;
    
    const die = () => {
        console.log(`Player ${username} died!`)
    };
    
    const damage = x => {
        health -= x;
        if(health <= 0) {
            die();
        }
    };

    const attack = enemy => {
        if(level < enemy.getLevel()) {
            damage(1);
            console.log(`Player ${enemy.getUsername()} has damaged ${username}`);
        } else {
            enemy.damage(1);
            console.log(`Player ${username} has damaged ${enemy.getUsername()}`)
        }
    };
    return {attack, damage, getLevel, getUsername}
}

const jimmie = Player('jim', 4);
const badGuy = Player('badGuy', 1);
jimmie.attack(badGuy);