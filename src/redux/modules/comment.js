// import axios from "axios";

// // Actions
// const LOAD = 'comment/LOAD';
// const CREATE = 'comment/CREATE';
// const DELETE = 'comment/DELETE';

// // 액션 크리에이터
// export function loadCom(dic_list) {
//     return { type: LOAD, dic_list };
// }

// // initialState
// const initialState = {
//     user: null,
//     is_login: false,
//   };

// // middleware
// export const loadComFB = () => {
//     return async function (dispatch) {
//         // 데이터를 가져와요!
//         const dic_data = await getDocs(collection(db, "my_dictionary"));
//         console.log(dic_data)

//         //배열 선언. 23의 파라미터 안에 들어감.
//         let dic_list = []; 

//         dic_data.forEach((doc) => {
//             console.log(doc.data());
//             // dic_list = [...dic_list, {...doc.data}]; or
//             dic_list.push({ id: doc.id, ...doc.data() });
//         });

//         //   console.log(dic_list)

//         dispatch(loadDic(dic_list));
//     };
// };


//   const loginDB = (id, pwd) => {
//     return async function (dispatch, getState, { history }) {
//     //axios 연결하기
//      await axios({
//         method: 'post',
//         url: ' http://localhost:5001/signup',
//         data: {
//           ID: id,
//           password : pwd,
//         }
//       })
//       .then(async function(response) {
//           console.log(response.data.token)
//           console.log(response)
//         localStorage.setItem("token", response.data.token);
//         dispatch(
//           setUser({
//             userId: id,
//           })
  
//         );dispatch(loginCheckDB())
//         window.alert(`${id}님 환영합니다! :)`)
//         history.push("/");
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(error.response.data.errorMessage)
//         window.alert("로그인에 실패했습니다! 다시 시도해주세요")
//         console.log(errorCode, errorMessage);
//       });
//     };
//   };
  


// //"C""R"UD
// export const addDicFB = (dic) => {
//     return async function (dispatch) {
//         const docRef = await addDoc(collection(db, "my_dictionary"), dic);

//         // const _dic = await getDoc(docRef);
//         const dic_data = { id: docRef.id, ...dic };

//         console.log(dic_data);

//         dispatch(createDic(dic_data));
//     }
// }


// //삭제하기
// export const deleteDicFB = (dic_id) => {
//     return async function (dispatch, getState) {


//         //카드 삭제 alert
//         const Btn = alert("삭제하시겠습니까?")
//         if(Btn){
//             alert("삭제 완료!")
//         }

//         //임의로 삭제 막음
//         // const pw = prompt('비밀번호를 입력해주세요')
//         // if(pw !== dic_id){ 
//         //     window.alert('비밀번호가 틀려 삭제할 수 없습니다.');
//         //     return;
//         // }
//         const docRef = doc(db, "my_dictionary", dic_id);
//         await deleteDoc(docRef);

//         const _dic_list = getState().dic.list;
//         const dic_index = _dic_list.findIndex((d) => {
//             return d.id === dic_id
//         });
//         dispatch(deleteDic(dic_index))
//     }
// }