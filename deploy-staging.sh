#! /bin/bash
USER=louis
SERVERNAME=nouveau.demimarathondeblainville.com
REMOTEDIR=/var/www/nouveau.demimarathondeblainville.com/public/

rsync -vzr --delete public/ $USER@$SERVERNAME:$REMOTEDIR
