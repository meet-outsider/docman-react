import { flowableHandler } from '@/utils/flowable-handler';

export function getDefintions(): Promise<any> {
  return flowableHandler.request(
    'GET',
    '/service/repository/process-definitions',
  );
}

export function getDefintion(id: string): Promise<any> {
  return flowableHandler.request(
    'GET',
    `/service/repository/process-definitions/${id}`,
  );
}
