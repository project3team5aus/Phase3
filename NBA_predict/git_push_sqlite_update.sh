#!/usr/bin bash
#!/usr/bin sh
#!/Users/lcc25/Anaconda python

echo Start of script to push sqlite updates to GitHub
cd /c/Users/lcc25/repos/Phase3
git add .
sleep 1
git commit -am "update sqlite after game_predictions.py was run-lcc"
sleep 2
git push -u origin master
sleep 15
echo End of script to push sqlite updates to GitHub