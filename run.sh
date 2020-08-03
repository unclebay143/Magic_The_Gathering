#!/bin/bash
# Because include/export is a pain lol
cat ./Classes/*.js > /Users/davidffraser/Magic_The_Gathering/GameLogic/compiled.js
cat ./GameLogic/gameLogic.js >> ./GameLogic/compiled.js

open index.html
