    // An arcade game player wants to climb to the top of the leaderboard and track their ranking.The game uses Dense Ranking,
    // so its leaderboard works like this:

    // The player with the highest score is ranked number  on the leaderboard.

    // Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following
    // ranking number.

    // climbingLeaderboard has the following parameter(s) :
    // - int player[n]: the leaderboard scores
    // - int player[m]: the player's scores

    // Returns:
    // int[m]: the player's rank after each new score


function climbingLeaderboard(ranked, player){
    let distinctRanks = ranked.filter((value, index) => value !== ranked[index + 1]);

    let rankIndex = distinctRanks.length - 1;
    return player.map(value => {
        if (value > distinctRanks[0]) return 1;
        else
        {
            while (value > distinctRanks[rankIndex])
                rankIndex--;

            return value == distinctRanks[rankIndex] ? rankIndex + 1 : rankIndex + 2;
        }
    });
}
                                