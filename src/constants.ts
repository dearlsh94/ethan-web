import { IconHome, IconList, IconStar } from '@components/icon';
import { paths } from '@utils/url';

export const HOST_DOMAIN = 'weezip.treefeely.com';
export const OWNER_EMAIL = 'weezip.ethan@gmail.com';
export const CONFIG_THEME_KEY = 'weezip-theme';

export const enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export const enum ARIA_LABEL {
  MOVE = '이동하기',
  EDIT = '변경하기',
  OPEN = '열기',
  CLOSE = '닫기',
  SEND = '보내기',
  COPY = '복사하기',
  RESET = '초기화하기',
  SEARCH = '검색하기',
  TOGGLE_ON = '켜기',
  TOGGLE_OFF = '끄기',
  EXPAND_ON = '펼치기',
  EXPAND_OFF = '접기',
}

export const enum NAMES {
  SITE = 'Weezip',
  TREEPEDIA = '트리피디아',
  TREEFEELY = 'Treefeely',
}

export const GNB_MENUS = Object.freeze([
  { url: paths.home(), title: NAMES.SITE, isOutLink: false, Icon: IconHome },
  { url: paths.posts(), title: '글 목록', isOutLink: false, Icon: IconList },
  { url: paths.treepedia(), title: NAMES.TREEPEDIA, isOutLink: false, Icon: IconStar },
  { url: 'https://treefeely.com', title: NAMES.TREEFEELY, isOutLink: true },
]);

export const RECOMMEND_TAGS = Object.freeze([
  {
    url: paths.treepedia(),
    name: NAMES.TREEPEDIA,
  },
  {
    url: paths.posts({ tag: '개발' }),
    name: '개발',
  },
  {
    url: paths.posts({ tag: '에세이' }),
    name: '에세이',
  },
]);
