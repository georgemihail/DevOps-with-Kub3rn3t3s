wget https://en.wikipedia.org/wiki/Special:Random 
cat Special:Random | grep '<link rel="canonical" href=' | grep -o 'https:.*"' | cut -d '"' -f1 | awk '{print "Read "$1 }' > read.txt
cat read.txt
rm Special\:Random