<!-- @format -->

## E-레이저 Server

메일함을 정리하며,
인터넷 일상에서 환경보호 손쉽게 시작하기

> 30th SOPT Sopkathon - TEAM E-레이저 ✨ <br>
> 2022.05.21 ~

<br>

## 🍕 E-레이저 Server

| [권세훈](https://github.com/devkwonsehoon) | [강민재](https://github.com/m1njae) |
| :----------------------------------------: | :---------------------------------: |
|               메일 API 담당                |            유저 API 담당            |

<Hr>
<br>

## 🦖 Our Convention

- [Coding convention](https://www.notion.so/Coding-Convention-a20e3ffbc92e4952aa046adf9704d4d3)
- [Commit convention](https://www.notion.so/Commit-Convention-94a9c483d24548829ac2e64784944aea)
- [Git convention](https://www.notion.so/Git-Convention-bdf94413c66a4c9087d07e0e35b89e34)

<br>
<Hr>

## 🦖 Our API Docs

### 👉 [E-레이저 API Docs](https://www.notion.so/API-4c1031f189e54176bb6a85b33d55c8c0)

<br>
<Hr>

## 🦖 Our functions

| func |     detail      | developer | done |
| :--: | :-------------: | :-------: | :--: |
| Mail |  메일 조회 API  |   세훈    |  ✅  |
|      |  메일 정리 API  |   세훈    |  ✅  |
| Hero | 히어로 저장 API |   민재    |  ✅  |

<br>

## 🦖 Our Directory Tree

```bash
E-Raser
└── functions
    ├── config
    ├── constants
    ├── controller
    ├── lib
    ├── loaders
    ├── models
    ├── router
    └── service
```

<br>

## 🦖 Our Dependencies

```json
{
  "dependencies": {
    "axios": "^0.24.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-jest": "^25.7.0",
    "express": "^4.17.1",
    "firebase": "^9.5.0",
    "firebase-admin": "^9.2.0",
    "firebase-functions": "^3.11.0",
    "gmail-js": "^1.0.20",
    "googleapis": "^100.0.0",
    "helmet": "^4.6.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.21",
    "mongoose": "^6.3.4",
    "path": "^0.12.7",
    "pg": "^8.7.1"
  },
  "devDependencies": {
    "babel-eslint": "^10.1.0",
    "eslint": "^7.6.0",
    "eslint-config-google": "^0.14.0",
    "firebase-functions-test": "^0.2.0"
  }
}
```
