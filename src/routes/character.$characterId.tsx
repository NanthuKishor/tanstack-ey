import { createFileRoute } from "@tanstack/react-router";
import { useCharacterByIdQuery } from "../hooks/Queries";
import type { IDetailsPageContentMap } from "../interface/PageInterface";

export const Route = createFileRoute("/character/$characterId")({
  component: CharacterDetails,
  validateSearch: () => ({}),
});

function CharacterDetails() {
  const { characterId } = Route.useParams();

  const { data: character, isLoading } = useCharacterByIdQuery(
    Number(characterId)
  );

  const contentMap: IDetailsPageContentMap[] = [
    {
      id: 1,
      label: "Name",
      value: character?.name,
    },
    {
      id: 2,
      label: "Status",
      value: character?.status,
    },
    {
      id: 3,
      label: "Gender",
      value: character?.gender,
    },
    {
      id: 4,
      label: "Species",
      value: character?.species,
    },
    {
      id: 5,
      label: "Location",
      value: character?.location?.name,
    },
    {
      id: 6,
      label: "Origin",
      value: character?.origin?.name,
    },
  ];

  return (
    <>
      <h1 className="text-center mb-5">Character Details</h1>
      <div className="d-flex vw-100 vh-100 gap-5 justify-content-center align-items-start">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            <img
              src={character?.image}
              className="character-image"
              alt="character-image"
            />
            <div className="d-flex flex-column justify-content-center">
              {contentMap?.map((content: IDetailsPageContentMap) => (
                <div key={content?.id} className="mb-3">
                  <span className="fw-bold">{content?.label}:&nbsp;</span>
                  <span>{content?.value}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
