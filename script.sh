#!/bin/sh

swarm=C:/Users/SergiiBomko/swarm
hash=$($swarm --defaultpath index.html --recursive up ./data)
echo $hash

$swarm down bzz:/$hash/index.html