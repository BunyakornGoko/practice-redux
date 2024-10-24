import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: ""
}

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        if (!fullName || !nationalID) return
        return {
          payload: { fullName, nationalID, createdAt: new Date().toISOString() }
        }
      },
      reducer(state, action) {
        ;(state.fullName = action.payload.fullName),
          (state.nationalID = action.payload.nationalID),
          (state.createdAt = action.payload.createdAt)
      }
    },
    updateName(state, action) {
      state.fullName = action.payload
    }
    // updateName: {
    //   prepare(fullName) {
    //     if (!fullName) return
    //     return { payload: { fullName } }
    //   },
    //   reducer(state, action) {
    //     state.fullName = action.payload.fullName
    //   }
    // }
  }
})
console.log(customerSlice)

export const { createCustomer, updateName } = customerSlice.actions

export default customerSlice.reducer

// export default function customerReducer(state = innitialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt
//       }
//     case "customer/updateName":
//       return { ...state, fullName: action.payload }
//     default:
//       return state
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() }
//   }
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName }
// }
