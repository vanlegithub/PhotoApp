import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
  {
    id: 82605,
    categoryId: 1,
    photo: "https://picsum.photos/id/43/300/300",
    title: "Picture 1",
  },
  {
    id: 52685,
    categoryId: 3,
    photo: "https://picsum.photos/id/859/300/300",
    title: "Picture 2",
  },
  {
    id: 72133,
    categoryId: 4,
    photo: "https://picsum.photos/id/229/300/300",
    title: "Picture 3",
  },
  {
    id: 95333,
    categoryId: 1,
    photo: "https://picsum.photos/id/862/300/300",
    title: "Picture 4",
  },
  {
    id: 91176,
    categoryId: 5,
    photo: "https://picsum.photos/id/532/300/300",
    title: "Picture 5",
  },
  {
    id: 86160,
    categoryId: 5,
    photo: "https://picsum.photos/id/649/300/300",
    title: "Picture 6",
  },
  {
    id: 12569,
    categoryId: 5,
    photo: "https://picsum.photos/id/730/300/300",
    title: "Picture 7",
  },
  {
    id: 47434,
    categoryId: 3,
    photo: "https://picsum.photos/id/287/300/300",
    title: "Picture 8",
  },
];

const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      console.log(action.payload);
      const removePhotoId = action.payload;
      return state.filter((photo) => photo.id !== removePhotoId);
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);

      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
