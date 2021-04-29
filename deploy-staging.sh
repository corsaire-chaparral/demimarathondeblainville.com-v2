#! /bin/bash
USER=louis
SERVERNAME=www-test.demimarathondeblainville.com
REMOTEDIR=/var/www/www-test.demimarathondeblainville.com/public/

rsync -vzr --exclude-from="exclude.deploy" --delete public/ $USER@$SERVERNAME:$REMOTEDIR
