Intializing project
- npm init -y

Convert ts file to javascript
- tsc app.ts

Watch Mode
- tsc watch

To Exclude file
- In tsConfig.json file add "exclude":["app.ts","node_modules","*.exclude.ts","**/*.exclude.ts"]

To Include file
- In tsConfig.json file add "include":["src","*.include.ts","**/*.include.ts"]

To compile file from specific location mention file in srcDir tag in tsconfig.json and compiler will compile file from that location only

To put js file into specific location there outDir tag in tsconfig.json

In tsConfig.json target tag will have js version

All specific version  configuration will be available under typescript official website

To mention all libraries in tsConfig.json file lib tag is there