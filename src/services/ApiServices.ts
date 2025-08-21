import { APIS } from "../constants/ApiEndpoints";
import type { IPagination } from "../interface/queryInterface";
import type {
  ICharacterResponse,
  ICharacterResultResponse,
} from "../interface/serviceInterface";
import { get } from "./GlobalServices";

export const getAllCharactersService = async function (
  payload: IPagination
): Promise<ICharacterResponse> {
  return await get(`${APIS.CHARACTER}/?page=${payload.page}`, {});
};

export const getCharacterByIdService = async function (
  characterId: number
): Promise<ICharacterResultResponse> {
  return await get(`${APIS.CHARACTER}/${characterId}`, {});
};
