import create from "zustand";

export const useCurrentUser = create((set, get) => {
  const initialState = {
    currentUser: {
      email: "",
      nome: "",
      senha: "",
      cpf: "",
      telefone: "",
    },
  };

  return initialState;
});
