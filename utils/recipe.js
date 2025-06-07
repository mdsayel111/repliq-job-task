// const getRecipeDetails = async (id) => {
//   try {
//     const response = await axios
//       .get(`${BASE_URL}/lookup.php`, {
//         params: { i: id },
//       })
//       .then((res) => res);
//     return response.data.meals ? response.data.meals[0] : null;
//   } catch (error) {
//     console.error("Error fetching recipe details:", error);
//     throw error;
//   }
// };