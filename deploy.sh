#! /bin/bash
USER=louis
SERVERNAME=demimarathondeblainville.com
REMOTEDIR=/var/www/www.demimarathondeblainville.com/public/

rsync -vzr --exclude=from="exclude.deploy" --delete public/ $USER@$SERVERNAME:$REMOTEDIR
