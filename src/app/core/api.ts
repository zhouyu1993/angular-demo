import { environment } from '@src/environments/environment';

const production = environment.production;

const MUSICQQ = production ? '//c.y.qq.com' : '/musicqq';
const MUSICBD = production ? '//musicapi.taihe.com' : '/musicbd';

export default {
  HOTKEY: `${MUSICQQ}/splcloud/fcgi-bin/gethotkey.fcg`,
  SEARCH: `${MUSICBD}/v1/restserver/ting`,
};
