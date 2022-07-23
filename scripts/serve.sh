#!/bin/bash

if [ -x "$(command -v brave)" ]
then
	brave html/index.html
	exit 0
fi

if [ -x "$(command -v brave-browser)" ]
then
	brave-browser html/index.html
	exit 0
fi
