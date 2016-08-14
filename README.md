# Parking Offender App

The app is implemented for android using react-native with redux and realm as database.

The purpose of the app is to take photos of parking offenders and save some basic informations needed (date, address) and report them to some authoritie.
The current only needed option for reporting is via email. 

For convienence there are some settings options (address, email address, email template).

## Scenes

### Show Parking Offender List
A list which shows all parking offenders sorted by date. Show a thumbnail image of the parking offender, the license plate and the date in each row.
The status if the parking offender was already send/reported is displayed with the color of the license plate.

Filter functionality might be useful here (show sended/not sended/all).

### Show Parking Offender
Show all informations for the selected parking offender.

### Edit Parking Offender
Edit a selected parking offender or create a new one.

### Show Settings
Show and edit the settings for the app.

## App State
State = {
    title: :string,
    currentScene: :string
    routes: :object,
    settings: :Settings
    parkingOffender: :int,
    parkingOffenders: :array int
}

ParkingOffender = {

}

Settings = {

}