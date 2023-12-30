import { apiService } from 'services/ApiService';
import { create } from 'zustand';

type State = {
email : string,
password : string,
error : boolean,
accessToken : string,
}

type Actions = {
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  login : () => void,
  reset : () =>void
}

const initialState: State = {
  email: '',
  password: '',
  error: false,
  accessToken: '',
};

const useLoginFormStore = create<State & Actions>((set, get) => ({
  ...initialState,
  changeEmail: (email: string) => {
    set(() => ({ email }));
  },
  changePassword: (password: string) => {
    set(() => ({ password }));
  },
  login: async () => {
    try {
      const {
        email, password,
      } = get();

      const accessToken = await apiService.login({
        email,
        password,
      });

      set(() => ({ accessToken }));
    } catch (e) {
      set(() => ({ error: true }));
    }
  },
  reset: () => {
    set(initialState);
  },
}));

export default useLoginFormStore;
