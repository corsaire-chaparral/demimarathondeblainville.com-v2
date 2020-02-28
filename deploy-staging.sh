#! /bin/bash
USER=louis
SERVERNAME=nouveau.demimarathondeblainville.com
REMOTEDIR=/var/www/nouveau.demimarathondeblainville.com/public/

rsync -vzr --exclude-from="exclude.deploy" --delete public/ $USER@$SERVERNAME:$REMOTEDIR
