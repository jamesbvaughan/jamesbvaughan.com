#!/bin/sh

rsync -r --delete --info=progress2 public/* larry:/var/www/jamesbvaughan.com
