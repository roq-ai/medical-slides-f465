import { PollInterface } from 'interfaces/poll';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PresentationInterface {
  id?: string;
  title: string;
  content: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  poll?: PollInterface[];
  organization?: OrganizationInterface;
  _count?: {
    poll?: number;
  };
}

export interface PresentationGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  organization_id?: string;
}
