#!/bin/sh
echo Start of script to push sqlite updates to GitHub
cd /c/UTDataBootCamp_Z_work/project3/four_factors/Phase2/cloned_from_github/Phase2
git add .
sleep 1
git commit -am "update sqlite after game_predictions.py was run"
sleep 2
git push -u origin master
sleep 15
echo End of script to push sqlite updates to GitHub