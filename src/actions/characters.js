import charactersService from "./../services/charactersService";

const CharactersListAction = {
  setItems: (items: any) => ({
    type: "CHARACTERS:SET_ITEMS",
    payload: items,
  }),
  fetchItems: () => (dispatch: any) => {
    console.log("fetchItems");
    charactersService.getCharacters().then(({ data }) => {
      console.log("CharactersListAction: " + data);
      dispatch(CharactersListAction.setItems(data));
    });
  },
};

export default CharactersListAction;
