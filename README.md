# Weather App built for Woodmac

Just for fun. Not affliated with Woodmac products.

## Initialisation

Follow these instructions to test out the app

`git clone https://github.com/atreids/woodmac-weather-checker.git`

`cd woodmac-weather-checker/client`

`npm install`

`npm start`

This will start the client, the client relies on an express backend server (it contains hardcoded data, so you don't have to worry about loading a database).

You must open a new terminal in order to start the backend, as the client will be running in your current terminal.

**IN NEW TERMINAL**

`cd woodmac-weather-checker/api`

`npm install`

`npm run dev`

---

The client should open automatically. If it doesn't, it will be located at `http://localhost:3000`

Backend can be viewed at `http://localhost:3001`

Resources can be viewed at `http://locahost:3001/api/weather`
