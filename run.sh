#!/bin/bash
# Because include/export is a pain lol
cat ./Classes/*.js > /Users/davidffraser/Magic_The_Gathering/compiled.js
cat ./gameLogic.js >> ./compiled.js

open index.html
