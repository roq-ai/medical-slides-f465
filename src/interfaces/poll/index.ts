import { ResponseInterface } from 'interfaces/response';
import { PresentationInterface } from 'interfaces/presentation';
import { GetQueryInterface } from 'interfaces';

export interface PollInterface {
  id?: string;
  question: string;
  presentation_id?: string;
  created_at?: any;
  updated_at?: any;
  response?: ResponseInterface[];
  presentation?: PresentationInterface;
  _count?: {
    response?: number;
  };
}

export interface PollGetQueryInterface extends GetQueryInterface {
  id?: string;
  question?: string;
  presentation_id?: string;
}
