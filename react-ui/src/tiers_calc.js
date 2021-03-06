let aspects = ["sleep", "diet", "activity", "emotional", "social", "occupational", "spiritual", "intellectual"]
export function scoreCalc(quizResults, currentScore) {
  let dailyScores = {};
  let scoreMap = {0:0,1:-2, 2:-1, 3:0, 4:1, 5:2}
  //aspect scores
  aspects.forEach((aspect) => {
    if (quizResults[aspect]) {
      let points = scoreMap[quizResults[aspect]]
      let score = currentScore[aspect] + points;
      if (score < 0) {
        score = 0;
      }
      dailyScores[aspect] = score;
    } else {
      dailyScores[aspect] = 0;
    }
  })
  //total score
  let totalScore = Object.values(dailyScores).reduce( (acc, val) => {
    return acc + val
  },0)
  if (totalScore < 0) {
    totalScore = 0;
  }
  dailyScores.total = totalScore;
  //streak score
  let today = Date.parse(quizResults.date);
  let lastTime = Date.parse(currentScore.date);
  let diff = today - lastTime;
  let days = diff/86400000;
  if (days >= 2) {
    dailyScores.streak = 0;
    dailyScores.total = dailyScores.total - (3 * days);
  }
  else if (days >= 1) {
    dailyScores.streak = currentScore.streak++
  }
  if (dailyScores.streak <= 0) {
    dailyScores.streak = 0;
  }
  return dailyScores;
}

export function tierCalc(scores) {

  let totalTiers = {0:"level one",28:"level two", 42:"level three", 63:"level four", 95:"level five", 142:"level six", 214:"level seven", 320:"level eight", 480:"level nine", 720:"level ten"};
  let aspectTiers = {0:"level one",10:"level two", 20:"level three", 30:"level four", 40:"level five", 50:"level six", 60:"level seven", 70:"level eight", 80:"level nine", 90:"level ten"};
  let streakTiers = {0:"level one",1:"level two", 2:"level three", 3:"level four", 4:"level five", 5:"level six", 6:"level seven", 7:"level eight", 8:"level nine", 9:"level ten"};
  let userTiers = {}

//aspect tiers
  aspects.forEach( (aspect) => {
    if (scores[aspect]) {
      let brackets = Object.keys(aspectTiers);
      let tier;
      brackets.forEach( (bracket) => {
        if (scores[aspect] >= bracket) {
          tier = aspectTiers[bracket]
        }
      })
      userTiers[aspect] = tier;
    } else {
      userTiers[aspect] = 'Not tracking';
    }
  })
  //total tier
  let totalBrackets = Object.keys(totalTiers);
  let totaltier;
  totalBrackets.forEach( (bracket) => {
    if (scores.total >= bracket) {
      totaltier = totalTiers[bracket];
    }
  })
  userTiers.total = totaltier;

  //streak tier
  let streakBrackets = Object.keys(streakTiers);
  let streaktier;
  if (!scores.streak) {
    scores.streak = 0;
  }
  streakBrackets.forEach( (bracket) => {
    if (scores.streak >= bracket) {
      streaktier = streakTiers[bracket];
    }
  })
  userTiers.streak = streaktier;

  return userTiers;
}
