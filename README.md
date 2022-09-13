# Stock Ticker

Display stock prices on a screen

## Setup

* `yarn`
* `yarn start`

## TODO

### Code

* Do not show market map before 10am eastern or after 6pm eastern
* Add a bottom padding or margin to push some elements down on futures/crypto pages
* Lint/pretty

### Raspberry Pi

* Create dead simple deployment scheme (dev -> master, rasbpi checks for git hash, pulls)
* Create an image that includes node 18
* Don't let monitor or pi go to sleep
* Replace Raspberry Pi 4 with a 2W Zero
* Autostart
    * Check for new version before start and downloads it (git pull)
    * Starts the process
