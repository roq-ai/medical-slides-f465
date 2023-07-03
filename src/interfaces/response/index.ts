import { UserInterface } from 'interfaces/user';
import { PollInterface } from 'interfaces/poll';
import { GetQueryInterface } from 'interfaces';

export interface ResponseInterface {
  id?: string;
  answer: string;
  user_id?: string;
  poll_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  poll?: PollInterface;
  _count?: {};
}

export interface ResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  answer?: string;
  user_id?: string;
  poll_id?: string;
}
