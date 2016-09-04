# Parking Offender App

The app is implemented for android using react-native with redux and realm as database.

The purpose of the app is to take photos of parking offenders and save some basic informations needed (date, address) and report them to some authoritie.
The current only needed option for reporting is via email. 

For convienence there are some settings options (address, email address, email template).

-------------------------------------------

# Scenes
The app consist of four different scences. The functionality and purpose of the scenes is described below.


## 1. Parking Offender List

A list which shows all parking offenders sorted by date. 
Shows a thumbnail image of the parking offender, the license plate and the date and time in each row.
The status if the parking offender was already send/reported is displayed with the color of the license plate.

Filter functionality might be useful here (show sended/not sended/all). It is already in the state but needs to be impleneted in the app itself.

## 2. Show Parking Offender
Show all informations for the selected parking offender.

## 3. Edit Parking Offender
Edit a selected parking offender or create a new one.

## 4. Settings
Show and edit the settings for the app.

-------------------------------------------

# App State
```JavaScript
 {
        // toolbar state
        title: 'Parking Offenders',
        actions: [],
        showBackButton: false,
        scene: SHOW_LIST,

        // routing state
        previousRoute: 'list',
        currentRoute: 'list',

        // settings state
        settings: {},

        // list state
        parkingOffenderFilter: 'ALL',
        parkingOffenderFilters: ['ALL', 'SENDED', 'NOT_SENDED'],
        parkingOffenders: dataProvider.getParkingOffenders(),

        // edit/show state
        parkingOffender: {}
    }
```

# Database
Parkin Offender Scheme:

