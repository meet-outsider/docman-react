import request from "@/app/utils/request";

export  function getUser() {
  return request.get('/file/list')
}
