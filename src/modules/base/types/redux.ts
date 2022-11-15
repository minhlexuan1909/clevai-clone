export type TAction = {
  type: string | symbol;
  data?: any;
};

export type TActionRequest<T> = {
  type: string | symbol;
  params?: T;
};
