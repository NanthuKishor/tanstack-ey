import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getAllCharactersService,
  getCharacterByIdService,
} from "../services/ApiServices";
import type { IPagination } from "../interface/queryInterface";

export const useCharacterListQuery = (data: IPagination) => {
  return useQuery({
    queryKey: ["character", "list", data.page],
    queryFn: () => getAllCharactersService(data),
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
    enabled: !!data?.page,
  });
};

export const useCharacterByIdQuery = (characterId: number) => {
  return useQuery({
    queryKey: ["character", characterId],
    queryFn: () => getCharacterByIdService(characterId),
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
    enabled: !!characterId,
  });
};
