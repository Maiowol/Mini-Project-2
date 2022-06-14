// post.js

// Actions

const CREATE = 'post/CREATE';

const initialState = {
    posts : [
    { 
        nickname: "닉네임1",
        image:
        "http://ppanggeut.net/upfiles/org/202202/org_621cd5c966be6l6y2ff.gif",
        product:"카리나짱",
        postId : "1",
    },
    { 
        nickname:"닉네임2",
        image:"https://thumbs.gfycat.com/EquatorialHeartyIslandcanary-size_restricted.gif",
        product:"신민아짱",
        postId : "2",
    },
        { 
        nickname:"닉네임3",
        image:"https://image.xportsnews.com/contents/images/upload/article/2016/1118/1479437481013521.jpg",
        product:"한가인",
        postId : "3",
    },
        { 
        nickname:"닉네임4",
        image:"https://firebasestorage.googleapis.com/v0/b/magazine-40b77.appspot.com/o/images%2F%EC%95%84%EC%9D%B4%EC%9C%A0.jpg?alt=media&token=70b1c5be-268d-41e9-bc71-91de9b1ec11c",
        product:"아이유짱",
        postId : "4",
    },
    { 
        nickname:"닉네임5",
        image:"https://t1.daumcdn.net/cfile/tistory/275F77485433D4D618",
        product:"한고은짱",
        postId : "5",
    },
    { 
        nickname:"닉네임6",
        image:"https://c.tenor.com/4LsMrRAVvNcAAAAC/as-if-its-your-last-black-pink.gif",
        product:"제니짱",
        postId : "6",
    },
             
        ],
    }

// Action Creators

export function createpost(post) {
return { type: CREATE, post };
}



// side effects, only as applicable
// e.g. thunks, epics, etc


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/CREATE" : {
            const new_bucket_list = [...state.posts,action.post]
            return {list: new_bucket_list}

        }
    default :
        return state
    }
}

// const data = useSelector((state) => state.post.posts)