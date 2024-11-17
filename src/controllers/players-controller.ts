import { createPlayerService, deletePlayerService, getPlayerByIdService, updatePlayerService } from './../services/players-services';
import { Request, Response } from "express";
import { getPlayerService } from "../services/players-services";
import { StatisticsModel } from '../models/statistics-model';


export const getPlayer = async (req:Request, res:Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await getPlayerByIdService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async(req:Request, res: Response) => {
  const bodyValue = req.body
  const httResponse = await createPlayerService(bodyValue)

  if(httResponse){
    res.status(httResponse.statusCode).json(httResponse.body)
  }   
}

export const deletePlayer = async (req:Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await deletePlayerService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue: StatisticsModel = req.body;
  const httpResponse = await updatePlayerService(id, bodyValue)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}