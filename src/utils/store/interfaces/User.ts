export interface IUserState {
  isLoggedIn: boolean;
  token: string | null;
  sessionRemainingTime: number | null;
}
