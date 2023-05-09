# Quote App

Technologies used

Backend: Spring (Boot), Spring Data JPA (Hibernate), Spring for GraphQL, MapStruct, Gradle, DGS Code Generation Gradle Plugin for GraphQL by Netflix

Database: PostgreSQL

App: React Native, [Relay](https://relay.dev/), Expo, Android Emulator, [React Navigation](https://reactnavigation.org/)

Used Expo APIs:
- AuthSession (incl. WebBrowser)
- Clipboard
- Share

To start:
1. Start a PostgreSQL database and change the credentials in `backend/src/main/resources/application.properties`
2. Change the endpoint URL in `app/src/lib/relay.ts`
3. Run `backend/gradlew.bat bootRun`
4. Install yarn packages in `app`: `yarn install --frozen-lockfile`
5. Run Expo
