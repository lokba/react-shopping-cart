import { ProductData, CartProductData } from 'types';

export const productList: ProductData[] = [
  {
    id: 1,
    thumbnail:
      'https://stickershop.line-scdn.net/stickershop/v1/product/789/LINEStorePC/main.png;compress=true',
    name: 'LINE 샐리 스티커',
    price: 1500,
  },
  {
    id: 2,
    thumbnail: 'https://t1.daumcdn.net/cfile/tistory/99701E405A98FB4D08',
    name: 'LINE 브라운 고슴도치 인형',
    price: 20000,
  },
  {
    id: 3,
    thumbnail:
      'https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb861f604e7b0e6900f9ac53a43965300eb9a',
    name: 'KAKAO 라이언 인형',
    price: 22000,
  },
  {
    id: 4,
    thumbnail:
      'https://post-phinf.pstatic.net/MjAyMTAzMjBfMjUy/MDAxNjE2MjExODA3NzMx.ZgRyBenF0yWC1lS6azKbeFhqFhA40Hs9cH2pqZSeiE8g.cDCjirkHy16khQJYlcIwP3Ij01hfQTJ_BvTQGXBTcc4g.JPEG/mug_obj_202103201243289114.jpg?type=w1080',
    name: 'KAKAO 어피치 인형',
    price: 24000,
  },
  {
    id: 5,
    thumbnail:
      'http://thumbnail.10x10.co.kr/webimage/image/add1/208/A002089776_01.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
    name: 'LINE 코니 인형',
    price: 30000,
  },
  {
    id: 6,
    thumbnail:
      'https://item.kakaocdn.net/do/fd49574de6581aa2a91d82ff6adb6c014022de826f725e10df604bf1b9725cfd',
    name: 'KAKAO 제이지 인형',
    price: 5000,
  },
  {
    id: 7,
    thumbnail: 'https://media.bunjang.co.kr/product/186937524_1_1651658741_w%7Bres%7D.jpg',
    name: 'LINE 레니니 인형',
    price: 7000,
  },
  {
    id: 8,
    thumbnail: 'https://blog.kakaocdn.net/dn/dc4HyD/btq8cNNf768/wqkQi7bJUNjwG9IhkcIKK1/img.jpg',
    name: '제레미 부엔디아 인형',
    price: 3000000,
  },
  {
    id: 9,
    thumbnail:
      'https://mblogthumb-phinf.pstatic.net/MjAxOTEwMDdfMjgy/MDAxNTcwNDExNDIwMDM4.REw1QRn-vGNQv2N32x5HoCLuQNZqKfRVpYzCvU9D3UUg.wbHbMzI8U60HCP0fdMjQE_0jWXQyTiKTCdaqX2PIeE8g.PNG.coachgymred/%EB%B8%8C%EB%9E%9C%EB%93%A0.png?type=w800',
    name: '브랜든 헨드릭슨 인형',
    price: 15000000,
  },
  {
    id: 10,
    thumbnail:
      'https://static.thcdn.com/images/small/original/widgets/83-kr/16/mp-core-10530943-437x437-124817-120616.jpg',
    name: '마이프로틴 초코맛',
    price: 45000,
  },
  {
    id: 11,
    thumbnail:
      'http://melkinsports.com/web/product/big/20200303/786fbec778e26416043a549d60b656c7.png',
    name: '무게 조절 덤벨',
    price: 200000,
  },
];

export const cartProductList: CartProductData[] = [
  {
    id: 11,
    thumbnail:
      'http://melkinsports.com/web/product/big/20200303/786fbec778e26416043a549d60b656c7.png',
    name: '무게 조절 덤벨',
    price: 200000,
    quantity: 2,
  },
];
