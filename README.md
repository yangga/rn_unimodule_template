# React Native Template Project with Unimdules

## Why did I make this project?
There is no ios/android detached project if you start with EXPO cli. You don't need detached project if you develop very simple project. But, eventually you need detached one because you may need to install some native modules. The other hands, you can also detach the project yourself after started with EXPO cli. I know that, but...I dislike it. It's pretty complicated.

## What is the Unimodule?
https://github.com/unimodules/react-native-unimodules

## Get started !?

### Replacing some texts

#### Find 'com.yourappidhere' and replace by your application ID
> ie. 'com.google.verysexyapp'
#### Find 'yourappnamehere' and replace by your appliation name
> ie. 'VerySexyApp'

### javascript side
```
yarn install
react-native start --reset-cache
```

### ios
```
cd ios
pod install
open rn_unimodule_template.xcworkspace
```
then Run

### android
Open the project by Android studio then syncing gradle and Run.

## Let's import this project!
