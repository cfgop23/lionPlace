import { create } from "zustand";

const useReservationStore = create((set) => ({
  reservationData: {
    booker: "",
    place:"",
    date:"",
    guestCount:1,
    reservedName:"",
    email:"",
    tel: 0,
    requirements: "",
    visited: false,
    canceled: false
  },
  setReservationData: (data) => set((state) => ({ reservationData: { ...state.reservationData, ...data } })),
}));

export default useReservationStore;