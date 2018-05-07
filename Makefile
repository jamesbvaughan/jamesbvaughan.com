all:
	./bin/hugo

deploy:
	rsync -r --delete --info=progress2 public/* larry:/var/www/jamesbvaughan.com
