#! /bin/bash

set -e

echo '🚀  Deploying to production!'
cd ./deployment
git push deployment master
cd ..