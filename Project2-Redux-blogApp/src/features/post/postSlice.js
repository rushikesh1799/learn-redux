import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 4,
    posts: [
        {
            _id: "1",
            title: "A Good Date",
            content:
                "Went out to a fine restaurant called Mezza9 this tuesday. The ambience is pretty good and the cocktails are superb.",
            likes: {
                likeCount: 2,
                likedBy: [],
                dislikedBy: [],
            },
            username: "adarshbalika",
            price: 15,
            fullName: "Adarsh Balika",
            profilePhoto: "https://picsum.photos/id/999/150",
            category: "Trending",
            postImage:
                "https://lh3.googleusercontent.com/p/AF1QipPyndUkB0oO1QSL4l7MEULJZOu-2DAqoWGqKe9l=s1360-w1360-h1020",
            createdAt: "2023-05-11",
        },
        {
            _id: "2",
            title: "A Dream come true",
            content:
                "Just witnessed another breathtaking display of brilliance from the 🐐 himself, Lionel Messi! The way he controls the game with his magical feet is a pure joy to watch. No wonder he's hailed as the greatest of all time. 🙌⚽️ #Messi #GOAT #FootballWizard",
            likes: {
                likeCount: 3,
                likedBy: [],
                dislikedBy: [],
            },
            username: "pratik0077",
            price: 20,
            fullName: "Pratik Aher",
            profilePhoto: "https://picsum.photos/id/1000/150",
            category: "Sports",
            postImage:
                "https://www.aljazeera.com/wp-content/uploads/2022/12/SSS10784_1.jpg?resize=1170%2C780&quality=80",
            createdAt: "2022-12-19",
        },
    ],
};

export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        postAdded: (state, action) => {
            // console.log(action);
            state.posts.push(action.payload);
        },
    },
});

export const { increment, decrement, postAdded } = postSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;

export default postSlice.reducer;
