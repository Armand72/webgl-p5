// import API from "./../api/axios";
import { exempleMutation } from '../reducers/exemple.slice';

// export const getFood = (idChild) => {
//   try {
//     API.get(`food/${idChild}`).then((response) =>
//       dispatch(response.data)
//     );
//   } catch (err) {
//     const errors = err.response;

//     if (errors) {
//       console.log(errors);
//     }
//   }
// };

export const exempleAction = () => async (dispatch) => {
  dispatch(exempleMutation('salut'));
};
