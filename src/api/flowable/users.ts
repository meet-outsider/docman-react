import { flowableHandler } from '@/utils/flowable-handler';

export function getIdentityUsers(): Promise<any> {
  return flowableHandler.request('GET', '/service/identity/users');
}

  