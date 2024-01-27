import { v4 as uuidv4 } from "uuid";
const CreateBookWithId = (book, sourse) => {
  return {
    ...book,
    sourse,
    isFavorite: false,
    id: uuidv4(),
  };
};
export default CreateBookWithId;
