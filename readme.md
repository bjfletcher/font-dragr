# font dragr for Sky

## Introduction

This is a fork of <a href="https://github.com/ryanseddon/font-dragr">github.com/ryanseddon/font-dragr</a> with some quick work to meet some needs such as font persistence on the backend and some specific tests that we need (ability to change font size, switch between black on white and white on black, etc.).

## Development

Run `grunt server` and code away.

## Deployment

This is not scripted and the deployment `war` needs to be created manually:

1. `grunt` to build the frontend
2. remove everything but `WEB-INF` in `server/java/web` (e.g., `cd server/java/web && mv WEB-INF ../ && rm -rf * && mv ../WEB-INF . && cd -`
3. `cp -r dist/* server/java/web/`
4. create the `war` of `server/java` (e.g., use IntelliJ artifects to do this)
5. `nimbus update font-dragr` the `war` on production
