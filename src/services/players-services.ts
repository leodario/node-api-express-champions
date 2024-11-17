import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositores/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";


export const getPlayerService = async ()=> {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;
  
  if(data){
     response = await ok(data);
  } else {
    response = await noContent();
  }
  
  return response;
}

export const getPlayerByIdService = async(id: number) => {
  // pedir ao repositório de dados
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;
  if(data){
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
}

export const createPlayerService = async(player: PlayerModel)=>{
  let response = null;

  // verfique se está vazio
  if(Object.keys(player).length !== 0){    
    await PlayerRepository.insertPlayer(player)
    response = created()
  } else {
    
    response = await badRequest();
  }
  return response;
}

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepository.deleteOnePlayer(id)
  
  if(isDeleted){
    response = await ok({message: "deleted"})
  } else {
    response = await badRequest();
  }  

  return response
}

export const updatePlayerService = async (id:number, statistics: StatisticsModel) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics)
  let response = null;
  if(Object.keys(data).length === 0){
    response = await badRequest();
  } else {
    response = await ok(data);
  }

  return response;
}