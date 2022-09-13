# Stock Ticker

Display stock prices on a screen

## Setup

* `yarn`
* `yarn start`

## TODO

### Code

* Do not show market map before 10am eastern or after 6pm eastern
* Automatically calculate width of primary element vs. width of screen to get optimal scale factor for the transform style
* Lint/pretty

### Raspberry Pi

* Create dead simple deployment scheme (dev -> master, rasbpi checks for git hash, pulls)
* Create an image that includes node 18
* Replace Raspberry Pi 4 with a 2W Zero
* Autostart
    * Check for new version before start and downloads it (git pull)
    * Starts the process
