#! /bin/bash
set -e

npm run build

echo '⚙️  Creating deployment folder'
rm -rf ./deployment
mkdir ./deployment

cd deployment
git clone --depth=1 git@github.com:abinavseelan/abinavseelan.github.io.git .
git remote add deployment git@github.com:abinavseelan/abinavseelan.github.io.git
rm -rf *
cd ..

echo '📦  Copying files to deployment folder'
cp -R ./public/* ./deployment
cp ./resume.pdf ./deployment

echo '🌏  Copying CNAME to deployment folder'
cp CNAME ./deployment

cd deployment
git add .
git c -m "$1"

echo '✅  Ready to deploy!'
