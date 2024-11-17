import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      overall: 93,
      pace: 85,
      shooting: 94,
      passing: 91,
      dribbling: 95,
      defending: 38,
      physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 85,
      shooting: 93,
      passing: 81,
      dribbling: 88,
      defending: 40,
      physical: 82,
    },
  },
  {
    id: 3,
    name: "Kylian Mbappe",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 97,
      shooting: 86,
      passing: 80,
      dribbling: 92,
      defending: 39,
      physical: 75,
    },
  },
  {
    id: 4,
    name: "Neymar Jr",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 91,
      shooting: 85,
      passing: 87,
      dribbling: 94,
      defending: 37,
      physical: 58,
    },
  },
  {
    id: 5,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      overall: 91,
      pace: 76,
      shooting: 86,
      passing: 93,
      dribbling: 88,
      defending: 64,
      physical: 78,
    },
  },
  {
    id: 6,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 78,
      shooting: 92,
      passing: 79,
      dribbling: 86,
      defending: 44,
      physical: 82,
    },
  },
  {
    id: 7,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      overall: 90,
      pace: 78,
      shooting: 60,
      passing: 71,
      dribbling: 72,
      defending: 91,
      physical: 86,
    },
  },
  {
    id: 8,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 93,
      shooting: 87,
      passing: 81,
      dribbling: 90,
      defending: 45,
      physical: 75,
    },
  },
  {
    id: 9,
    name: "Sadio Mane",
    club: "Bayern Munich",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      overall: 89,
      pace: 91,
      shooting: 83,
      passing: 78,
      dribbling: 88,
      defending: 45,
      physical: 74,
    },
  },
  {
    id: 10,
    name: "Luka Modric",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: {
      overall: 87,
      pace: 72,
      shooting: 76,
      passing: 89,
      dribbling: 89,
      defending: 71,
      physical: 65,
    },
  },
  {
    id: 11,
    name: "Karim Benzema",
    club: "Real Madrid",
    nationality: "France",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 79,
      shooting: 88,
      passing: 82,
      dribbling: 87,
      defending: 39,
      physical: 79,
    },
  },
  {
    id: 12,
    name: "Sergio Ramos",
    club: "Paris Saint-Germain",
    nationality: "Spain",
    position: "Defender",
    statistics: {
      overall: 88,
      pace: 70,
      shooting: 63,
      passing: 72,
      dribbling: 71,
      defending: 88,
      physical: 84,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async(player: PlayerModel) => {
  database.push(player)
}

export const deleteOnePlayer = async(id: number) => {
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true
  }

  return false;
}

export const findAndModifyPlayer = async(
  id: number, 
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  // find player
  const playerIndex = database.findIndex((player) => player.id === id)

  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex]
}